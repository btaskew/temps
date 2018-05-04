import React from 'react';

import {Link} from 'react-router-dom';
import Box from 'grommet/components/Box';
import FormPreviousLink from 'grommet/components/icons/base/FormPreviousLink';

function LinkBack() {
    return (
        <Link to={{pathname: '/jobs', state: {fromJobPage: true}}} className="link-back">
            <Box direction="row">
                <FormPreviousLink colorIndex="brand" />
                <span>Back to results</span>
            </Box>
        </Link>
    );
}

export default LinkBack;
