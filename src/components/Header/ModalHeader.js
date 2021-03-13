
//Modules
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView, TouchableOpacity, Image, ScrollView } from "react-native";
import moment from 'moment';
import "moment/locale/es"
import { useSelector, useDispatch } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';

//Components
import TextLabel from '../UI/TextLabel';


//Constants
import { COLORS } from '../../helpers/constants';
import { moderateScale, verticalScale } from '../../helpers/ScailingScreen';



const ModalHeader = ({ title, leftIcon, rightIcon, actionLeft, actionRight }) => {
    const dispatch = useDispatch();

    return (
        <View style={styles.container}>

            <View style={styles.leftContainer}>
                {leftIcon &&
                    <TouchableOpacity
                        onPress={actionLeft ? (e) => actionLeft(e) : () => console.log("iconLeft")}
                    >
                        <Ionicons
                            name={leftIcon ? leftIcon : "ios-arrow-back"}
                            size={30}
                            color={COLORS.blackV2}
                        />
                    </TouchableOpacity>
                }
            </View>

            <Text style={styles.title}>{title}</Text>

            <View style={styles.rightContainer}>
                {rightIcon &&
                    <TouchableOpacity
                        onPress={actionRight ? (e) => actionRight(e) : () => console.log("iconLeft")}
                    >
                        <Ionicons
                            name={rightIcon ? rightIcon : "ios-arrow-back"}
                            size={30}
                            color={COLORS.blackV2}
                        />
                    </TouchableOpacity>
                }
            </View>
        </View>
    )
}

export default ModalHeader;

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.white,
        height: 120,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: "row",
        paddingHorizontal: 20,
        paddingTop: verticalScale(20)
    },
    title: {
        fontSize: moderateScale(22),
        fontWeight: "bold",
        color: COLORS.blackV2
    },
    leftContainer: {
        width: 50,
        height: 50,
        backgroundColor: COLORS.white,
        justifyContent: "center",
        alignItems: "center"
    },
    rightContainer: {
        width: 50,
        height: 50,
        backgroundColor: COLORS.white,
        justifyContent: "center",
        alignItems: "center"
    }
})