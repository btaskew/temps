import React from 'react';
import PropTypes from 'prop-types';

import List from 'grommet/components/List';
import Notification from 'grommet/components/Notification';

import Job from './Job';

function SearchResults(props) {
    if (props.jobs.length < 1) {
        return (
            <Notification status="warning" message="No jobs were found for the selected options" />
        );
    }

    return <List>{props.jobs.map(job => <Job key={job.id} {...job} />)}</List>;
}

SearchResults.propTypes = {
    jobs: PropTypes.array.isRequired
};

export default SearchResults;
