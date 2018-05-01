import React from 'react';

import {Link} from 'react-router-dom';
import Menu from 'grommet/components/Menu';

function UnauthenticatedLinks() {
    return (
        <Menu direction="row" inline={true}>
            <Link to="/login">
                Login
            </Link>
            <Link to="/signup">
                Signup
            </Link>
        </Menu>
    );
}

export default UnauthenticatedLinks;
