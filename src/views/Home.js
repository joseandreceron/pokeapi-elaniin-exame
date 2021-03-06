
import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Alert,
  Modal,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

//Components
import CustomHeader from '../components/Header/CustomHeader';
import HomeHeader from '../components/Header/HomeHeader';
import Listcard from '../components/Cards/ListCards';

//function
import { getPokemonTeams, cleanCreatePokemonTeam, cleanSessionStore } from "../store/session/session.actions";

//Constants
import { verticalScale } from '../helpers/ScailingScreen';
import { COLORS } from '../helpers/constants';
import Button from '../components/Buttons/Button';


const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  const { user, myTeams } = useSelector(state => state.session);

  useEffect(() => {
    dispatch(cleanCreatePokemonTeam());
    dispatch(getPokemonTeams(user?.data?.id));
  }, [])


  const logout = () => {
    Alert.alert(
      'Sign Out?',
      'Are you sure you want to sign out?',
      [
          { text: 'No', onPress: () => null },
          { text: 'Yes', onPress: (e) => dispatch(cleanSessionStore()) },
      ],
      { cancelable: false },
  );
  }

  return (
    <View style={styles.container}>


      <CustomHeader
        navigation={navigation}
        logout={() => logout()}
      />

      <ScrollView>

        <HomeHeader
          navigation={navigation}
          userName={user?.data?.username}
          region={user?.data?.region}
        />

        <View style={styles.content}>
          <Listcard
            title={'My Teams'}
            description='My top 3 teams'
            data={myTeams?.data}
            loading={myTeams?.isLoading}
            error={myTeams?.error}
            navigation={navigation}
            viewMoreAction={() => navigation.navigate("AllTeams")}
          />
        </View>


        <View style={styles.buttonContainer}>

          <Button
            title={"Create new team"}
            titleColor={COLORS.white}
            backgroundColor={COLORS.darkBlue}
            icon={"add"}
            onPress={() => navigation.navigate("CreateTeam")}
          />

        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    alignItems: 'center',
    marginTop: Platform.OS === 'ios' ? verticalScale(-40) : verticalScale(-50),
    marginBottom: verticalScale(20)
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: verticalScale(20)
  }
});

export default Home;
