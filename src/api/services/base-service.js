import axios from 'axios'

/**
 * Serves as a base to all the services.
 */
export default class BaseService {
    /**
     * Return the cancel source instance. Creates one
     * if it doesn't exists.
     *
     * @return {axios.cancelSource}
     */
    static cancelSource() {
        if (this.cancel == null) {
            this.cancel = axios.CancelToken.source()
        }
        return this.cancel
    }

    /**
     * Return the cancel source's token.
     *
     * @return {string}
     */
    static cancelToken() {
        return this.cancelSource().token
    }

    /**
     * Cancel all the requests made to this service, and deletes
     * the cancel token.
     */
    static cancelActiveRequests() {
        this.cancelSource().cancel()
        this.cancel = null
    }
}
