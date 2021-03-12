
import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

//Components
import PokemonList from '../components/List/PokemonList';
import TextLabel from '../components/UI/TextLabel';
import Loader from '../components/UI/Loader';

//Functions
import { getAllPokemons } from '../store/pokemons/pokemon.actions';

//Constants
import { verticalScale } from '../helpers/ScailingScreen';
import { COLORS } from '../helpers/constants';


const CreateTeam = ({ navigation }) => {
    const dispatch = useDispatch();
    const { allPokemons } = useSelector(state => state.pokemon);

    useEffect(() => {
        dispatch(getAllPokemons())
    }, [])

    return (
        <View style={styles.container}>

            <TextLabel size={22}>Select a minimum of 3 pokemons</TextLabel>

            {allPokemons?.isLoading ? (
                <Loader
                    loadingMessage={"Loading List"}
                    errorState={allPokemons?.error ? true : false}
                    errorMessage={"Error while loading list"}
                >

                </Loader>
            ) : (
                <PokemonList
                    data={allPokemons?.data?.results}
                />
            )
            }




        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        padding: 15
    },
    content: {

    },
});

export default CreateTeam;
