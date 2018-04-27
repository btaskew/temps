import axios from 'axios';
import {ENDPOINT} from './../constants';

class Dashboard
{
    async getStats() {
        let stats = [];

        try {
            const result = await axios.get(`${ENDPOINT}/stats`);
            stats = result.data.data;
        } catch (error) {
            return null;
        }

        return stats;
    }
}

export default new Dashboard();