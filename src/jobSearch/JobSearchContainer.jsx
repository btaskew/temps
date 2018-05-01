import React, {PureComponent} from 'react';

import JobSearchView from './JobSearchView';

import Jobs from 'scripts/Jobs';

class JobSearchContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            jobs: null,
            error: null,
            loading: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(fields) {
        this.setState({loading: true});

        const result = await Jobs.get(fields);
    
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
                handleSubmit={this.handleSubmit}
            />
        );
    }
}

export default JobSearchContainer;
