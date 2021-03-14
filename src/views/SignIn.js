//Modules
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, StatusBar, TextInput, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Formik } from 'formik';
import * as yup from 'yup';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

//Components
import Button from '../components/Buttons/Button';
import Input from '../components/Forms/Input';
import TextLabel from '../components/UI/TextLabel';

//constants
import { scale, verticalScale, moderateScale } from '../helpers/ScailingScreen';
import { COLORS } from '../helpers/constants';
import { cleanSessionStore, signIn } from '../store/session/session.actions';


export const SignIn = (({ navigation }) => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.session);

  useEffect(() => {
    dispatch(cleanSessionStore())
  }, [])

  const userSignIn = async (values, actions) => {
    dispatch(signIn(values))
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle='dark-content' />
      <KeyboardAwareScrollView>

        <Image
          source={require('../assets/images/PokeApi-logo.png')}
          style={styles.logo}
        />

        <View style={styles.wrapper}>
          <TextLabel additionalStyles={styles.title}>Welcome to</TextLabel>
          <TextLabel additionalStyles={styles.subtitle}>Poke Api</TextLabel>
        </View>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, actions) => userSignIn(values, actions)}>
          {props => (
            <View style={styles.wrapper}>
              <Input
                title={"Email"}
                onChangeText={props.handleChange('username')}
                value={props.values.user}
                keyboardType="email-address"
                placeholder={"example@example.com"}
                placeholderTextColor={COLORS.lightBlack}
                error={props.touched.username && props.errors.username}
              />

              <Input
                title={"Password"}
                onChangeText={props.handleChange('password')}
                value={props.values.password}
                secureTextEntry={true}
                placeholder={"XXXXXXX"}
                placeholderTextColor={COLORS.lightBlack}
                error={props.touched.password && props.errors.password}
              />

                <TextLabel color={"red"}>{user?.error}</TextLabel>

              <View style={styles.buttonContainer}>
                <Button
                  backgroundColor={COLORS.darkBlue}
                  title={"Login"}
                  titleColor={COLORS.white}
                  // onPress={() => navigation.navigate('Home')}
                  onPress={props.handleSubmit}
                  isLoading={user?.isLoading}
                />

                <TouchableOpacity
                  onPress={() => navigation.navigate("SignUp")}
                >
                  <Text style={styles.register}>Don't have an account? <Text style={styles.registerTwo}>Register now</Text></Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </Formik>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}
)

const initialValues = { username: '', password: '' };

const validationSchema = yup.object().shape({
  username: yup.string().required('This Field is requiered'),
  password: yup.string().required('This Field is requiered'),
});


export default SignIn;

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