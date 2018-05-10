import Request from './Request';

class Education
{
    /**
     * @param {string} token 
     * @return {array|object}
     */
    async get(token) {
        return await Request.get('profile/education', {token: token});
    }
}

export default new Education();