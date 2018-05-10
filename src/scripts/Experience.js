import Request from './Request';

class Experience
{
    /**
     * @param {string} token 
     * @return {array|object}
     */
    async get(token) {
        return await Request.get('profile/experience', {token: token});
    }
}

export default new Experience();