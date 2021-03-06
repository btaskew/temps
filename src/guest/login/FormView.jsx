import React from 'react';

import Form from 'grommet/components/Form';

import TextField from 'components/form/TextField';
import Header from 'components/form/Header';
import Submit from 'components/form/Submit';

function FormView() {
    return (
        <Form>
            <Header heading="Login" />
            <TextField
                name="email"
                placeholder="Email address"
            />
            <TextField
                name="password"
                placeholder="Password"
                additionalProps={{type: 'password'}}
            />
            <Submit buttonText="Login" />
        </Form>
    );
}

export default FormView;
