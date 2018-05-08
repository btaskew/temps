import React from 'react';
import PropTypes from 'prop-types';

import List from 'grommet/components/List';
import Notification from 'grommet/components/Notification';

import Job from './Job';
import Paginator from 'components/Paginator';

function SearchResults(props) {
    if (props.jobs.length < 1) {
        return (
            <Notification status="warning" message="No jobs were found for the selected options" />
        );
    }

    return (
        <React.Fragment>
            <List>{props.jobs.map(job => <Job key={job.id} {...job} />)}</List>
            <Paginator
                pageCount={props.lastPage}
                currentPage={props.currentPage}
                handlePageChange={props.handlePageChange}
            />
        </React.Fragment>
    );
}

SearchResults.propTypes = {
    jobs: PropTypes.array.isRequired,
    handlePageChange: PropTypes.func.isRequired,
    lastPage: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired
};

export default SearchResults;
