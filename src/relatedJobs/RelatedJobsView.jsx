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

    return (
        <Box className="related-jobs">
            <h3>Related jobs</h3>

            <List>
                {props.jobs.map(job => (
                    <Link key={job.id} to={`/jobs/${job.id}`}>
                        <ListItem>
                            <span>{job.title}</span>
                            <span>£{job.rate}ph</span>
                        </ListItem>
                    </Link>
                ))}
            </List>
        </Box>
    );
}

RelatedJobsView.propTypes = {
    jobs: PropTypes.array
};

export default RelatedJobsView;
