import Request from './Request';

class Jobs
{
    async get(fields) {
        // Have to copy object to avoid manipulating original data stored in state
        const queryFields = JSON.parse(JSON.stringify(fields));
        
        this.stripEmptyFields(queryFields);

        return await Request.get('jobs', queryFields);
    }

    stripEmptyFields(fields) {
        for(const key in fields) {
            if(!fields[key] || fields[key] === '') {
                delete fields[key];
            }
        }
    }
}

export default new Jobs();