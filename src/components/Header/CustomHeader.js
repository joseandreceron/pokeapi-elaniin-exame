import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, SafeAreaView, Platform, TouchableOpacity } from 'react-native';

import { COLORS } from '../../helpers/constants';
import { scale, moderateScale, verticalScale, heightPercentageToDP } from '../../helpers/ScailingScreen';
import Ionicons from 'react-native-vector-icons/Ionicons'

class CustomHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.iconContainer}>
                <View style={styles.wrapper}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.openDrawer()}
                    >
                        {/* <SvgSelector icons='menu' size={25} /> */}
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Ionicons
                            name='notifications'
                            size={30}
                            color={COLORS.white}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default CustomHeader;

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.lightBlue,
        height: heightPercentageToDP('35%'),
        width: '100%',
        padding: scale(10),
        justifyContent: 'center',
    },
    iconContainer: {
        backgroundColor: COLORS.lightBlue,
        zIndex: 1,
        width: '100%',
        height: Platform.OS === 'ios' ? verticalScale(90) : verticalScale(60),
        position: 'absolute',
        top: Platform.OS === 'ios' ? verticalScale(0) : verticalScale(0),
        alignSelf: 'center',
        paddingHorizontal: moderateScale(20),
    },
    wrapper: {
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: verticalScale(10),
        flexDirection: 'row',
        top: Platform.OS === 'ios' ? verticalScale(45) : verticalScale(20),
    }
})