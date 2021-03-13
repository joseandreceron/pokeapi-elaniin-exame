
import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

//Components
import PokemonList from '../components/List/PokemonList';
import TextLabel from '../components/UI/TextLabel';
import Loader from '../components/UI/Loader';
import Button from '../components/Buttons/Button';

//Functions
import { getPokemonsById } from '../store/pokemons/pokemon.actions';

//Constants
import { moderateScale, verticalScale } from '../helpers/ScailingScreen';
import { COLORS } from '../helpers/constants';
import AbilitiesList from '../components/List/AbilitiesList';


const PokemonDetails = ({ navigation, route }) => {
    const dispatch = useDispatch();
    const { pokemonDetail } = useSelector(state => state.pokemon);

    useEffect(() => {
        const url = route.params.url;
        dispatch(getPokemonsById(url))
    }, [])

    console.log(pokemonDetail.data);


    const setPokemon = (e) => {
        if (pokemonDetail?.data) {

            const pokemonData = {
                name: e.name,
                id: e.url,
                photo: pokemonDetail?.data?.sprites?.front_default,
                type: pokemonDetail?.data?.types,
            }
            route.params.selectedPokemons(pokemonData)
        }
    }


    return (
        <ScrollView style={styles.container}>
            {pokemonDetail?.isLoading ? (
                <Loader
                    loadingMessage={"Loading List"}
                    errorState={pokemonDetail?.error ? true : false}
                    errorMessage={"Error while loading list"}
                >

                </Loader>
            ) : (
                <View style={styles.content}>
                    <Image
                        source={{ uri: pokemonDetail?.data?.sprites?.front_default }}
                        style={styles.pokemonPhoto}
                    />

                    <TextLabel size={25}>{pokemonDetail?.data?.name}</TextLabel>

                    <View style={styles.pokemonDetail}>

                        <TextLabel additionalStyles={styles.title}>Abilities</TextLabel>
                        <AbilitiesList
                            data={pokemonDetail?.data?.abilities}
                        />

                        <Button
                            title={"Add to team"}
                            aditionalStyle={styles.buttonStyles}
                            onPress={() => setPokemon(route.params.pokemonData)}
                        // onPress={() => route.params.selectedPokemons(route.params.pokemonData)}
                        />

                    </View>

                </View>
            )}
        </ScrollView >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    content: {
        alignItems: 'center',
    },
    pokemonPhoto: {
        height: 150,
        width: 250,
    },
    pokemonDetail: {
        width: "100%",
        padding: 15
    },
    title: {
        fontSize: moderateScale(25),
        fontWeight: "bold"
    }
});

export default PokemonDetails;
