
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


const PokemonTypeList = ({ navigation, name, data, action }) => {
    return (
        <View style={styles.container}>
            {data && data.map((item, key) =>
                <View  key={key} style={styles.content}>
                    <Text style={styles.ability}>{item.type.name.toUpperCase()}</Text>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginVertical: 10,
        justifyContent: "space-evenly",
    },
    content: {
        backgroundColor: COLORS.darkyellow,
        padding: 10,
        marginHorizontal: 10,
        borderRadius: 15
    },
    ability: {
        fontSize: moderateScale(14),
        fontWeight: "bold",
        color: COLORS.blackV2,
    }
});

export default PokemonTypeList;
