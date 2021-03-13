import axios from 'axios'
import BaseService from '../services/base-service'
import { API_URL, FIREBASE_URL } from '../../helpers/constants';
import api from "../services/api";

export default class SessionService extends BaseService {

    // Sign In the user ====================================================================================================

    /**
     * @param data {
            @string username,
            @string password
        }
    * @returns The user's data
    */

    static singIn(data) {
        const url = `${FIREBASE_URL}/users.json?orderBy="email"&equalTo="${data.username}"`
        return api.get(url, data)
    }

    static createUser(data) {
        const url = `${FIREBASE_URL}/users.json`
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
