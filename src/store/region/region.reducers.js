/* eslint-disable prettier/prettier */
import * as ActionTypes from './pokemon.types';
// Setup the initial state

const initialState = {
    allregions: {},
};

function Pokemons(state = initialState, action) {
    switch (action.type) {

        // Get regions list ====================================================================================================

        case ActionTypes.GET_ALL_REGION_REQUEST:
            return {
                ...state,
                allregions: {
                    isLoading: true,
                    error: null,
                },
            };

        case ActionTypes.GET_ALL_REGION_SUCCESS:
            return {
                ...state,
                allregions: {
                    data: action.payload.data,
                    isLoading: false,
                    error: null,
                },
            }

        case ActionTypes.GET_ALL_REGION_FAILURE:
            return {
                ...state,
                allregions: {
                    isLoading: false,
                    error: action.payload,
                },
            };

        default:
            return state;
    }
}

export default Pokemons;
