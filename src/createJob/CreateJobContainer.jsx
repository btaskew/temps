import React, {PureComponent} from 'react';
import CreateJobView from './CreateJobView';

class CreateJobContainer extends PureComponent
{
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(jobInformation) {
        console.log(jobInformation);
    }

    render() {

        return (
            <CreateJobView handleSubmit={this.handleSubmit} />
        );

    }

}

export default CreateJobContainer;