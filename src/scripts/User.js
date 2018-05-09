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
     * @param {object} userDetails
     * @return {object}
     */
    async signup(userDetails) {
        return await Request.post('signup/worker', userDetails);
    }

    /**
     * @param {string} email 
     */
    async logout(email) {
        await Request.post('logout', {email: email});
    }
}

export default new User();
