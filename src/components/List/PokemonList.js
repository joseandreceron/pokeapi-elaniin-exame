
import React from 'react';
import {
    StyleSheet,
    FlatList,
    View,
    Text,
} from 'react-native';

//Components
import Button from '../../components/Buttons/Button';
import PokemonCards from '../Cards/PokemonCards';
import Divider from "../UI/Divider";

//Constants
import { verticalScale } from '../../helpers/ScailingScreen';
import { COLORS } from '../../helpers/constants';


const PokemonList = ({ navigation, name, data, selectedPokemons }) => {
    return (
        <FlatList
            data={data}
            keyExtractor={({ item, key }) => key}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.flatlistStyles}
            ItemSeparatorComponent={() => <Divider />}
            renderItem={({ item, i }, ) =>
                <PokemonCards
                    key={i}
                    name={item.name}
                    action={(e) => navigation.navigate("PokemonDetails", {
                        url: item.url,
                        selectedPokemons: selectedPokemons,
                        pokemonData: item
                    })}
                />
            }
        />
    );
};

const styles = StyleSheet.create({
    flatlistStyles: {
        marginTop: verticalScale(15),
        paddingBottom: verticalScale(100)
    }
});

export default PokemonList;
