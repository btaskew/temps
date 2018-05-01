import Request from './Request';

class User {
    /**
     * @param {object} credentials
     * @return {object}
     */
    async login(credentials) {
        return await Request.post('login', credentials);
    }
}

export default new User();
