import React, {Component} from 'react';

import Section from 'grommet/components/Section';

import TextField from 'components/form/TextField';
import Form from 'components/form/Form';

class LoginView extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        alert('click');
    }

    render() {
        return (
            <Section align="center">
                <Form heading="Login" buttonText="Login" handleSubmit={this.handleSubmit}>
                    <TextField name="email" placeHolder="Email address" />
                    <TextField
                        name="password"
                        placeHolder="Password"
                        additionalProps={{type: 'password'}}
                    />
                </Form>
            </Section>
        );
    }
}

export default LoginView;
