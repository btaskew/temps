import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {Redirect} from 'react-router-dom';
import Loading from './Loading';

import User from 'scripts/User';

class Logout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            success: false
        };

        this.logout = this.logout.bind(this);
    }

    async logout() {
        this.setState({loading: true});

        await User.logout(this.props.email);

        this.setState({loading: false, success: true});
        
        this.props.setUser(null);
    }

    render() {
        if (this.state.loading) {
            return <Loading />;
        }

        if (this.state.success) {
            return <Redirect to="/" />;
        }

        return <a onClick={this.logout}>Logout</a>;
    }
}

Logout.propTypes = {
    email: PropTypes.string.isRequired,
    setUser: PropTypes.func.isRequired
};

export default Logout;
