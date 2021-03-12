
import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
} from 'react-native';

//Components
import CustomHeader from '../components/Header/CustomHeader';
import HomeHeader from '../components/Header/HomeHeader';
import Listcard from '../components/Cards/ListCards';

//Constants
import { verticalScale } from '../helpers/ScailingScreen';
import { COLORS } from '../helpers/constants';
import Button from '../components/Buttons/Button';


const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>


      <CustomHeader
        navigation={navigation}
      />

      <ScrollView>

        <HomeHeader
          navigation={navigation}
          userName={'Jose Andre Ceron'}
        />

        <View style={styles.content}>
          <Listcard
            title={'My Teams'}
            description='My top 3 teams'
            icon={'warehouse'}
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