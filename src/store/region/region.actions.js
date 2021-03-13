import PokeRegion from '../../api/models/pokeregion.service';
import * as ActionTypes from './region.types';

// Get pokemon list ====================================================================================================

export const getAllRegions = () => async (dispatch, getState) => {
    dispatch({ type: ActionTypes.GET_ALL_REGION_REQUEST });
    try {
        const response = await PokeRegion.getAllRegions();
        dispatch({
            type: ActionTypes.GET_ALL_REGION_SUCCESS,
            payload: response
        })

    } catch (err) {
        dispatch({
            type: ActionTypes.GET_ALL_REGION_FAILURE,
            payload: err
        })
    }
};
