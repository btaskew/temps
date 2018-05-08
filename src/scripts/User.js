import Request from './Request';

class User {
    /**
     * @param {object} credentials
     * @return {object}
     */
    async login(credentials) {
        return await Request.post('login', credentials);
    }

    /**
     * @param {object} credentials
     * @return {object}
     */
    async signup(credentials) {
        return await Request.post('signup/worker', credentials);
    }
}

export default new User();
