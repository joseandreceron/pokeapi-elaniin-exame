
import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Modal,
    View,
    Text,
    Alert
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

//Components
import PokemonList from '../components/List/PokemonList';
import TextLabel from '../components/UI/TextLabel';
import Loader from '../components/UI/Loader';
import Button from '../components/Buttons/Button';
import MyTeam from "../components/Modals/MyTeam";

//Functions
import { getAllPokemons } from '../store/pokemons/pokemon.actions';
import { createPokemonTeam } from '../store/session/session.actions';
import { generateId } from '../helpers/helper-functions';

//Constants
import { verticalScale } from '../helpers/ScailingScreen';
import { COLORS } from '../helpers/constants';


const CreateTeam = ({ navigation }) => {
    const [pokemonSelected, setSelectedPokemons] = useState([]);
    const [showTeamModal, setShowTeamModal] = useState(false);
    const [loading, isLoading] = useState(false);

    const dispatch = useDispatch();
    const { allPokemons } = useSelector(state => state.pokemon);
    const { user, myTeams } = useSelector(state => state.session);

    useEffect(() => {
        dispatch(getAllPokemons())
    }, [])


    const createTeam = () => {
        if (pokemonSelected.length >= 3) {
            const id = generateId();

            const groupData = {};
            groupData[id] = {
                "team_name": "My Awesome Group",
                "pokemons": pokemonSelected,
                "id": id
            }

            dispatch(createPokemonTeam(user?.data?.id, groupData))

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

    const deleteSelectedPokemon = (e) => {
        isLoading(true)
        const pokemons = pokemonSelected
        const hasPokemon = pokemons.some(pokemon => pokemon.name === e);

        if (hasPokemon) {
            const index = pokemons.findIndex(pokemon => pokemon.name === e);
            pokemons.splice(index, 1)
        }
        setSelectedPokemons(pokemons)
        isLoading(false)
    }


    const deleteAlert = (e) => {
        let value = e;
        Alert.alert(
            'Delete pokemon?',
            'Are you sure you want to delete this pokemon?',
            [
                { text: 'No', onPress: () => null },
                { text: 'Yes', onPress: (e) => deleteSelectedPokemon(value) },
            ],
            { cancelable: false },
        );
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
                    action={(e) => navigation.navigate("PokemonDetails", {
                        data: e
                    })}
                />
            )}


            <Button
                title={"Show team"}
                aditionalStyle={styles.buttonStyles}
                onPress={() => setShowTeamModal(!showTeamModal)}
            />

            <Modal
                visible={showTeamModal}
                animationType={'slide'}
            >
                <MyTeam
                    showModal={() => setShowTeamModal(!showTeamModal)}
                    data={pokemonSelected}
                    action={() => createTeam()}
                    deletePokemon={(e) => deleteAlert(e)}
                    loading={loading}
                />
            </Modal>

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
