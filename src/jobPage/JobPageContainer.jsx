import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import JobPageView from './JobPageView';

import Jobs from 'scripts/Jobs';

class JobPageContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            error: null,
            job: null
        };

    }

    componentDidMount() {
        this.loadJob(this.props.match.params.id);
    }

    componentWillReceiveProps(nextProps) {
        // If linking from related job have to force reloading of job data as component will not unmout
        if(nextProps.location.pathname !== this.props.location.pathname) {
            this.setState({loading: true, job: null, error: null});
            this.loadJob(nextProps.match.params.id);
        }
    }
    
    async loadJob(id) {
        const result = await Jobs.getJob(id);

        if (result.error) {
            this.setState({error: result.error, loading: false, job: null});
            return;
        }

        this.setState({job: result, loading: false});
    }

    render() {
        let fromSearch = false;

        if (this.props.location.state && this.props.location.state.fromSearch) {
            fromSearch = true;
        }

        return <JobPageView {...this.state} fromSearch={fromSearch} />;
    }
}

JobPageContainer.propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
};

export default JobPageContainer;
