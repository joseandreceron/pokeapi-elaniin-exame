
import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

//Components
import PokemonList from '../components/List/PokemonList';
import TextLabel from '../components/UI/TextLabel';
import Loader from '../components/UI/Loader';
import Button from '../components/Buttons/Button';

//Functions
import { getPokemonsById } from '../store/pokemons/pokemon.actions';

//Constants
import { moderateScale, verticalScale } from '../helpers/ScailingScreen';
import { COLORS } from '../helpers/constants';
import AbilitiesList from '../components/List/AbilitiesList';
import PokemonTypeList from '../components/List/PokemonTypeList';
import StatsChart from '../components/Cards/StatsChart';


const PokemonDetails = ({ navigation, route }) => {
    const [chartData, setChartData] = useState([])

    const dispatch = useDispatch();
    const pokemonStats = useSelector(state => state.pokemon?.pokemonDetail?.data?.stats?.map(c => ({ label: c.stat.name, value: c.base_stat })) ?? []);
    const { pokemonDetail } = useSelector(state => state.pokemon);

    useEffect(() => {
        const url = route.params.data.url;
        dispatch(getPokemonsById(url))
    }, [])

    useEffect(() => {
        if (pokemonDetail?.data?.stats) {
            const pokemonLabels = pokemonStats ? pokemonDetail?.data?.stats?.map((c) => c.stat.name) : [];
            const pokemonData = pokemonStats ? pokemonDetail?.data?.stats?.map((c) => c.base_stat) : [];
            const data = {
                labels: ["Hp", "Attack", "Defense", "Sp-Attack", "Sp-Defence", "Speed"],
                datasets: [
                    {
                        data: pokemonData
                    }
                ]
            }
            setChartData(data)
        }
    }, [pokemonDetail?.data])

    const setPokemon = (e) => {
        if (pokemonDetail?.data) {
            const pokemonData = {
                name: e.name,
                id: e.url,
                photo: pokemonDetail?.data?.sprites?.front_default,
                type: pokemonDetail?.data?.types,
            }
            route.params.data.selectedPokemons(pokemonData)
        }
    }


    return (
        <ScrollView style={styles.container}>
            {pokemonDetail?.isLoading ? (
                <Loader
                    loadingMessage={"Loading List"}
                    errorState={pokemonDetail?.error ? true : false}
                    errorMessage={"Error while loading list"}
                >

                </Loader>
            ) : (
                <View style={styles.content}>
                    <Image
                        source={{ uri: pokemonDetail?.data?.sprites?.front_default }}
                        style={styles.pokemonPhoto}
                    />

                    <TextLabel additionalStyles={styles.pokemonName} size={25}>{pokemonDetail?.data?.name}</TextLabel>


                    <PokemonTypeList
                        data={pokemonDetail?.data?.types}
                    />


                    <View style={styles.pokemonDetail}>
                        <TextLabel additionalStyles={styles.title}>Abilities</TextLabel>
                        <AbilitiesList
                            data={pokemonDetail?.data?.abilities}
                        />

                        <TextLabel additionalStyles={styles.title}>Stats</TextLabel>

                        {chartData.length !== 0 &&
                            <StatsChart
                                data={chartData}
                            />
                        }

                        <View style={styles.buttonContainer}>
                            <Button
                                title={"Add to team"}
                                aditionalStyle={styles.buttonStyles}
                                onPress={() => setPokemon(route.params.data.pokemonData)}
                            />
                        </View>
                    </View>
                </View>
            )}
        </ScrollView >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    content: {
        alignItems: 'center',
    },
    pokemonPhoto: {
        height: 200,
        width: 250,
    },
    pokemonName: {
        fontWeight: "bold",
        color: COLORS.blackV2
    },
    pokemonDetail: {
        width: "100%",
        padding: 15
    },
    title: {
        fontSize: moderateScale(25),
        fontWeight: "bold",
        marginTop: verticalScale(10)
    },
    buttonContainer: {
        justifyContent: "center",
        alignItems: 'center'
    }
});

export default PokemonDetails;
