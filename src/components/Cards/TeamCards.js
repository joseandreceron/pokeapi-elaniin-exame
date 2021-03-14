
import React from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    View,
    Text,
    Image
} from 'react-native';

//Components
import TextLabel from '../UI/TextLabel';
import Divider from '../UI/Divider';

//Constants
import { verticalScale } from '../../helpers/ScailingScreen';
import { COLORS } from '../../helpers/constants';

const TeamCards = ({ navigation, teamNumber, pokemons, teamName, action }) => {
    return (
        <TouchableOpacity
            key={teamNumber}
            style={styles.container}
            onPress={action ? (e) => action(e) : () => console.log("Team Details")}
        >
            <TextLabel size={22}>Team {teamNumber + 1}</TextLabel>
            <TextLabel size={14}>{teamName}</TextLabel>
            <Divider />
            <View style={styles.content}>
                {pokemons.map((item, key) =>
                    <View
                        style={styles.pokemonContainer}
                        key={key}
                    >
                        <Image
                            source={{ uri: item.photo }}
                            style={styles.image}
                        />
                        <TextLabel additionalStyles={styles.pokemonNames}>{item.name}</TextLabel>
                    </View>
                )}
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: COLORS.white,
        padding: 10,
        shadowColor: 'black',
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.2,
        elevation: 2,
        marginVertical: verticalScale(10)
    },
    content: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginTop: verticalScale(5)
    },
    pokemonContainer: {
    },
    image: {
        height: 60,
        width: 60,
    },
    pokemonNames: {
        marginTop: verticalScale(10)
    }
});

export default TeamCards;


const pokemonExample = [
    {
        key: 1,
        pokeName: "bulbasaur",
    },
    {
        key: 2,
        pokeName: "ivysaur",
    },
    {
        key: 3,
        pokeName: "venusaur",
    }
]