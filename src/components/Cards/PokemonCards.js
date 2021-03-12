
import React from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    View,
    Text,
} from 'react-native';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

//Components
import Button from '../../components/Buttons/Button';
import TextLabel from '../UI/TextLabel';

//Constants
import { moderateScale } from '../../helpers/ScailingScreen';
import { COLORS } from '../../helpers/constants';


const PokemonCards = ({ navigation, name, key, selected, action }) => {
    return (
        <TouchableOpacity
            key={key}
            style={styles.container}
            onPress={action ? (e) => action(e) : () => console.log("action")}
        >
            <TextLabel additionalStyles={styles.title}>{name}</TextLabel>

            {selected &&
                <FontAwesome5
                    name={"check"}
                    color={COLORS.darkBlue}
                    size={25}
                />
            }

        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.white,
        width: '100%',
        padding: 10,
    },
    title: {
        marginLeft: moderateScale(10),
        alignItems: 'flex-start'
    }
});

export default PokemonCards;
