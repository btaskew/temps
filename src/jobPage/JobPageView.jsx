import React from 'react';
import PropTypes from 'prop-types';

import './job.css';

import Article from 'grommet/components/Article';
import Heading from 'grommet/components/Heading';
import Section from 'grommet/components/Section';

import Information from './Information';
import LinkBack from './LinkBack';
import RelatedJobsContainer from 'relatedJobs/RelatedJobsContainer';
import View from '../components/View';

function JobPageView(props) {
    return (
        <View loading={props.loading} error={props.error}>
            {props.job && (
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
            )}
        </View>
    );
}

JobPageView.propTypes = {
    error: PropTypes.string,
    fromSearch: PropTypes.bool,
    job: PropTypes.object,
    loading: PropTypes.bool
};

export default JobPageView;
