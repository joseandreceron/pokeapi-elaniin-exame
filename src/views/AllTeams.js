
import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  FlatList
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

//Components
import Button from '../components/Buttons/Button';
import TeamCards from "../components/Cards/TeamCards";

//function
import { getPokemonTeams } from "../store/session/session.actions";

//Constants
import { verticalScale } from '../helpers/ScailingScreen';
import { COLORS } from '../helpers/constants';


const AllTeams = ({ navigation }) => {
  const [teamsArray, setTeamArray] = useState([])

  const dispatch = useDispatch();
  const { user, myTeams } = useSelector(state => state.session);

  useEffect(() => {
    dispatch(getPokemonTeams(user?.data?.id))
  }, [])

  useEffect(() => {
    if (myTeams?.data) {
      let array = [];
      for (const [key, value] of Object.entries(myTeams?.data)) {
        array.push(value)
      }
      setTeamArray(array)
    }
  }, [myTeams?.data])

  return (
    <View style={styles.container}>

      <FlatList
        data={teamsArray}
        keyExtractor={({ item, index }) => index}
        renderItem={({ item, index }) =>
          <TeamCards
            key={index}
            teamNumber={index}
            pokemons={item.pokemons}
            teamName={item.team_name}
            action={() => navigation.navigate("TeamDetails", {
              teamDetails: item
            })}
          />
        }
      />



    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: COLORS.white
  },
});

export default AllTeams;
