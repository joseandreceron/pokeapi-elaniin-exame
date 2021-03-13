
import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    Alert
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
import Button from '../components/Buttons/Button';


const CreateTeam = ({ navigation }) => {
    const [pokemonSelected, setSelectedPokemons] = useState([]);

    const dispatch = useDispatch();
    const { allPokemons } = useSelector(state => state.pokemon);

    useEffect(() => {
        dispatch(getAllPokemons())
    }, [])


    const createTeam = () => {
        if (pokemonSelected.length >= 3) {
            console.log("gruop created")
        } else {
            Alert.alert("Error", "Please select 3 or more Pokemon")
        }
    }

    const selectedPokemons = (e) => {
        const pokemons = pokemonSelected
        if (pokemons.length < 6) {
            pokemons.push(e);
            console.log("list of pokemons", pokemons)
        } else {
            Alert.alert("Error", "You can only add up to 6 pokemons")
        }
    }


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
                    navigation={navigation}
                    selectedPokemons={(e) => selectedPokemons(e)}
                />
            )}


            <Button
                title={"Create Team"}
                aditionalStyle={styles.buttonStyles}
                onPress={() => createTeam()}
            />

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
    buttonStyles: {
        position: "absolute",
        bottom: 30,
        alignSelf: "center"
    }
});

export default CreateTeam;
