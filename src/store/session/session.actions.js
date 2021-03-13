import SessionService from '../../api/models/session.service';
import * as ActionTypes from './session.types';

// Sign In the user ====================================================================================================

export const signIn = data => async (dispatch, getState) => {

    dispatch({ type: ActionTypes.USER_SIGN_IN_REQUEST });

    try {
        const response = await SessionService.singIn(data)
        const getValues = Object.keys(response.data);
        const userselected = response.data[getValues];
        if (userselected.password === data.password) {

            const addingKey = userselected.key = getValues[0]

            dispatch({
                type: ActionTypes.USER_SIGN_IN_SUCCESS,
                payload: {
                    data: userselected,
                }
            })
        } else {
            dispatch({
                type: ActionTypes.USER_SIGN_IN_FAILURE,
                payload: "The given data was invalid, please check your email or password."
            })
        }
    } catch (err) {
        console.log(err.response?.data);
        if (err.response?.status === 422) {
            dispatch({
                type: ActionTypes.USER_SIGN_IN_FAILURE,
                payload: "The given data was invalid, please check your email or password."
            })
        } else {
            dispatch({
                type: ActionTypes.USER_SIGN_IN_FAILURE,
                payload: err
            })
        }
    }
};

// Register user ====================================================================================================

export const register = data => async (dispatch, getState) => {
    dispatch({ type: ActionTypes.REGISTER_USER_REQUEST });
    try {
        await SessionService.createUser(data);
        dispatch({ type: ActionTypes.REGISTER_USER_SUCCESS })
    } catch (e) {
        dispatch({
            type: ActionTypes.REGISTER_USER_FAILURE,
            payload: e
        })
    }
}

export const registerCleanUp = () => (dispatch, getState) => {
    dispatch({ type: ActionTypes.REGISTER_USER_CLEANUP });
}


// Log Out the user ====================================================================================================

export const signOut = data => async (dispatch, getState) => {
    dispatch({ type: ActionTypes.USER_LOG_OUT_REQUEST });
    dispatch({ type: ActionTypes.USER_LOG_OUT_SUCCESS });
    dispatch(cleanSessionStore());
};


// Clean Session Store ====================================================================================================

/**
 * @description Cleans up the Session store
 */

export const cleanSessionStore = () => (dispatch, getState) => {
    dispatch({ type: ActionTypes.CLEAN_SESSION_STORE });
};


// create pokemon group Data ====================================================================================================

export const createPokemonTeam = data => async (dispatch, getState) => {
    dispatch({ type: ActionTypes.CREATE_POKEMON_TEAM_REQUEST });
    try {
        const response = await SessionService.createTeam(data)
        dispatch({
            type: ActionTypes.CREATE_POKEMON_TEAM_SUCCESS,
            payload: response
        })
    } catch (err) {
        dispatch({
            type: ActionTypes.CREATE_POKEMON_TEAM_FAILURE,
            payload: err
        })
    }
};
