import axios from 'axios';
import { store } from "../../store/store"

// Define the API root url

import { API_URL } from '../../helpers/constants';
import { Alert, Platform, ToastAndroid } from 'react-native';

// Setup Axios Instance

const api = axios.create({
    baseURL: API_URL
});

// Automagically put OAuth token on requests if it exists

api.interceptors.request.use(config => {
    const state = store.getState();
    const token = state.session.user.token;
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

api.interceptors.response.use(config => config, err => {
    if (err.response?.data instanceof Object) {
        const msg = err.response?.data.Message ?? err.response?.data.message
        err.response.data = msg;
        return Promise.reject(err);
    } else if (typeof err.response?.data === "string") {
        return Promise.reject(err);
    }
    return Promise.reject({
        response: {
            data: "Su solicitud no pudo ser procesada actualmente, favor intente más tarde",
            status: err.response?.status
        }
    });
})

api.interceptors.request.use(config => config, err => {
    if (!err.status) {
        if (Platform.OS === "android") {
            ToastAndroid.showWithGravity("No fue posible conectarse a nuestros servidores", ToastAndroid.LONG, ToastAndroid.BOTTOM)
        } else {
            Alert.alert("Sesión expirada", "Su sesión ha expirado, por favor inicie sesión nuevamente")
        }
    }
})

export default api;