import axios from 'axios'
import BaseService from '../services/base-service'
import { API_URL } from '../../helpers/constants';
import api from "../services/api";

export default class PokeApiService extends BaseService {

    // Get all pokemon ====================================================================================================

    /**
    * @returns list of all pokemons
    *     */

    static getAllPokemon(offset, limit) {
        const url = `${API_URL}/pokemon/?offset=${offset}&limit=${limit}`
        return axios.get(url)
    }

    // Get pokemon by id ====================================================================================================

    /**
    * @returns get datail of pokemon
    *     */

     static getPokemonById(pokemon_id) {
        const url = `${pokemon_id}`
        return axios.get(url)
    }

}
