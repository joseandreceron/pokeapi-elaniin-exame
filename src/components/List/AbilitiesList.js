
import React from 'react';
import {
    StyleSheet,
    FlatList,
    View,
    Text,
} from 'react-native';

//Components
import Button from '../Buttons/Button';
import PokemonCards from '../Cards/PokemonCards';
import Divider from "../UI/Divider";

//Constants
import { moderateScale, verticalScale } from '../../helpers/ScailingScreen';
import { COLORS } from '../../helpers/constants';


const AbilitiesList = ({ navigation, name, data, action }) => {
    return (
        <>
            {data && data.map((item, key) =>
                <View key={key} style={styles.container}>
                    <View style={styles.dots} />
                    <Text style={styles.ability}>{item.ability.name}</Text>
                </View>
            )}
        </>

    );
};

const styles = StyleSheet.create({
    flatlistStyles: {
        marginTop: verticalScale(15),
        paddingBottom: verticalScale(100)
    },
    container: {
        flexDirection: "row",
        width: "100%",
        marginVertical: 10,
        alignItems: 'center'
    },
    dots: {
        backgroundColor: COLORS.red,
        height: 10,
        width: 10,
        borderRadius: 10,
        marginHorizontal: 10
    },
    ability: {
        fontSize: moderateScale(17)
    }
});

export default AbilitiesList;
