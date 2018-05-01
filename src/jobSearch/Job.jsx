import React from 'react';
import PropTypes from 'prop-types';

import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import ListItem from 'grommet/components/ListItem';

function Job(props) {
    return (
        <ListItem id={props.id} align="start" justify="between">
            <Box>
                <Heading tag="h3" margin="none">
                    {props.title}
                </Heading>
                <p>{props.description}</p>
            </Box>
            <Box>
                <span>
                    <b>Duration: </b>
                    {Number(props.duration)} days
                </span>
                <span>
                    <b>Rate: </b>£{props.rate}
                </span>
            </Box>
        </ListItem>
    );
}

Job.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    rate: PropTypes.string.isRequired
};

export default Job;
