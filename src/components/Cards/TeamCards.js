
import React from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
} from 'react-native';

//Components

//Constants
import { verticalScale } from '../../helpers/ScailingScreen';
import { COLORS } from '../../helpers/constants';
import TextLabel from '../UI/TextLabel';
import Divider from '../UI/Divider';

const TeamCards = ({ navigation }) => {
    return (
        <View style={styles.container}>

            <TextLabel size={22}>Team 01</TextLabel>

            <Divider />

            <View style={styles.content}>
                {pokemonExample.map((item, key) =>
                    <View
                        style={styles.pokemonContainer}
                        key={key}
                    >
                        <View
                            style={styles.image}
                        />
                        <TextLabel additionalStyles={styles.pokemonNames}>{item.pokeName}</TextLabel>
                    </View>
                )}
            </View>

        </View>
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
        backgroundColor: 'red'
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