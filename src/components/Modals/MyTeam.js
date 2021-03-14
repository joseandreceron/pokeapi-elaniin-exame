
import React from 'react';
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
import Input from '../../components/Forms/Input';

//Constants
import { verticalScale } from '../../helpers/ScailingScreen';
import { COLORS } from '../../helpers/constants';


const MyTeam = ({ loading, showModal, data, action, deletePokemon, setTeamName, teamName }) => {
  console.log(data)
  return (
    <View style={styles.container}>

      <ModalHeader
        title={"My Team"}
        leftIcon={'ios-close'}
        actionLeft={() => showModal(false)}
      />

      <View style={styles.form}>
        <Input
          title={"Team name"}
          onChangeText={(value) => setTeamName(value)}
          value={teamName}
          placeholder={"The best team"}
          placeholderTextColor={COLORS.lightBlack}
        />
      </View>


      {!loading &&
        <FlatList
          data={data}
          contentContainerStyle={styles.list}
          keyExtractor={item => item.id}
          renderItem={({ item, index }) =>
            <SelectedPokemons
              key={index.toString}
              name={item.name}
              photo={item.photo}
              type={item.type}
              action={(e) => deletePokemon(e)}
            />
          }
        />
      }

      <Button
        title={"Create Team"}
        aditionalStyle={styles.buttonStyles}
        onPress={action ? (e) => action(e) : () => console.log("Action")}
      // onPress={() => createTeam()}
      />


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  form: {
    padding: 10
  },
  list: {
    padding: 15,
    paddingBottom: verticalScale(100)
  },
  buttonStyles: {
    position: "absolute",
    bottom: 30,
    alignSelf: "center"
  }
});

export default MyTeam;
