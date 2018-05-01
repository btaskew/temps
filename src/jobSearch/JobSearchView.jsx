import React from 'react';
import PropTypes from 'prop-types';

import Notification from 'grommet/components/Notification';
import Section from 'grommet/components/Section';

import SearchForm from './SearchForm';
import SearchResults from './SearchResults';
import Loading from 'components/Loading';

function JobSearchView(props) {
    return (
        <Section pad="none" id="foo">
            <SearchForm handleSubmit={props.handleSubmit} />
            {props.loading && <Loading />}
            {props.error && <Notification status="critical" message={props.error} />}
            {props.jobs && <SearchResults jobs={props.jobs} />}
        </Section>
    );
}

JobSearchView.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    error: PropTypes.bool,
    jobs: PropTypes.array,
    loading: PropTypes.bool
};

export default JobSearchView;
