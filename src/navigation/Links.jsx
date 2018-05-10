import React from 'react';

import Box from 'grommet/components/Box';
import {Link} from 'react-router-dom';
import Menu from 'grommet/components/Menu';

import Logout from 'components/Logout';
import UnauthenticatedLinks from './UnauthenticatedLinks';
import StaffLinks from './StaffLinks';
import {UserContext} from 'providers';

function Links() {
    return (
        <UserContext.Consumer>
            {({user, setUser}) => (
                <React.Fragment>
                    <Box flex={true} justify="start" direction="row">
                        <Menu direction="row" inline={true}>
                            <Link to="/jobs">Search jobs</Link>
                            {user && user.type === 'staff' && <StaffLinks />}
                        </Menu>
                    </Box>
                    <Box flex={true} justify="end" direction="row">
                        {user ? (
                            <Menu direction="row" inline={true}>
                                <Link to="/profile">{user.name}</Link>
                                <Logout setUser={setUser} email={user.email} />
                            </Menu>
                        ) : (
                            <UnauthenticatedLinks />
                        )}
                    </Box>
                </React.Fragment>
            )}
        </UserContext.Consumer>
    );
}

export default Links;
