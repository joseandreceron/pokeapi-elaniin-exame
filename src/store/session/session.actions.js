import SessionService from '../../api/models/session.service';
import * as ActionTypes from './session.types';

// Sign In the user ====================================================================================================

export const signIn = data => async (dispatch, getState) => {

    dispatch({ type: ActionTypes.USER_SIGN_IN_REQUEST });

    try {
        const response = await SessionService.singIn(data)
        console.log(response);
        dispatch({
            type: ActionTypes.USER_SIGN_IN_AUTHORIZED,
            payload: response
        })

        const profileResponse = await SessionService.getUserInfo()
        dispatch({
            type: ActionTypes.USER_SIGN_IN_SUCCESS,
            payload: {
                data: profileResponse,
                token: response
            }
        })

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


// Get user Data ====================================================================================================

export const getUserData = token => async (dispatch, getState) => {
    dispatch({ type: ActionTypes.GET_USER_DATA_REQUEST });
    // try {
    //     const response = await account.getUserInfo(token)
    //     dispatch({
    //         type: ActionTypes.GET_USER_DATA_SUCCESS,
    //         payload: response
    //     })

    // } catch (err) {
    //     console.log(err.response?.data);
    //     console.log(err)
    //     dispatch({
    //         type: ActionTypes.GET_USER_DATA_FAILURE,
    //         payload: err
    //     })
    // }
};
