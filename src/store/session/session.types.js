// action types

// Session ======================================================================================================

// Sign In

export const USER_SIGN_IN_REQUEST = 'USER_SIGN_IN_REQUEST';
export const USER_SIGN_IN_SUCCESS = 'USER_SIGN_IN_SUCCESS';
export const USER_SIGN_IN_AUTHORIZED = 'USER_SIGN_IN_AUTHORIZED';
export const USER_SIGN_IN_FAILURE = 'USER_SIGN_IN_FAILURE';

// Get user Data

export const GET_USER_DATA_REQUEST = 'GET_USER_DATA_REQUEST';
export const GET_USER_DATA_SUCCESS = 'GET_USER_DATA_SUCCESS';
export const GET_USER_DATA_FAILURE = 'GET_USER_DATA_FAILURE';

// Log Out

export const USER_LOG_OUT_REQUEST = 'USER_LOG_OUT_REQUEST';
export const USER_LOG_OUT_SUCCESS = 'USER_LOG_OUT_SUCCESS';
export const USER_LOG_OUT_FAILURE = 'USER_LOG_OUT_FAILURE';

// Reset Password

export const RESET_PASSWORD_REQUEST = 'RESET_PASSWORD_REQUEST';
export const RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS';
export const RESET_PASSWORD_FAILURE = 'RESET_PASSWORD_FAILURE';

// Register user

export const REGISTER_USER_REQUEST = 'REGISTER_USER_REQUEST';
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_FAILURE = 'REGISTER_USER_FAILURE';
export const REGISTER_USER_CLEANUP = 'REGISTER_USER_CLEANUP';

// Clean Session Store

export const CLEAN_SESSION_STORE = 'CLEAN_SESSION_STORE';