import React from 'react';
import PropTypes from 'prop-types';

import {Redirect} from 'react-router-dom';

import LoginForm from './LoginForm';
import View from '../../components/View';

function LoginView(props) {
    return (
        <View loading={props.loading} error={props.error} additionalProps={{align: 'center'}}>
            <LoginForm handleSubmit={props.handleSubmit} />

            {props.success && <Redirect to="/" />}
        </View>
    );
}

LoginView.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    error: PropTypes.string,
    loading: PropTypes.bool,
    success: PropTypes.bool
};

export default LoginView;
