import React from 'react';
import PropTypes from 'prop-types';

import Form from 'components/form/Form';
import View from 'components/View';
import FormView from './FormView';

function LoginView(props) {
    return (
        <View loading={props.loading} error={props.error} additionalProps={{align: 'center'}}>
            <Form
                fields={{email: '', password: ''}}
                requiredFields={['email', 'password']}
                handleSubmit={props.handleSubmit}
                render={() => <FormView />}
            />
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
