import React from 'react';
import PropTypes from 'prop-types';

import Notification from 'grommet/components/Notification';
import Section from 'grommet/components/Section';

import SearchForm from './form/SearchForm';
import SearchResults from './SearchResults';
import Loading from 'components/Loading';

function JobSearchView(props) {
    return (
        <Section pad="none">
            <SearchForm handleSubmit={props.handleFormSubmit} />

            {props.loading && <Loading />}

            {props.error && <Notification status="critical" message={props.error} />}

            {props.jobs && (
                <SearchResults
                    jobs={props.jobs}
                    lastPage={props.lastPage}
                    currentPage={props.currentPage}
                    handlePageChange={props.handlePageChange}
                />
            )}
        </Section>
    );
}

JobSearchView.propTypes = {
    handleFormSubmit: PropTypes.func.isRequired,
    handlePageChange: PropTypes.func.isRequired,
    lastPage: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    error: PropTypes.string,
    jobs: PropTypes.array,
    loading: PropTypes.bool
};

export default JobSearchView;
