import React, {Component} from 'react';

import Section from 'grommet/components/Section';

import Form from 'components/form/Form';

import LoginForm from './LoginForm';

class LoginView extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {}

    render() {
        const fields = {email: '', password: ''};
        const requiredFields = ['email', 'password'];

        return (
            <Section align="center">
                <Form
                    fields={fields}
                    requiredFields={requiredFields}
                    handleSubmit={this.handleSubmit}
                    render={(state, updateField, submitForm) => (
                        <LoginForm {...state} updateField={updateField} submitForm={submitForm} />
                    )}
                />
            </Section>
        );
    }
}

export default LoginView;
