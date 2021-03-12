import axios from 'axios'
import BaseService from '../services/base-service'
import { API_URL } from '../../helpers/constants';
import api from "../services/api";

export default class PokeApiService extends BaseService {

    // Get all pokemon ====================================================================================================

    /**
    * @returns list of all pokemons
    *     */

    static getAllPokemon() {
        const url = `${API_URL}/pokemon/`
        return axios.get(url)
    }


}
