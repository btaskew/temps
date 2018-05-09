import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import RelatedJobsView from './RelatedJobsView';

import Jobs from 'scripts/Jobs';

class RelatedJobsContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            jobs: null
        };
    }

    async componentDidMount() {
        const result = await Jobs.getRelated(this.props.tags);

        if (!result.error) {
            this.setState({jobs: result});
        }
    }

    render() {
        return <RelatedJobsView jobs={this.state.jobs} jobId={this.props.jobId} />;
    }
}

RelatedJobsContainer.propTypes = {
    jobId: PropTypes.number.isRequired,
    tags: PropTypes.array.isRequired
};

export default RelatedJobsContainer;
