import React, {PureComponent} from 'react';

import JobSearchView from './JobSearchView';

import Jobs from 'scripts/Jobs';

class JobSearchContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            jobs: null,
            error: null,
            loading: true
        };
    }

    async componentDidMount() {
        const result = await Jobs.get();

        if (result.error) {
            this.setState({error: result.error, loading: false});
            return;
        }

        this.setState({jobs: result, loading: false});
    }

    render() {
        return (
            <JobSearchView
                jobs={this.state.jobs}
                loading={this.state.loading}
                error={this.state.error}
            />
        );
    }
}

export default JobSearchContainer;
