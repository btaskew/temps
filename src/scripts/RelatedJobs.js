import Formatter from './Formatter';
import Request from './Request';
import Tags from './Tags';

class RelatedJobs {
    /**
     * Get jobs that have match the tags given
     *
     * @param {array} tags
     * @param {number} jobId
     */
    async get(tags, jobId) {
        const queryTags = Tags.toString(tags).replace(/\s/g, '');

        const result = await Request.get('jobs', {tags: queryTags});

        try {
            return this.limitJobs(
                Formatter.removeDuplicateObjects(result.data),
                jobId
            );
        } catch (error) {
            return {error: 'Unable to process related jobs'};
        }
    }

    /**
     * Reduce jobs to 3 that don't match the provided ID
     * 
     * @param {array} jobs
     * @param {number} jobId
     */
    limitJobs(jobs, jobId) {
        const relatedJobs = [];
        let jobCount = 0;

        for (const i in jobs) {
            const job = jobs[i];

            if (job.id === jobId) {
                continue;
            }

            if (jobCount === 3) {
                break;
            }

            jobCount++;
            relatedJobs.push(job);
        }

        return relatedJobs;
    }
}

export default new RelatedJobs();
