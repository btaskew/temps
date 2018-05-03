import React from 'react';
import PropTypes from 'prop-types';

import './job.css';

import Article from 'grommet/components/Article';
import Heading from 'grommet/components/Heading';
import Section from 'grommet/components/Section';

import Information from './Information';
import Loading from 'components/Loading';

function JobPageView(props) {
    if (props.loading) {
        return <Loading />;
    }

    return (
        <Article>
            <Heading>{props.job.title}</Heading>
            <Section justify="between" direction="row">
                <Section className="job-description">{props.job.description}</Section>
                <Information job={props.job} />
            </Section>
        </Article>
    );
}

JobPageView.propTypes = {
    loading: PropTypes.bool,
    error: PropTypes.string,
    job: PropTypes.object
};

export default JobPageView;
