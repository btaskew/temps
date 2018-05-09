import React from 'react';
import PropTypes from 'prop-types';

import './job.css';

import Article from 'grommet/components/Article';
import Heading from 'grommet/components/Heading';
import Notification from 'grommet/components/Notification';
import Section from 'grommet/components/Section';

import Information from './Information';
import LinkBack from './LinkBack';
import Loading from 'components/Loading';
import RelatedJobsContainer from 'relatedJobs/RelatedJobsContainer';

function JobPageView(props) {
    if (props.loading) {
        return <Loading />;
    }

    if (props.error) {
        return <Notification status="critical" message={props.error} />;
    }

    return (
        <Article>
            {props.fromSearch && <LinkBack />}

            <Heading>{props.job.title}</Heading>

            <Section justify="between" direction="row">
                <Section className="job-description">{props.job.description}</Section>
                <Section className="job-sidebar">
                    <Information job={props.job} />
                    <RelatedJobsContainer tags={props.job.tags} jobId={props.job.id} />
                </Section>
            </Section>
        </Article>
    );
}

JobPageView.propTypes = {
    error: PropTypes.string,
    fromSearch: PropTypes.bool,
    job: PropTypes.object,
    loading: PropTypes.bool
};

export default JobPageView;
