import React from 'react';

import {Link} from 'react-router-dom';
import Box from 'grommet/components/Box';
import Menu from 'grommet/components/Menu';

function Links() {
    return (
        <Box flex={true} justify="end" direction="row">
            <Menu direction="row" inline={true}>
                <Link to="/login" id="home-link">
                    Login
                </Link>
                <Link to="/signup" id="home-link">
                    Signup
                </Link>
            </Menu>
        </Box>
    );
}

export default Links;
