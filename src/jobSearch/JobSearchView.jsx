import React from 'react';
import PropTypes from 'prop-types';

import Notification from 'grommet/components/Notification';
import Section from 'grommet/components/Section';

import SearchResults from './SearchResults';
import Loading from 'components/Loading';

function JobSearchView(props) {
    return (
        <Section>
            {props.loading && <Loading />}
            {props.error && <Notification status="critical" message={props.error} />}
            {props.jobs && <SearchResults jobs={props.jobs} />}
        </Section>
    );
}

JobSearchView.propTypes = {
    error: PropTypes.bool,
    jobs: PropTypes.array,
    loading: PropTypes.bool
};

export default JobSearchView;
