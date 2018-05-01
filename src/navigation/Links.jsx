import React from 'react';

import Box from 'grommet/components/Box';

import UnauthenticatedLinks from './UnauthenticatedLinks';
import {UserContext} from 'providers';

function Links() {
    return (
        <UserContext.Consumer>
            {({user}) => (
                <Box flex={true} justify="end" direction="row">
                    {user ? <span>{user.name}</span> : <UnauthenticatedLinks />}
                </Box>
            )}
        </UserContext.Consumer>
    );
}

export default Links;
