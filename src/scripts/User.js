import axios from 'axios';
import {ENDPOINT} from './../constants';

class User {
    async login(credentials) {
        let response = [];

        try {
            const result = await axios.post(`${ENDPOINT}/login`, credentials);
            response = result.data;
        } catch (error) {
            response = error.response.data;
        }

        return response;
    }
}

export default new User();
