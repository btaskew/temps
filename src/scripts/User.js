import axios from 'axios';
import {ENDPOINT} from './../constants';

class User {
    async login(credentials) {
        let response = {};

        try {
            const result = await axios.post(`${ENDPOINT}/login`, credentials);
            response = result.data;
        } catch (error) {
            let errorMessage = 'We were unable to log you in. Please try again later';

            if (error.response.data.error) {
                errorMessage = error.response.data.error;
            }

            response = {error: errorMessage};
        }

        return response;
    }
}

export default new User();
