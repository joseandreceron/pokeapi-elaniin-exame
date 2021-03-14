
import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Alert,
  FlatList
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

//Components
import Button from '../components/Buttons/Button';
import TeamCards from "../components/Cards/TeamCards";

//function
import { getPokemonTeams, deletePokemonTeam, cleandeletePokemonTeam } from "../store/session/session.actions";

//Constants
import { verticalScale } from '../helpers/ScailingScreen';
import { COLORS } from '../helpers/constants';


const AllTeams = ({ navigation }) => {
  const [teamsArray, setTeamArray] = useState([])
  const [loading, setLoading] = useState(false)

  const dispatch = useDispatch();
  const { user, myTeams, deleteTeam } = useSelector(state => state.session);

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
  }, [myTeams?.data, deleteTeam?.data])


  const deleteGroup = (groupId) => {
    setLoading(true)
    dispatch(deletePokemonTeam(user?.data?.id, groupId));
    
  }

  useEffect(() => {
    if (deleteTeam?.data) {
      Alert.alert(
        'Team Deleted',
        'The selected team has been deleted successfully',
        [
          { text: 'Yes', onPress: (e) => dispatch(cleandeletePokemonTeam()) },
        ],
        { cancelable: false },
      );
    }
  }, [deleteTeam?.data])


  const deleteAlert = (e) => {
    let value = e;
    Alert.alert(
      'Delete Team?',
      'Are you sure you want to delete this Team?',
      [
        { text: 'No', onPress: () => null },
        { text: 'Yes', onPress: (e) => deleteGroup(value) },
      ],
      { cancelable: false },
    );
  }


  return (
    <View style={styles.container}>

      {!loading &&
        <FlatList
          data={teamsArray}
          keyExtractor={({ item, index }) => index}
          renderItem={({ item, index }) =>
            <TeamCards
              key={index}
              teamNumber={index}
              pokemons={item.pokemons}
              teamName={item.team_name}
              teamID={item.id}
              deleteGroup={(e) => deleteAlert(e)}
              action={() => navigation.navigate("TeamDetails", {
                teamDetails: item
              })}
            />
          }
        />
      }



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
