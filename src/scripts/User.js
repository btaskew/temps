import Cookies from 'js-cookie';
import Request from './Request';

const cookieName = 'temps-user-token';

class User {
    /**
     * @param {object} credentials
     * @return {object}
     */
    async login(credentials) {
        const user = await Request.post('login', credentials);

        this.setCookie(user);

        return user;
    }

    /**
     * @param {object} userDetails
     * @return {object}
     */
    async signup(userDetails) {
        const user = await Request.post('signup/worker', userDetails);

        this.setCookie(user);

        return user;
    }

    /**
     * @param {string} email
     */
    async logout(email) {
        const user = Request.post('logout', {email: email});

        if (!user.error) {
            Cookies.remove(cookieName);
        }

        return user;
    }

    /**
     * @param {string} token
     * @return {object}
     */
    async fetchUser(token) {
        return await Request.get('user', {token: token});
    }

    /**
     * @param {string} token
     */
    setCookie(user) {
        if (user.token) {
            Cookies.set(cookieName, user.token, {expires: 1});
        }
    }
}

export default new User();
