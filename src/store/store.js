import AsyncStorage from '@react-native-async-storage/async-storage';

import { createStore, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';

import axios from 'axios';

// Import the root reducer

import rootReducer from './combined-reducers';

// Middleware: Redux Persist Config

const persistConfig = {
    // Root?

    key: 'root',

    // Storage Method (React Native)

    storage: AsyncStorage,

    // Whitelist (Save Specific Reducers)

    whitelist: ["session"],

    // Blacklist (Don't Save Specific Reducers)

    blacklist: [],
};

// Middleware: Redux Persist Persisted Reducer

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Setup authorization header for api requests

const authMiddleware = ({ getState }) => next => action => {
    // const { user } = getState().session;

    // if (action.type && user.isLoggedIn) {
    if (action.type) {
        // axios.defaults.headers.common.authorization = `Bearer ${user.token}`;
        // axios.defaults.headers.common["Content-Type"] = "application/json";
    } else {
        delete axios.defaults.headers.common.authorization;
    }

    return next(action);
};

// Setup Thunk Middleware

const thunk = applyMiddleware(thunkMiddleware, authMiddleware);

// Compose store enhancers

let enchancers;

if (__DEV__) {
    // enchancers = compose(
    //   thunk,
    //   window.__REDUX_DEVTOOLS_EXTENSION__ &&
    //     window.__REDUX_DEVTOOLS_EXTENSION__(),
    // );
    enchancers = compose(thunk);
} else {
    enchancers = compose(thunk);
}

// Create and export the store

const store = createStore(persistedReducer, enchancers);

// Middleware: Redux Persist Persister

let persistor = persistStore(store);

export { store, persistor };
