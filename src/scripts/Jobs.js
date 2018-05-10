import Request from './Request';

import Formatter from './Formatter';
import Tags from './Tags';

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

    /**
     * Get jobs that have match the tags given
     * 
     * @param {array} tags 
     */
    async getRelated(tags) {
        const queryTags = Tags.toString(tags).replace(/\s/g, '');

        const jobs = await Request.get('jobs', {tags: queryTags});
        
        try {
            return jobs.data.filter((job, index, arr) => (
                arr.map(mapObj => mapObj.id).indexOf(job.id) === index
            ));
        } catch (error) {
            return {error: 'Unable to process related jobs'};
        }
    }
}

export default new Jobs();
