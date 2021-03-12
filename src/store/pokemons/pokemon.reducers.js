/* eslint-disable prettier/prettier */
import * as ActionTypes from './pokemon.types';
// Setup the initial state

const initialState = {
    allPokemons: {},
    pokemonDetail: {}
};

function Pokemons(state = initialState, action) {
    switch (action.type) {

        // Get Pokemons list ====================================================================================================

        case ActionTypes.GET_ALL_POKEMONS_REQUEST:
            return {
                ...state,
                allPokemons: {
                    isLoading: true,
                    error: null,
                },
            };

        case ActionTypes.GET_ALL_POKEMONS_SUCCESS:
            return {
                ...state,
                allPokemons: {
                    data: action.payload.data,
                    isLoading: false,
                    error: null,
                },
            }

        case ActionTypes.GET_ALL_POKEMONS_FAILURE:
            return {
                ...state,
                allPokemons: {
                    isLoading: false,
                    error: action.payload,
                },
            };

        // Get Pokemons by id ====================================================================================================

        case ActionTypes.GET_POKEMON_ByID_REQUEST:
            return {
                ...state,
                pokemonDetail: {
                    isLoading: true,
                    error: null,
                },
            };

        case ActionTypes.GET_POKEMON_ByID_SUCCESS:
            return {
                ...state,
                pokemonDetail: {
                    data: action.payload.data,
                    isLoading: false,
                    error: null,
                },
            }

        case ActionTypes.GET_POKEMON_ByID_FAILURE:
            return {
                ...state,
                pokemonDetail: {
                    isLoading: false,
                    error: action.payload,
                },
            };

        default:
            return state;
    }
}

export default Pokemons;
