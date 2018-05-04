import React from 'react';
import PropTypes from 'prop-types';

import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';

function JobDetails(props) {
    return (
        <Box>
            <Heading tag="h3" margin="none">
                {props.title}
            </Heading>
            <span>£{props.rate} per hour</span>
            <p>{props.description.substr(0, 100)}...</p>
        </Box>
    );
}

JobDetails.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rate: PropTypes.string.isRequired
};

export default JobDetails;
