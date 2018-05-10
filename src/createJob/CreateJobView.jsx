import React from 'react';
import PropTypes from 'prop-types';

import Notification from 'grommet/components/Notification';
import {Link} from 'react-router-dom';

import View from 'components/View';
import CreateJobForm from './CreateJobForm';

function CreateJobView(props) {
    return (
        <View loading={props.loading} error={props.error}>
            <CreateJobForm handleSubmit={props.handleSubmit} />

            {props.jobId && (
                <Link to={`/jobs/${props.jobId}`}>
                    <Notification
                        status="ok"
                        message="Job created"
                        state="Click this notification to go to the new job"
                    />
                </Link>
            )}
        </View>
    );
}

CreateJobView.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    loading: PropTypes.bool,
    error: PropTypes.string,
    jobId: PropTypes.number
};

export default CreateJobView;
