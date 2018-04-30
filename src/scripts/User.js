import axios from 'axios';
import {ENDPOINT} from './../constants';

import cache from 'js-cache';

class User {
    async login(credentials) {
        let response = [];

        try {
            const result = await axios.post(`${ENDPOINT}/login`, credentials);
            response = result.data;
            cache.set('user', response.data);
        } catch (error) {
            if (error.response.data) {
                return error.response.data;
            }
            return null;
        }

        return response;
    }
}

export default new User();
