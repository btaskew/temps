import React from 'react';
import PropTypes from 'prop-types';

import SearchForm from './form/SearchForm';
import SearchResults from './SearchResults';
import View from 'components/View';

function JobSearchView(props) {
    return (
        <View loading={props.loading} error={props.error}>
            <SearchForm handleSubmit={props.handleFormSubmit} />
            
            {props.jobs && (
                <SearchResults
                    jobs={props.jobs}
                    lastPage={props.lastPage}
                    currentPage={props.currentPage}
                    handlePageChange={props.handlePageChange}
                />
            )}
        </View>
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
