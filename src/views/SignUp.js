//Modules
import React, { useEffect, useState } from 'react';
import { View, Alert, StyleSheet, Image, SafeAreaView, StatusBar, TextInput, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

//Components
import Button from '../components/Buttons/Button';
import Input from '../components/Forms/Input';
import TextLabel from '../components/UI/TextLabel';
import Picker from '../components/Forms/Picker';

//constants
import { scale, verticalScale, moderateScale } from '../helpers/ScailingScreen';
import { COLORS } from '../helpers/constants';

//functions
import { getAllRegions } from '../store/region/region.actions';
import { register, registerCleanUp } from '../store/session/session.actions';
import { generateId } from '../helpers/helper-functions';

export const SignUp = (({ navigation }) => {
    const dispatch = useDispatch();
    const { allregions } = useSelector(state => state.region);
    const { userRegister } = useSelector(state => state.session);
    const regions = useSelector(state => state.region.allregions?.data?.results?.map(c => ({ label: c.name, value: c.name })) ?? []);

    useEffect(() => {
        dispatch(registerCleanUp())
        dispatch(getAllRegions())
    }, [])

    const signUp = (values, actions) => {
        id = values.id = generateId();
        const user = {};
        user[id] = { ...values }
        dispatch(register(user));
    }

    useEffect(() => {
        if (userRegister?.success) {
            Alert.alert(
                'Success',
                'Account has been created successfully',
                [
                    { text: 'Ok', onPress: () => { dispatch(registerCleanUp()), navigation.goBack() } },
                ],
                { cancelable: false },
            );
        }
    }, [userRegister?.success])

    useEffect(() => {
        if (userRegister?.error) {
            Alert.alert("Error", "An account created error has occurred.")
        }
    }, [userRegister?.error])

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAwareScrollView>

                <StatusBar barStyle='dark-content' />

                <View style={styles.wrapper}>
                    <TextLabel additionalStyles={styles.subtitle}>Please create a user</TextLabel>
                </View>


                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={(values, actions) => signUp(values, actions)}>
                    {props => (
                        <View style={styles.wrapper}>

                            <Input
                                title={"Name"}
                                onChangeText={props.handleChange('username')}
                                placeholder={"Juan Perez"}
                                placeholderTextColor={COLORS.lightBlack}
                                value={props.values.username}
                                error={props.touched.username && props.errors.username}
                            />

                            <Input
                                title={"Email"}
                                onChangeText={props.handleChange('email')}
                                keyboardType="email-address"
                                placeholder={"example@example.com"}
                                placeholderTextColor={COLORS.lightBlack}
                                value={props.values.email}
                                error={props.touched.email && props.errors.email}
                            />

                            <Picker
                                title={"Select Region"}
                                placeholder={"Please select a region"}
                                data={regions}
                                action={props.handleChange('region')}
                                value={props.values.region}
                                error={props.touched.region && props.errors.region}
                            />


                            <Input
                                title={"Password"}
                                onChangeText={props.handleChange('password')}
                                secureTextEntry={true}
                                placeholder={"XXXXXXX"}
                                placeholderTextColor={COLORS.lightBlack}
                                value={props.values.password}
                                error={props.touched.password && props.errors.password}
                            />

                            <Input
                                title={"Confirm Password"}
                                onChangeText={props.handleChange('passwordConfirmation')}
                                secureTextEntry={true}
                                placeholder={"XXXXXXX"}
                                placeholderTextColor={COLORS.lightBlack}
                                value={props.values.passwordConfirmation}
                                error={props.touched.passwordConfirmation && props.errors.passwordConfirmation}
                            />

                            <View style={styles.buttonContainer}>
                                <Button
                                    backgroundColor={COLORS.darkBlue}
                                    title={"Create user"}
                                    titleColor={COLORS.white}
                                    onPress={props.handleSubmit}
                                    isLoading={userRegister?.isLoading}
                                />
                            </View>

                        </View>
                    )}
                </Formik>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    );
})

export default SignUp;

const initialValues = {
    username: '',
    email: '',
    password: "",
    passwordConfirmation: "",
    region: null
};

const validationSchema = yup.object().shape({
    username: yup.string().required('This Field is requiered'),
    email: yup.string().required('This Field is requiered'),
    password: yup.string().required('This Field is requiered').nullable(),
    passwordConfirmation: yup.string().required('This Field is requiered').nullable(),
    region: yup.string().required('This Field is requiered').nullable(),
});


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: scale(10),
        alignItems: 'center',
        backgroundColor: COLORS.white
    },
    logo: {
        width: 250,
        height: 100,
        marginTop: verticalScale(80)
    },
    title: {
        fontSize: moderateScale(25),
        fontWeight: "bold",
        color: COLORS.blackV2
    },
    subtitle: {
        fontSize: moderateScale(18),
        color: COLORS.darkGrey,
        marginTop: verticalScale(5)
    },
    wrapper: {
        marginTop: verticalScale(30),
        paddingHorizontal: moderateScale(25),
        width: "100%",
    },
    textInput: {
        borderBottomWidth: 2,
        borderColor: '#352641',
        width: '90%',
        height: '25%',
        fontSize: moderateScale(14)
    },
    loginButton: {
        height: verticalScale(55),
        width: moderateScale(300),
        backgroundColor: COLORS.lightBlue,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: verticalScale(25)
    },
    loginButtonText: {
        fontSize: moderateScale(16),
        color: COLORS.white,
        fontWeight: 'bold'
    },
    forgotButton: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        marginTop: verticalScale(5),
        marginBottom: verticalScale(15)
    },
    forgotButtonText: {
        color: COLORS.blackV2,
    },
    buttonContainer: {
        justifyContent: "center",
        alignItems: "center"
    },
    register: {
        fontSize: moderateScale(14),
        color: COLORS.grey,
        marginTop: verticalScale(10)
    },
    registerTwo: {
        color: COLORS.darkBlue,
        fontWeight: "bold"
    }
})
