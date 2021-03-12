
import React from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    View,
    Text,
} from 'react-native';

//Components
import Button from '../../components/Buttons/Button';
import TextLabel from '../UI/TextLabel';

//Constants
import { verticalScale } from '../../helpers/ScailingScreen';
import { COLORS } from '../../helpers/constants';


const PokemonCards = ({ navigation, name, data, key }) => {
    return (
        <TouchableOpacity
            key={key}
            style={styles.container}
        >
            <TextLabel>{name}</TextLabel>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.white,
        width: '100%',
        padding: 10,
    },

});

export default PokemonCards;
