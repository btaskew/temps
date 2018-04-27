import React, {Component} from 'react';

import LoginView from './LoginView';

import User from 'scripts/User';

class LoginContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            loading: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(credentials) {
        this.setState({loading: true});

        const result = await User.login(credentials);

        if (!result) {
            this.setState({
                loading: false,
                error: 'We were unable to log you in. Please try again later'
            });
            return;
        }

        if (result.error) {
            this.setState({loading: false, error: result.error});
            return;
        }

        this.setState({loading: false, success: true});
    }

    render() {
        return (
            <LoginView
                handleSubmit={this.handleSubmit}
                loading={this.state.loading}
                error={this.state.error}
            />
        );
    }
}

export default LoginContainer;
