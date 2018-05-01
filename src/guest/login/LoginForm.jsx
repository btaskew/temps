import React from 'react';
import PropTypes from 'prop-types';

import Form from 'grommet/components/Form';

import TextField from 'components/form/TextField';
import Header from 'components/form/Header';
import Submit from 'components/form/Submit';

function LoginForm(props) {
    return (
        <Form>
            <Header heading="Login" />
            <TextField
                name="email"
                placeHolder="Email address"
                onChange={props.updateField}
                value={props.data.email}
                error={props.errors.email}
            />
            <TextField
                name="password"
                placeHolder="Password"
                onChange={props.updateField}
                value={props.data.password}
                error={props.errors.password}
                additionalProps={{type: 'password'}}
            />
            <Submit buttonText="Login" onSubmit={props.submitForm} />
        </Form>
    );
}

LoginForm.propTypes = {
    data: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    submitForm: PropTypes.func.isRequired,
    updateField: PropTypes.func.isRequired
};

export default LoginForm;
