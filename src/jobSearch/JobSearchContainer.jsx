import React, {PureComponent} from 'react';
import './search.css';

import JobSearchView from './JobSearchView';

import Jobs from 'scripts/Jobs';

class JobSearchContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            jobs: null,
            error: null,
            loading: false,
            currentPage: 0,
            lastPage: 1
        };

        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handlePageChange = this.handlePageChange.bind(this);
    }

    async handleFormSubmit(fields) {
        this.setState({loading: true, error: null, jobs: null, currentPage: 0});

        const result = await Jobs.get(fields);

        if (result.error) {
            this.setState({error: result.error, loading: false, jobs: null});
            return;
        }

        this.setState({jobs: result.data, loading: false, lastPage: result.last_page});
    }

    async handlePageChange({selected}) {
        this.setState({loading: true, error: null, jobs: null});

        // For some reason selected is 0 indexed, so we have to add 1
        const result = await Jobs.getNextPage(selected + 1);

        if (result.error) {
            this.setState({error: result.error, loading: false, jobs: null});
            return;
        }

        this.setState({
            jobs: result.data,
            currentPage: selected,
            loading: false
        });
    }

    render() {
        return (
            <JobSearchView
                {...this.state}
                handlePageChange={this.handlePageChange}
                handleFormSubmit={this.handleFormSubmit}
            />
        );
    }
}

export default JobSearchContainer;
