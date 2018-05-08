import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import './search.css';

import JobSearchView from './JobSearchView';

import Jobs from 'scripts/Jobs';
import cache from 'js-cache';

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

    componentDidMount() {
        if (this.props.location.state && this.props.location.state.fromJobPage && cache.get('jobs')) {
            this.setState({jobs: cache.get('jobs')});
        }
    }

    async handleFormSubmit(fields) {
        this.setState({loading: true, error: null, jobs: null, currentPage: 0});

        const result = await Jobs.get(fields);

        if (result.error) {
            this.setState({error: result.error, loading: false, jobs: null});
            return;
        }

        cache.set('jobs', result.data);
        this.setState({jobs: result.data, loading: false, lastPage: result.last_page});
    }

    async handlePageChange({selected}) {
        this.setState({loading: true, error: null, jobs: null});

        // The paginator package stores current page 0 indexed, so we have to add 1
        const result = await Jobs.getPage(selected + 1);

        if (result.error) {
            this.setState({error: result.error, loading: false, jobs: null});
            return;
        }

        cache.set('jobs', result.data);
        this.setState({jobs: result.data, currentPage: selected, loading: false});
    }

    render() {
        return (
            <JobSearchView
                {...this.state}
                handleFormSubmit={this.handleFormSubmit}
                handlePageChange={this.handlePageChange}
            />
        );
    }
}

JobSearchContainer.propTypes = {
    location: PropTypes.object.isRequired
};

export default JobSearchContainer;
