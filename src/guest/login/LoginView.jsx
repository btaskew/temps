import React, {Component} from 'react';

import Section from 'grommet/components/Section';
import Form from 'grommet/components/Form';

import TextField from 'components/form/TextField';
import Header from 'components/form/Header';
import Submit from 'components/form/Submit';

import extend from 'lodash/extend';

class LoginView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                email: '',
                password: ''
            },
            errors: {
                email: null,
                password: null
            }
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({data: extend({}, this.state.data, {[e.target.name]: e.target.value})});
    }

    handleSubmit() {
        if (!this.validate(this.state.data)) {
            return;
        }
        console.log(this.state.data);
    }

    validate(formData) {
        let errors = {};
        let valid = true;

        for (const field in formData) {
            const value = formData[field];
            
            if (!value || value === '') {
                valid = false;
                errors = extend(errors, {[field]: true});
            }
        }
        
        this.setState({errors});
        return valid;
    }

    render() {
        return (
            <Section align="center">
                <Form>
                    <Header heading="Login" />
                    <TextField
                        name="email"
                        placeHolder="Email address"
                        onChange={this.handleChange}
                        value={this.state.data.email}
                        error={this.state.errors.email}
                    />
                    <TextField
                        name="password"
                        placeHolder="Password"
                        additionalProps={{type: 'password'}}
                        onChange={this.handleChange}
                        value={this.state.data.password}
                        error={this.state.errors.password}
                    />
                    <Submit buttonText="Login" onSubmit={this.handleSubmit} />
                </Form>
            </Section>
        );
    }
}

export default LoginView;
