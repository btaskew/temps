import React from 'react';
import PropTypes from 'prop-types';

import {Redirect} from 'react-router-dom';

import Form from 'components/form/Form';
import View from 'components/View';
import FormView from './FormView';

function SignupView(props) {
    return (
        <View loading={props.loading} error={props.error} additionalProps={{align: 'center'}}>
            <Form
                fields={{name: '', email: '', password: ''}}
                requiredFields={['name', 'email', 'password']}
                handleSubmit={props.handleSubmit}
                render={() => <FormView />}
            />

            {props.success && <Redirect to="/" />}
        </View>
    );
}

SignupView.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    error: PropTypes.string,
    loading: PropTypes.bool,
    success: PropTypes.bool
};

export default SignupView;
