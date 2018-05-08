import React from 'react';
import PropTypes from 'prop-types';

import Notification from 'grommet/components/Notification';
import Section from 'grommet/components/Section';
import {Redirect} from 'react-router-dom';

import Loading from 'components/Loading';
import SignupForm from './SignupForm';

function SignupView(props) {
    return (
        <Section align="center">
            <SignupForm handleSubmit={props.handleSubmit} />

            {props.loading && <Loading />}

            {props.error && <Notification status="critical" message={props.error} />}

            {props.success && <Redirect to="/" />}
        </Section>
    );
}

SignupView.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    error: PropTypes.string,
    loading: PropTypes.bool,
    success: PropTypes.bool
};

export default SignupView;
