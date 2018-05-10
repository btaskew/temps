import React from 'react';
import PropTypes from 'prop-types';

import LoginContainer from './LoginContainer';
import {UserContext} from 'providers';

function LoginPage(props) {
    return (
        <UserContext.Consumer>
            {({setUser}) => <LoginContainer setUser={setUser} history={props.history} />}
        </UserContext.Consumer>
    );
}

LoginPage.propTypes = {
    history: PropTypes.object.isRequired
};

export default LoginPage;
