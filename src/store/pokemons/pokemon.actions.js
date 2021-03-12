import Pokeapi from '../../api/models/pokeapi.service';
import * as ActionTypes from './pokemon.types';

// Get pokemon list ====================================================================================================

export const getAllPokemons = () => async (dispatch, getState) => {
    dispatch({ type: ActionTypes.GET_ALL_POKEMONS_REQUEST });
    try {
        const response = await Pokeapi.getAllPokemon()
        dispatch({
            type: ActionTypes.GET_ALL_POKEMONS_SUCCESS,
            payload: response
        })

    } catch (err) {
        dispatch({
            type: ActionTypes.GET_ALL_POKEMONS_FAILURE,
            payload: err
        })
    }
};

// Get pokemon by id ================================================================================

export const getPokemonsById = (pokemon_id) => async (dispatch, getState) => {
    dispatch({ type: ActionTypes.GET_POKEMON_ByID_REQUEST });
    try {
        const response = await Pokeapi.getPokemonById(pokemon_id)
        dispatch({
            type: ActionTypes.GET_POKEMON_ByID_SUCCESS,
            payload: response
        })

    } catch (err) {
        dispatch({
            type: ActionTypes.GET_POKEMON_ByID_FAILURE,
            payload: err
        })
    }
};

