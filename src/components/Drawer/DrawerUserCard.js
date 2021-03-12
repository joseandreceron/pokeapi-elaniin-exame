import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import { moderateScale, verticalScale } from '../../helpers/ScailingScreen';
import { COLORS } from '../../helpers/constants';

class DrawerUserCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.userName}>Juan Perez</Text>
                <Text style={styles.workName}>Empresa Importadora XYZ</Text>
            </View>
        );
    }
}

export default DrawerUserCard;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 200,
        justifyContent: 'center',
        padding: moderateScale(10),
        marginLeft: moderateScale(20)
    },
    logo: {
        height: 70,
        width: 130,
    },
    userName: {
        fontSize: moderateScale(24),
        marginTop: verticalScale(10),
        fontWeight: 'bold',
        color: COLORS.darkGrey,
        textAlign: 'left'
    },
    workName: {
        fontSize: moderateScale(14),
        marginTop: verticalScale(5),
        color: COLORS.darkGrey,
        textAlign: 'left'
    }
})