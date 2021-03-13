
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

//Constants
import { verticalScale } from '../../helpers/ScailingScreen';
import { COLORS } from '../../helpers/constants';


const MyTeam = ({ loading, showModal, data, action, deletePokemon }) => {
  console.log(data)
  return (
    <View style={styles.container}>

      <ModalHeader
        title={"My Team"}
        leftIcon={'ios-close'}
        actionLeft={() => showModal(false)}
      />

      {!loading &&
        <FlatList
          data={data}
          contentContainerStyle={styles.list}
          keyExtractor={({ item, key }) => key}
          renderItem={({ item }) =>
            <SelectedPokemons
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
