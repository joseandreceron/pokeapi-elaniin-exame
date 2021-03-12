import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

//Components
import TextLabel from '../UI/TextLabel';

//constants
import { COLORS } from '../../helpers/constants';
import { moderateScale, scale, verticalScale } from '../../helpers/ScailingScreen';

const Input = (props) =>  {
    return (
        <View style={styles.container}>

            <Text style={[styles.title, props.theme === "dark" ? styles.darkTheme : {}]}>{props.title}</Text>

            <View style={[styles.inputContainer, props.multiline ? styles.multilineContainer : {}]}>

                <TextInput
                    style={[styles.input, props.multiline ? styles.multilineInput : {}]}
                    placeholder={props.placeholder}
                    multiline={props.multiline}
                    onChangeText={props.onChangeText}
                    value={props.value}
                    secureTextEntry={props.secureTextEntry}
                    placeholderTextColor={COLORS.darkGrey}
                    autoCapitalize="none"
                    keyboardType={props.keyboardType ? props.keyboardType : 'default'}
                />


            </View>
            {props.error &&
                <TextLabel color={COLORS.red}>{props.error}</TextLabel>
            }
        </View>
    )
}

export default Input;

const styles = StyleSheet.create({
    container: {
        marginTop: verticalScale(10)
    },
    title: {
        fontSize: moderateScale(16),
        fontWeight: "500",
        marginBottom: verticalScale(3),
        color: COLORS.grey
    },
    darkTheme: {
        fontSize: moderateScale(16),
        fontWeight: "500",
        marginBottom: verticalScale(3),
        color: COLORS.blackV2
    },
    inputContainer: {
        width: "100%",
        height: verticalScale(40),
        backgroundColor: "white",
        alignItems: "center",
        marginVertical: verticalScale(5),
        borderWidth: 0.5,
        borderRadius: moderateScale(30),
        flexDirection: "row",
        borderColor: "#9E9E9E",
        paddingHorizontal: moderateScale(15),
    },
    input: {
        height: verticalScale(45),
        width: "80%",
    },
    iconStyles: {
        marginRight: moderateScale(10)
    },
    multilineContainer: {
        width: "100%",
        height: verticalScale(130),
        borderRadius: 15,
        paddingHorizontal: moderateScale(15),
        paddingVertical: verticalScale(10),
    },
    multilineInput: {
        height: verticalScale(90),
        width: "100%",
    }
})