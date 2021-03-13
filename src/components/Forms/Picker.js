import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

//Components
import TextLabel from '../UI/TextLabel';
import Ionicons from "react-native-vector-icons/Ionicons";

//Constants
import { COLORS } from '../../helpers/constants';
import { heightPercentageToDP, moderateScale, scale, verticalScale, widthPercentageToDP } from '../../helpers/ScailingScreen';

const Picker = ({ theme, placeholder, title, value, data, action, icon, error }) => {
    return (
        <View style={styles.container}>

            <Text style={[styles.title, theme === "dark" ? styles.darkTheme : {}]}>{title}</Text>

            <View style={styles.inputContainer}>

                <RNPickerSelect
                    value={value}
                    placeholder={{
                        label: placeholder,
                        value: "",
                        color: COLORS.darkGrey,
                    }}
                    items={data}
                    onValueChange={action}
                    useNativeAndroidPickerStyle={false}
                    doneText="Confirm"
                    style={{
                        inputAndroid: {
                            fontSize: moderateScale(14),
                            color: COLORS.darkGrey,
                            width: widthPercentageToDP('65%'),
                        },
                        inputIOSContainer: {
                            fontSize: moderateScale(16),
                            color: COLORS.darkGrey,
                            width: widthPercentageToDP('70%'),
                            height: heightPercentageToDP('5%'),
                            justifyContent: 'center',
                            alignItems: 'flex-start'
                        },
                    }}
                />

                <View style={styles.iconStyles}>
                    <Ionicons
                        name={"ios-arrow-down"}
                        size={15}
                    />
                </View>

            </View>
            {error &&
                <TextLabel color={COLORS.red}>{error}</TextLabel>
            }
        </View>
    )
}

export default Picker;

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
        marginLeft: moderateScale(25),
    },
    multilineContainer: {
        width: "100%",
        height: verticalScale(100),
        borderRadius: 15,
        paddingHorizontal: moderateScale(15),
        paddingVertical: verticalScale(10),
    },
    multilineInput: {
        height: verticalScale(90),
        width: "100%",
    }
})

const dataDemo = [
    { label: 'Bug', value: 'football' },
    { label: 'Task', value: 'baseball' },
    { label: 'Epic', value: 'hockey' },
]