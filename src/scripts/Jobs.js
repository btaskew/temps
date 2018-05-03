import Request from './Request';

class Jobs {
    /**
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

    async getJob(id) {
        return await Request.get(`jobs/${id}`);
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
