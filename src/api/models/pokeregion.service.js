import axios from 'axios'
import BaseService from '../services/base-service'
import { API_URL } from '../../helpers/constants';

export default class PokeRegion extends BaseService {

    // Get all regions ====================================================================================================

    /**
    * @returns list of all regions
    *     */

    static getAllRegions() {
        const url = `${API_URL}/region/`
        return axios.get(url)
    }

    // Get regions by id ====================================================================================================

    /**
    * @returns get datail of regions
    *     */

     static getAllRegionsById(region_id) {
        const url = `${API_URL}/region/${region_id}`
        return axios.get(url)
    }

}
