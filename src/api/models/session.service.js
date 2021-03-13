import axios from 'axios'
import BaseService from '../services/base-service'
import { API_URL, FIREBASE_URL } from '../../helpers/constants';
import api from "../services/api";

export default class PokeApiService extends BaseService {


    static singIn(data) {
        const url = `${FIREBASE_URL}/users.json/`
        return api.post(url, data)
    }

    static createTeam(data) {
        const url = `${FIREBASE_URL}/teams.json/`
        return api.post(url, data)
    }

    static createTeam(data) {
        const url = `${FIREBASE_URL}/teams.json/1`
        return api.patch(url, data)
    }
}
