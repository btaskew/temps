import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import RelatedJobsView from './RelatedJobsView';

import RelatedJobs from 'scripts/RelatedJobs';

class RelatedJobsContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            jobs: null
        };
    }

    async componentDidMount() {
        const result = await RelatedJobs.get(this.props.tags, this.props.jobId);

        if (!result.error) {
            this.setState({jobs: result});
        }
    }

    render() {
        return <RelatedJobsView jobs={this.state.jobs} />;
    }
}

RelatedJobsContainer.propTypes = {
    jobId: PropTypes.number.isRequired,
    tags: PropTypes.array.isRequired
};

export default RelatedJobsContainer;
