import React from 'react';

import LoginContainer from './LoginContainer';
import {UserContext} from 'providers';

function LoginPage() {
    return (
        <UserContext.Consumer>
            {({setUser}) => <LoginContainer setUser={setUser} />}
        </UserContext.Consumer>
    );
}

export default LoginPage;
