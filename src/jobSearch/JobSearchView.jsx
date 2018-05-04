import React from 'react';
import PropTypes from 'prop-types';

import Notification from 'grommet/components/Notification';
import Section from 'grommet/components/Section';
import Box from 'grommet/components/Box';
import ReactPaginate from 'react-paginate';

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
                <React.Fragment>
                    <SearchResults jobs={props.jobs} />
                    <Box justify="center" direction="row" margin={{top: 'medium'}}>
                        <ReactPaginate
                            pageCount={props.lastPage}
                            pageRangeDisplayed={4}
                            marginPagesDisplayed={2}
                            containerClassName={'pagination'}
                            activeClassName={'active'}
                            onPageChange={props.handlePageChange}
                            forcePage={props.currentPage}
                        />
                    </Box>
                </React.Fragment>
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
    loading: PropTypes.bool,
};

export default JobSearchView;
