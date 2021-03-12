//Modules
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

//Constanst
import { heightPercentageToDP, moderateScale, verticalScale, widthPercentageToDP } from '../../helpers/ScailingScreen';
import { COLORS } from '../../helpers/constants';


const Listcard = ({ navigation, icon, title, description, action, viewMoreAction }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                {/* <SvgSelector icons={icon} size={35} /> */}
                <View style={styles.titleWrapper}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.description}>{description}</Text>
                </View>
            </View>

            {data.map((item, i) =>
                <TouchableOpacity
                    key={i} style={styles.itemContainer}
                    onPress={action ? () => action() : () => console.log("pressed")}
                >
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.item}>{item.item}</Text>
                    <View style={styles.wrapper}>
                        <Text style={styles.type}>{item.type}</Text>
                        <Text style={styles.date}>{item.date}</Text>
                    </View>
                </TouchableOpacity>
            )}

            <TouchableOpacity
                onPress={viewMoreAction ? (e) => viewMoreAction(e) : () => console.log("Viewmore")}
                style={styles.viewMoreButton}
            >
                <Text style={styles.buttonText}>View more</Text>
            </TouchableOpacity>

        </View>
    );
}

export default Listcard;

const styles = StyleSheet.create({
    container: {
        width: '95%',
        backgroundColor: 'white',
        borderRadius: 5,
        shadowColor: 'black',
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.2,
        elevation: 2,
        alignItems: 'center',
        marginBottom: 15,
        paddingHorizontal: moderateScale(15),
        paddingVertical: moderateScale(10)
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    topDivider: {
        width: '100%',
        paddingTop: 2,
        paddingBottom: 2,
        height: 10
    },
    titleWrapper: {
        marginLeft: moderateScale(10),
        justifyContent: 'space-between',
        height: heightPercentageToDP('5%'),
        marginBottom: verticalScale(5)
    },
    title: {
        fontSize: moderateScale(18),
        textAlign: 'left',
        color: COLORS.darkBlue,
        fontWeight: 'bold'
    },
    description: {
        fontSize: moderateScale(12),
        color: COLORS.darkGrey,
        fontWeight: '400'
    },
    itemContainer: {
        width: widthPercentageToDP('93%'),
        paddingHorizontal: moderateScale(10),
        marginVertical: verticalScale(5),
        marginTop: verticalScale(10)
    },
    name: {
        fontWeight: 'bold',
        color: COLORS.darkGrey,
        fontSize: moderateScale(15),
        marginBottom: moderateScale(2)
    },
    item: {
        fontSize: moderateScale(14),
        color: COLORS.darkGrey,
        marginBottom: moderateScale(2)
    },
    type: {
        fontSize: moderateScale(14),
        color: COLORS.darkBlue,
        fontWeight: '500',
        marginBottom: moderateScale(2)
    },
    wrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    date: {
        fontSize: moderateScale(12),
        color: COLORS.darkGrey
    },
    viewMoreButton: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        height: heightPercentageToDP('8%')
    },
    buttonText: {
        fontSize: moderateScale(16),
        color: COLORS.darkBlue,
        fontWeight: 'bold'
    }
})


const data = [
    {
        key: '1',
        name: 'Team 01',
        item: 'My powerfull team',
        date: 'Oct 5, 2018'
    },
    {
        key: '2',
        name: 'Team 02',
        item: 'My spare team',
        date: 'Oct 5, 2018'
    },
    {
        key: '3',
        name: 'Team 03',
        item: 'my ace team',
        date: 'Oct 5, 2018'
    }
]