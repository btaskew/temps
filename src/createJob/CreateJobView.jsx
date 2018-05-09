import React from 'react';
import PropTypes from 'prop-types';

import Notification from 'grommet/components/Notification';
import {Link} from 'react-router-dom';

import Loading from 'components/Loading';
import CreateJobForm from './CreateJobForm';

function CreateJobView(props) {
    return (
        <React.Fragment>
            <CreateJobForm handleSubmit={props.handleSubmit} />

            {props.loading && <Loading />}

            {props.error && <Notification status="critical" message={props.error} />}

            {props.jobId && (
                <Link to={`/jobs/${props.jobId}`}>
                    <Notification
                        status="ok"
                        message="Job created"
                        state="Click this notification to go to the new job"
                    />
                </Link>
            )}
        </React.Fragment>
    );
}

CreateJobView.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    loading: PropTypes.bool,
    error: PropTypes.string,
    jobId: PropTypes.number
};

export default CreateJobView;
