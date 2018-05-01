import Request from './Request';

class Dashboard {
    /**
     * @return {object|null}
     */
    async getStats() {
        const result = await Request.get('stats');

        if (result.error) {
            return null;
        }

        return result;
    }
}

export default new Dashboard();
