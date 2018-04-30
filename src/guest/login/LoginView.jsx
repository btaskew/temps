import React from 'react';
import PropTypes from 'prop-types';

import Notification from 'grommet/components/Notification';
import Section from 'grommet/components/Section';
import {Redirect} from 'react-router-dom';

import Loading from 'components/Loading';
import Form from 'components/form/Form';
import LoginForm from './LoginForm';

function LoginView(props) {
    return (
        <Section align="center">
            <Form
                fields={{email: '', password: ''}}
                requiredFields={['email', 'password']}
                handleSubmit={props.handleSubmit}
                render={(state, updateField, submitForm) => (
                    <LoginForm {...state} updateField={updateField} submitForm={submitForm} />
                )}
            />

            {props.loading && <Loading />}

            {props.error && <Notification status="critical" message={props.error} />}

            {props.success && <Redirect to="/" />}
        </Section>
    );
}

LoginView.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    loading: PropTypes.bool,
    success: PropTypes.bool,
    error: PropTypes.string
};

export default LoginView;
