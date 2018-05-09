import React from 'react';
import PropTypes from 'prop-types';

import {Link} from 'react-router-dom';
import Box from 'grommet/components/Box';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';

function RelatedJobsView(props) {
    if (!props.jobs || props.jobs.length < 1) {
        return null;
    }

    let count = 0;

    return (
        <Box className="related-jobs">
            <h3>Related jobs</h3>

            <List>
                {props.jobs.map(job => {
                    if (job.id === props.jobId || count === 3) {
                        return null;
                    }

                    count++;

                    return (
                        <Link key={job.id} to={`/jobs/${job.id}`} replace>
                            <ListItem>
                                <span>{job.title}</span>
                                <span>£{job.rate}ph</span>
                            </ListItem>
                        </Link>
                    );
                })}
            </List>
        </Box>
    );
}

RelatedJobsView.propTypes = {
    jobId: PropTypes.number.isRequired,
    jobs: PropTypes.array
};

export default RelatedJobsView;
