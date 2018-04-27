import React from 'react';
import PropTypes from 'prop-types';

import Box from 'grommet/components/Box';

function StatCount(props) {
    return (
        <Box align="center">
            <h2>{props.count}</h2>
            {props.type}
        </Box>
    );
}

StatCount.propTypes = {
    count: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired
};

export default StatCount;