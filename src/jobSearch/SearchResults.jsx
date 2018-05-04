import React from 'react';
import PropTypes from 'prop-types';

import List from 'grommet/components/List';

import Job from './Job';

function SearchResults(props) {
    return <List>{props.jobs.map(job => <Job key={job.id} {...job} />)}</List>;
}

SearchResults.propTypes = {
    jobs: PropTypes.array.isRequired
};

export default SearchResults;
