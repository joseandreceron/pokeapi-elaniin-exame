/* eslint-disable prettier/prettier */
import * as ActionTypes from './session.types';

// Setup the initial state
const initialState = {
    user: {},
    userRegister: {},
    groupCreated: {}
};

function session(state = initialState, action) {
    switch (action.type) {
        // Sign in the user
        case ActionTypes.USER_SIGN_IN_REQUEST:
            return {
                ...state,
                user: {
                    isLoading: true,
                    error: null,
                },
            };
        case ActionTypes.USER_SIGN_IN_SUCCESS:
            return {
                ...state,
                user: {
                    data: action.payload.data,
                    isLoading: false,
                    isLoggedIn: true,
                    error: null,
                },
            };
        case ActionTypes.USER_SIGN_IN_FAILURE:
            return {
                ...state,
                user: {
                    isLoading: false,
                    error: action.payload,
                },
            };

        // Log Out the user
        case ActionTypes.USER_LOG_OUT_REQUEST:
            return {
                ...state,
                user: {
                    ...state.user,
                    isLoading: true,
                    error: null,
                },
            };
        case ActionTypes.USER_LOG_OUT_SUCCESS:
            return {
                ...state,
                user: {
                    isLoading: false,
                    isLoggedIn: false,
                    error: null,
                },
            };
        case ActionTypes.USER_LOG_OUT_FAILURE:
            return {
                ...state,
                user: {
                    ...state.user,
                    isLoading: false,
                    error: action.payload,
                },
            };

        //Register user
        case ActionTypes.REGISTER_USER_REQUEST:
            return {
                ...state,
                userRegister: {
                    isLoading: true
                }
            }
        case ActionTypes.REGISTER_USER_SUCCESS:
            return {
                ...state,
                userRegister: {
                    isLoading: false,
                    success: true
                }
            }
        case ActionTypes.REGISTER_USER_FAILURE:
            return {
                ...state,
                userRegister: {
                    isLoading: false,
                    success: false,
                    error: action.payload
                }
            }
        case ActionTypes.REGISTER_USER_CLEANUP:
            return {
                ...state,
                userRegister: {}
            }

        // CREATE POKEMON TEAM
        case ActionTypes.CREATE_POKEMON_TEAM_REQUEST:
            return {
                ...state,
                groupCreated: {
                    isLoading: true,
                    error: null,
                },
            };
        case ActionTypes.CREATE_POKEMON_TEAM_SUCCESS:
            return {
                ...state,
                groupCreated: {
                    isLoading: false,
                    isLoggedIn: false,
                    error: null,
                },
            };
        case ActionTypes.CREATE_POKEMON_TEAM_FAILURE:
            return {
                ...state,
                groupCreated: {
                    isLoading: false,
                    error: action.payload,
                },
            };

        // Clean the session store
        case ActionTypes.CLEAN_SESSION_STORE:
            return {
                ...state,
                user: {},
            };
        default:
            return state;
    }
}

export default session;
