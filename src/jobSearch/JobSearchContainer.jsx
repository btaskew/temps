import React, {PureComponent} from 'react';

import JobSearchView from './JobSearchView';

import Jobs from 'scripts/Jobs';

class JobSearchContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            jobs: null,
            error: null,
            loading: false,
            currentPage: 1,
            lastPage: 1
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(fields) {
        this.setState({loading: true, error: null, jobs: null});

        const result = await Jobs.get(fields);
    
        if (result.error) {
            this.setState({error: result.error, loading: false, jobs: null});
            return;
        }
    
        this.setState({jobs: result.data, lastPage: result.last_page, loading: false});
    }

    render() {
        return (
            <JobSearchView
                jobs={this.state.jobs}
                loading={this.state.loading}
                error={this.state.error}
                handleSubmit={this.handleSubmit}
                lastPage={this.state.lastPage}
            />
        );
    }
}

export default JobSearchContainer;
