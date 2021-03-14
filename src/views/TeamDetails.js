
import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Alert,
  Modal
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

//Components
import Button from '../components/Buttons/Button';
import TeamCards from "../components/Cards/TeamCards";
import Loader from '../components/UI/Loader';
import TextLabel from '../components/UI/TextLabel';
import SelectedPokemons from '../components/Cards/SelectedPokemons';
import MyTeam from "../components/Modals/MyTeam";
import SelectedPokemon from '../components/Modals/SelectPokemon';

//function
import { getPokemonTeams, editPokemonTeam } from "../store/session/session.actions";
import { getAllPokemons } from '../store/pokemons/pokemon.actions';

//Constants
import { verticalScale } from '../helpers/ScailingScreen';
import { COLORS } from '../helpers/constants';


const TeamDetails = ({ navigation, route }) => {
  const [pokemonTeam, setPokemonTeam] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [pokemonSelected, setSelectedPokemons] = useState([]);
  const [showPokemonModal, setShowPokemonModal] = useState(false);
  const [updateList, setUpdate] = useState(false);

  const dispatch = useDispatch();
  const { allPokemons } = useSelector(state => state.pokemon);
  const { user } = useSelector(state => state.session);

  useEffect(() => {
    const pokemonTeam = route.params.teamDetails;
    setPokemonTeam(pokemonTeam);
    dispatch(getAllPokemons())
    setLoading(false)
  }, [])

  const editTeams = () => {
    if (pokemonTeam?.pokemons.length >= 3) {
      const teamID = pokemonTeam.id


      dispatch(editPokemonTeam(user?.data.id, teamID, pokemonTeam))
    } else {
      Alert.alert("Error", "Please select 3 or more Pokemon")
    }
  }

  const deleteSelectedPokemon = (e) => {
    setUpdate(true)
    const pokemons = pokemonTeam?.pokemons
    const hasPokemon = pokemonTeam?.pokemons.some(pokemon => pokemon.name === e);

    if (hasPokemon) {
      const index = pokemonTeam?.pokemons.findIndex(pokemon => pokemon.name === e);
      pokemons.splice(index, 1)
    }
    setSelectedPokemons(pokemons)
    setUpdate(false)
  }


  const addNewPokemon = (e) => {
    if (pokemonTeam?.pokemons.length < 6) {
      setShowPokemonModal(!showPokemonModal)
    } else {
      console.log("eliminate pokemon")
    }
  }

  const selectedPokemons = (e) => {
    const pokemons = pokemonTeam?.pokemons
    if (pokemonTeam?.pokemons.length < 6) {
      pokemons.push(e);
      console.log("list of pokemons", pokemons)
    } else {
      Alert.alert("Error", "You can only add up to 6 pokemons")
    }
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

      {isLoading ? (
        <Loader
          loadingMessage={"Loading Team details"}
          errorState={pokemonTeam?.error ? true : false}
          errorMessage={"Error while loading list"}
        >

        </Loader>
      ) : (
        <View style={styles.content}>
          <TextLabel size={25}>{pokemonTeam.team_name}</TextLabel>

          {!updateList &&
            <ScrollView>
              {pokemonTeam?.pokemons.map((item, index) =>
                <SelectedPokemons
                  key={index}
                  name={item.name}
                  photo={item.photo}
                  type={item.type}
                  action={(e) => deleteAlert(e)}
                />
              )}
            </ScrollView>
          }

          <View style={styles.buttonStyles}>


            <Button
              title={"Add new pokemon"}
              onPress={() => addNewPokemon()}
            />

            <Button
              title={"Save Changes"}
              onPress={() => editTeams()}
            />

          </View>

        </View>
      )}


      <Modal
        visible={showPokemonModal}
        animationType={'slide'}
      >
        <SelectedPokemon
          data={allPokemons?.data?.results}
          navigation={navigation}
          selectedPokemons={(e) => selectedPokemons(e)}
          showModal={() => setShowPokemonModal(!showPokemonModal)}
        />
      </Modal>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: COLORS.white
  },
  content: {
    flex: 1,
  },
  pokemonContainer: {
  },
  image: {
    height: 60,
    width: 60,
  },
  pokemonNames: {
    marginTop: verticalScale(10)
  },
  buttonStyles: {
    position: "absolute",
    bottom: 0,
    alignSelf: "center"
  }
});

export default TeamDetails;
