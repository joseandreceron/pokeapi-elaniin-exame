
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
        <FlatList
            data={data}
            keyExtractor={({ item, key }) => key}
            showsVerticalScrollIndicator={false}
            nestedScrollEnabled
            contentContainerStyle={styles.flatlistStyles}
            renderItem={({ item, i },) =>
                <View style={styles.container}>
                    <View style={styles.dots} />
                    <Text style={styles.ability}>{item.ability.name}</Text>
                </View>
            }
        />
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
        marginVertical: 10
    },
    dots: {
        backgroundColor: COLORS.red,
        height: 20,
        width: 20,
        borderRadius: 10,
        marginHorizontal: 10
    },
    ability: {
        fontSize: moderateScale(17)
    }
});

export default AbilitiesList;
