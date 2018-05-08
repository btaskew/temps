import React from 'react';

import SignupContainer from './SignupContainer';
import {UserContext} from 'providers';

function SignupPage() {
    return (
        <UserContext.Consumer>
            {({setUser}) => <SignupContainer setUser={setUser} />}
        </UserContext.Consumer>
    );
}

export default SignupPage;
