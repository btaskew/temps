import Request from './Request';

class Jobs
{
    async get() {
        return await Request.get('jobs');
    }
}

export default new Jobs();