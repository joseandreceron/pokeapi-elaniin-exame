import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, SafeAreaView, Platform } from 'react-native';

//Components
import TextLabel from "../UI/TextLabel";

//Cnstants
import { COLORS } from '../../helpers/constants';
import { scale, moderateScale, verticalScale, heightPercentageToDP } from '../../helpers/ScailingScreen';

class HomeHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle='light-content' />

                <View style={styles.wrapper}>
                    <TextLabel additionalStyles={styles.welcomeTitle}>{this.props.userName}</TextLabel>
                    <TextLabel additionalStyles={styles.userTitle}>Kanto region</TextLabel>
                </View>

            </SafeAreaView>
        );
    }
}

export default HomeHeader;

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.lightBlue,
        height: heightPercentageToDP('35%'),
        width: '100%',
        padding: scale(10),
        justifyContent: 'center',
    },
    iconContainer: {
        // backgroundColor: COLORS.lightBlue,
        backgroundColor: "green",
        width: '100%',
        height: verticalScale(50),
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: verticalScale(10),
        flexDirection: 'row',
        position: 'absolute',
        top: Platform.OS === 'ios' ? verticalScale(30) : verticalScale(20),
        alignSelf: 'center',
        paddingHorizontal: moderateScale(20),
    },
    wrapper: {
        marginLeft: Platform.OS === 'ios' ? moderateScale(10) : 0,
    },
    welcomeTitle: {
        fontSize: moderateScale(30),
        fontWeight: 'bold',
        color: COLORS.white
    },
    userTitle: {
        fontSize: moderateScale(25),
        fontWeight: '500',
        color: COLORS.white,
        marginTop: verticalScale(5)
    }
})