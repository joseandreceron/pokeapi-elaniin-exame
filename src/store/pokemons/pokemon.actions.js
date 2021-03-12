import Pokeapi from '../../api/models/pokeapi.service';
import * as ActionTypes from './knowledge.types';

// Get knowledge list ====================================================================================================

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

