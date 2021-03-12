
import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
} from 'react-native';

//Components
import Button from '../components/Buttons/Button';
import TeamCards from "../components/Cards/TeamCards";


//Constants
import { verticalScale } from '../helpers/ScailingScreen';
import { COLORS } from '../helpers/constants';


const AllTeams = ({ navigation }) => {
  return (
    <View style={styles.container}>

    <TeamCards 
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
