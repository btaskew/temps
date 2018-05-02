import axios from 'axios';
import {ENDPOINT} from './../constants';

class Request {
    /**
     * Fetch data via get method
     *
     * @param {string} uri
     * @param {object} queryParams
     * @return {object}
     */
    async get(uri, queryParams = null) {
        return await this.fetch('get', uri, {params: queryParams});
    }

    /**
     * Fetch data via post method
     *
     * @param {string} uri
     * @param {object} postData
     * @return {object}
     */
    async post(uri, postData = null) {
        return await this.fetch('post', uri, postData);
    }

    /**
     * Fetch data using axios
     *
     * @param {string} method
     * @param {string} uri
     * @param {object} params
     * @return {object}
     */
    async fetch(method, uri, params = null) {
        try {
            const result = await axios[method](`${ENDPOINT}/${uri}`, params);
            return result.data.data;
        } catch (error) {
            return this.setError(error);
        }
    }

    /**
     * Set error message from response
     *
     * @param {object} error
     * @return {object}
     */
    setError(error) {
        let errorMessage = '';

        try {
            errorMessage = error.response.data.error;
        } catch (error) {
            errorMessage = 'Oops! Something went wrong, please try again later';
        }

        return {error: errorMessage};
    }
}

export default new Request();
