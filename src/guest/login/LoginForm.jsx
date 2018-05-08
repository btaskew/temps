import React from 'react';
import PropTypes from 'prop-types';

import Form from 'components/form/Form';
import FormView from './FormView';

function LoginForm(props) {
    return (
        <Form
            fields={{email: '', password: ''}}
            requiredFields={['email', 'password']}
            handleSubmit={props.handleSubmit}
            render={() => <FormView />}
        />
    );
}

LoginForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired
};

export default LoginForm;
