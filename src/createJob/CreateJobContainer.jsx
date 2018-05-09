import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import CreateJobView from './CreateJobView';

import Jobs from 'scripts/Jobs';

class CreateJobContainer extends PureComponent
{
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            error: null,
            jobId: null
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(jobInformation) {
        this.setState({loading: true, error: false});
        
        const result = await Jobs.create(jobInformation, this.props.user.token);

        if (result.error) {
            this.setState({loading: false, error: result.error});
        }

        this.setState({loading: false, jobId: result.id});
    }

    render() {

        return (
            <CreateJobView {...this.state} handleSubmit={this.handleSubmit} />
        );

    }

}

CreateJobContainer.propTypes = {
    user: PropTypes.object.isRequired
};

export default CreateJobContainer;