
import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    FlatList,
    View,
    Text,
} from 'react-native';

//Components
import Button from '../Buttons/Button';
import ModalHeader from '../Header/ModalHeader';
import SelectedPokemons from '../Cards/SelectedPokemons';
import SelectedPokemonsDetails from '../Modals/SelectedPokemonsDetails';
import PokemonList from '../../components/List/PokemonList';

//Constants
import { verticalScale } from '../../helpers/ScailingScreen';
import { COLORS } from '../../helpers/constants';


const SelectPokemon = ({ navigation, loading, showModal, data, selectedPokemons, deletePokemon }) => {
    const [changeScreen, setScreen] = useState(1);
    const [pokemonData, setPokemonData] = useState({})

    const changeStep = (e, data) => {
        console.log(e)
        setScreen(data)
        setPokemonData(e)
    }

    return (
        <View style={styles.container}>

            <ModalHeader
                title={"Select Pokemon"}
                leftIcon={'ios-close'}
                actionLeft={() => showModal(false)}
            />

            {changeScreen === 1 ? (
                <PokemonList
                    data={data}
                    navigation={navigation}
                    action={(e) => changeStep(e, 2)}
                />
            ) : (
                <SelectedPokemonsDetails
                    data={pokemonData}
                    goBack={() => setScreen(1)}
                    selectedPokemons={(e) => selectedPokemons(e)}
                />
            )}



        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },

});

export default SelectPokemon;
