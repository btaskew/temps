import React from 'react';
import PropTypes from 'prop-types';

import {Redirect, Route} from 'react-router-dom';

function PrivateRoute(props) {
    if (!props.user || props.user.type !== props.userType) {
        return <Redirect to="/login" />;
    }

    return <Route {...props} />;
}

PrivateRoute.propTypes = {
    userType: PropTypes.string.isRequired,
    user: PropTypes.object,
};

export default PrivateRoute;
