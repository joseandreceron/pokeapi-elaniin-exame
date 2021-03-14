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
        return api.patch(url, data)
    }

    static createTeam(userID, data) {
        const url = `${FIREBASE_URL}/users/${userID}/myTeam.json`
        return api.patch(url, data)
    }

    static getplayerTeams(data) {
        const url = `${FIREBASE_URL}/users/${data}/myTeam.json`
        return api.get(url)
    }

    static editPlayerTeam(userID, teamId, data) {
        const url = `${FIREBASE_URL}/users/${userID}/myTeam/${teamId}.json`
        return api.patch(url, data)
    }
}
