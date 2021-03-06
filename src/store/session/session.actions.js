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
        dispatch({
            type: ActionTypes.USER_SIGN_IN_FAILURE,
            payload: "The given data was invalid, please check your email or password."
        })
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


// Clean Session Store ====================================================================================================

/**
 * @description Cleans up the Session store
 */

export const cleanSessionStore = () => (dispatch, getState) => {
    dispatch({ type: ActionTypes.CLEAN_SESSION_STORE });
};


// create pokemon group Data ====================================================================================================

export const createPokemonTeam = (user_id, data) => async (dispatch, getState) => {
    dispatch({ type: ActionTypes.CREATE_POKEMON_TEAM_REQUEST });
    try {
        const response = await SessionService.createTeam(user_id, data)
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

export const cleanCreatePokemonTeam = () => (dispatch, getState) => {
    dispatch({ type: ActionTypes.CREATE_POKEMON_TEAM_CLEANUP });
};


// get pokemon Teams ====================================================================================================

export const getPokemonTeams = data => async (dispatch, getState) => {
    dispatch({ type: ActionTypes.GET_POKEMON_TEAM_REQUEST });
    try {
        const response = await SessionService.getplayerTeams(data)
        dispatch({
            type: ActionTypes.GET_POKEMON_TEAM_SUCCESS,
            payload: response
        })
    } catch (err) {
        dispatch({
            type: ActionTypes.GET_POKEMON_TEAM_FAILURE,
            payload: err
        })
    }
};

// Edit pokemon Teams ====================================================================================================

export const editPokemonTeam = (user_id, team_id, data) => async (dispatch, getState) => {
    dispatch({ type: ActionTypes.EDIT_POKEMON_TEAM_REQUEST });
    try {
        const response = await SessionService.editPlayerTeam(user_id, team_id, data)
        dispatch({
            type: ActionTypes.EDIT_POKEMON_TEAM_SUCCESS,
            payload: response
        })
    } catch (err) {
        dispatch({
            type: ActionTypes.EDIT_POKEMON_TEAM_FAILURE,
            payload: err
        })
    }
};

// DELETE pokemon Teams ====================================================================================================

export const deletePokemonTeam = (user_id, team_id) => async (dispatch, getState) => {
    dispatch({ type: ActionTypes.DELETE_POKEMON_TEAM_REQUEST });
    try {
        const response = await SessionService.deletePlayerTeam(user_id, team_id)
        dispatch({
            type: ActionTypes.DELETE_POKEMON_TEAM_SUCCESS,
            payload: response
        })
    } catch (err) {
        dispatch({
            type: ActionTypes.DELETE_POKEMON_TEAM_FAILURE,
            payload: err
        })
    }
};

export const cleandeletePokemonTeam = () => (dispatch, getState) => {
    dispatch({ type: ActionTypes.DELETE_POKEMON_TEAM_CLEANUP });
};

