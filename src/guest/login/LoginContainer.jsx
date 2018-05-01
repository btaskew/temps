import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import LoginView from './LoginView';

import User from 'scripts/User';

class LoginContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            success: null,
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

        this.props.setUser(result.data);
        this.setState({loading: false, success: true});
    }

    render() {
        return (
            <LoginView
                handleSubmit={this.handleSubmit}
                loading={this.state.loading}
                error={this.state.error}
                success={this.state.success}
            />
        );
    }
}

LoginContainer.propTypes = {
    setUser: PropTypes.func.isRequired
};

export default LoginContainer;
