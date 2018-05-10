import Request from './Request';

import Formatter from './Formatter';

class Jobs {
    /**
     * Get jobs filtered by given query fields
     *
     * @param {object} fields
     * @return {object}
     */
    async get(fields) {
        let queryFields = null;

        try {
            queryFields = Formatter.prepareFields(fields);
        } catch (error) {
            return {error: error.message};
        }

        return await Request.get('jobs', queryFields);
    }

    /**
     * Get paginated jobs by page
     *
     * @param {number} page
     * @return {object}
     */
    async getPage(page) {
        return await Request.get(`jobs?page=${page}`);
    }

    /**
     * Get single job by given id
     *
     * @param {number} id
     */
    async getJob(id) {
        return await Request.get(`jobs/${id}`);
    }

    /**
     * Create a new job
     *
     * @param {object} jobInformation
     * @param {string} token
     */
    async create(jobInformation, token) {
        let queryFields = null;

        try {
            queryFields = Formatter.prepareFields(jobInformation);
            queryFields.tags = queryFields.tags.split(',');
        } catch (error) {
            return {error: error.message};
        }

        return await Request.post(`jobs?token=${token}`, queryFields);
    }
}

export default new Jobs();
