import React from 'react';
import PropTypes from 'prop-types';

import Form from 'components/form/Form';
import FormView from './FormView';

function SignupForm(props) {
    return (
        <Form
            fields={{name: '', email: '', password: ''}}
            requiredFields={['name', 'email', 'password']}
            handleSubmit={props.handleSubmit}
            render={() => <FormView />}
        />
    );
}

SignupForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired
};

export default SignupForm;
