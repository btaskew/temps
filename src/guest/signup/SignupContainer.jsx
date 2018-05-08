import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import SignupView from './SignupView';

import User from 'scripts/User';

class SignupContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            success: false,
            loading: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(userDetails) {
        this.setState({loading: true, error: null});

        const result = await User.signup(userDetails);

        if (result.error) {
            this.setState({loading: false, error: result.error});
            return;
        }

        this.props.setUser(result);
        this.setState({loading: false, success: true});
    }

    render() {
        return (
            <SignupView
                handleSubmit={this.handleSubmit}
                loading={this.state.loading}
                error={this.state.error}
                success={this.state.success}
            />
        );
    }
}

SignupContainer.propTypes = {
    setUser: PropTypes.func.isRequired
};

export default SignupContainer;
