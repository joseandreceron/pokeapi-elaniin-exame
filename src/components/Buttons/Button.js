import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native';

//Constants
import { COLORS, FONTS } from '../../helpers/constants';
import { moderateScale, verticalScale } from '../../helpers/ScailingScreen';


function Button(props) {
    return (
        <TouchableOpacity
            style={
                [styles.button,
                props.aditionalStyle,
                { backgroundColor: props.backgroundColor ? props.backgroundColor : COLORS.darkBlue, },
                !props.hasShadow ? {} : {
                    shadowColor: 'black',
                    shadowOffset: { width: 3, height: 3 },
                    shadowOpacity: 0.2,
                    elevation: 2,
                }
                ]
            }
            onPress={props.onPress ? () => props.onPress() : () => console.log("OnPress")}
        >
            {!props.isLoading ? (
                <Text
                    style={[styles.buttonText,
                    props.aditionalTitle, {
                        fontFamily: props.font ? props.font : FONTS.primary,
                        color: props.titleColor ? props.titleColor : COLORS.white
                    }]}>{props.title}</Text>
            ) : (
                <ActivityIndicator
                    size={"large"}
                    color={COLORS.white}
                />
            )
            }
        </TouchableOpacity>
    )
}

export default Button;

const styles = StyleSheet.create({
    button: {
        height: verticalScale(40),
        width: moderateScale(320),
        backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25,
        marginVertical: verticalScale(5),
        flexDirection: "row"
    },
    buttonText: {
        fontWeight: "600",
        fontSize: moderateScale(14)
    },
    iconContainer: {
        marginRight: moderateScale(10)
    }
})