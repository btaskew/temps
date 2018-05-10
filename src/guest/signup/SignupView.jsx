import React from 'react';
import PropTypes from 'prop-types';

import {Redirect} from 'react-router-dom';

import View from 'components/View';
import SignupForm from './SignupForm';

function SignupView(props) {
    return (
        <View loading={props.loading} error={props.error} additionalProps={{align: 'center'}}>
            <SignupForm handleSubmit={props.handleSubmit} />
            {props.success && <Redirect to="/" />}
        </View>
    );
}

SignupView.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    error: PropTypes.string,
    loading: PropTypes.bool,
    success: PropTypes.bool
};

export default SignupView;
