import React from 'react';

import Box from 'grommet/components/Box';
import {Link} from 'react-router-dom';
import Menu from 'grommet/components/Menu';

import UnauthenticatedLinks from './UnauthenticatedLinks';
import {UserContext} from 'providers';

function Links() {
    return (
        <UserContext.Consumer>
            {({user}) => (
                <React.Fragment>
                    <Box flex={true} justify="start" direction="row">
                        <Menu direction="row" inline={true}>
                            <Link to="/jobs">Search jobs</Link>
                        </Menu>
                    </Box>
                    <Box flex={true} justify="end" direction="row">
                        {user ? <span>{user.name}</span> : <UnauthenticatedLinks />}
                    </Box>
                </React.Fragment>
            )}
        </UserContext.Consumer>
    );
}

export default Links;
