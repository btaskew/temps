import React from 'react';
import PropTypes from 'prop-types';

import {Link} from 'react-router-dom';
import FormNextIcon from 'grommet/components/icons/base/FormNext';
import ListItem from 'grommet/components/ListItem';

import JobDetails from './JobDetails';

function Job(props) {
    return (
        <Link to={`jobs/${props.id}`} className="job-link">
            <ListItem id={props.id} align="center" justify="between">
                <JobDetails {...props} />
                <FormNextIcon size="large" colorIndex="grey-3-a" />
            </ListItem>
        </Link>
    );
}

Job.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rate: PropTypes.string.isRequired
};

export default Job;
