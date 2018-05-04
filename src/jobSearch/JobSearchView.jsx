import React from 'react';
import PropTypes from 'prop-types';

import Notification from 'grommet/components/Notification';
import Section from 'grommet/components/Section';

import SearchForm from './form/SearchForm';
import SearchResults from './SearchResults';
import Loading from 'components/Loading';
import Paginator from '../components/Paginator';

function JobSearchView(props) {
    return (
        <Section pad="none">
            <SearchForm handleSubmit={props.handleFormSubmit} />

            {props.loading && <Loading />}

            {props.error && <Notification status="critical" message={props.error} />}

            {props.jobs &&
                (props.jobs.length === 0 ? (
                    <Notification
                        status="warning"
                        message="No jobs were found for the selected options"
                    />
                ) : (
                    <React.Fragment>
                        <SearchResults jobs={props.jobs} />
                        <Paginator
                            pageCount={props.lastPage}
                            currentPage={props.currentPage}
                            handlePageChange={props.handlePageChange}
                        />
                    </React.Fragment>
                ))}
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
