//Modules
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";

//Constanst
import { heightPercentageToDP, moderateScale, scale, verticalScale, widthPercentageToDP } from '../../helpers/ScailingScreen';
import { COLORS } from '../../helpers/constants';

//Components
import AbilitiesList from '../List/AbilitiesList';
import PokemonTypeList from '../List/PokemonTypeList';
import TextLabel from '../UI/TextLabel';


const SelectedPokemons = ({ navigation, name, photo, type, action }) => {
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: photo }}
                style={styles.pokemonPhoto}
            />

            <View style={styles.wrapper}>
                <TextLabel additionalStyles={styles.title}>{name}</TextLabel>
                <PokemonTypeList
                    data={type}
                />
            </View>

            <TouchableOpacity
                onPress={action ? (e) => action(name) : () => console.log("DeletePokemons")}
            >
                <Ionicons
                    name={"ios-close"}
                    size={scale(25)}
                />
            </TouchableOpacity>

        </View>
    );
}

export default SelectedPokemons;

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.white,
        flexDirection: "row",
        borderRadius: 10,
        borderColor: "black",
        shadowOffset: { width: 2, height: 5 },
        shadowColor: COLORS.black,
        shadowOpacity: 0.15,
        shadowRadius: 8,
        elevation: 6,
        marginVertical: verticalScale(10),
        justifyContent: "space-between",
        paddingHorizontal: 10,
        alignItems: 'center'
    },
    pokemonPhoto: {
        height: 100,
        width: 100,
    },
    wrapper: {
        width: moderateScale(200),
        justifyContent: "flex-start",
    },
    title: {
        marginHorizontal: 20,
        fontSize: moderateScale(16),
        fontWeight: "bold"
    }
})
