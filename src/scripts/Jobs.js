import Request from './Request';

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
            queryFields = this.prepareFields(fields);
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
            queryFields = this.prepareFields(jobInformation);
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

    /**
     * @param {object} fields
     * @return {object}
     */
    prepareFields(fields) {
        // Have to copy object to avoid manipulating original data stored in state
        const queryFields = JSON.parse(JSON.stringify(fields));

        this.stripEmptyFields(queryFields);
        this.removeSpacesFromTags(queryFields);
        this.validateMinMaxValues(queryFields);

        return queryFields;
    }

    /**
     * @param {object} fields
     * @return {object}
     */
    stripEmptyFields(fields) {
        for (const key in fields) {
            if (!fields[key] || fields[key] === '') {
                delete fields[key];
            }
        }
    }

    /**
     * @param {object}
     */
    removeSpacesFromTags(fields) {
        if (fields.hasOwnProperty('tags')) {
            fields.tags = fields.tags.replace(/\s/g, '');
        }
    }

    /**
     * @param {object} fields
     */
    validateMinMaxValues(fields) {
        if (this.minMoreThanMax(fields, 'minDuration', 'maxDuration')) {
            throw Error('Minimum duration must be less than maximum duration');
        }

        if (this.minMoreThanMax(fields, 'minRate', 'maxRate')) {
            throw Error('Minimum rate must be less than maximum rate');
        }
    }

    /**
     * @param {object} fields
     * @param {string} min
     * @param {string} max
     * @return {bool}
     */
    minMoreThanMax(fields, min, max) {
        if (fields.hasOwnProperty(min) && fields.hasOwnProperty(max)) {
            if (fields[min] > fields[max]) {
                return true;
            }
        }

        return false;
    }
}

export default new Jobs();
