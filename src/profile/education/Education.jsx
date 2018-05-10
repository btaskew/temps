import React from 'react';
import PropTypes from 'prop-types';

import ListItem from 'grommet/components/ListItem';
import Heading from 'grommet/components/Heading';

function Education(props) {
    return (
        <ListItem id={props.id} direction="column" align="start">
            <Heading tag="h3" margin="small">
                {props.name}
            </Heading>

            <span>
                <b>Level:</b> {props.level}
            </span>
            <span>
                <b>Grade:</b> {props.grade}
            </span>
            <span>
                <b>Institution:</b> {props.institution}
            </span>
            <span>
                <b>Completion date:</b> {props.completion_date}
            </span>
        </ListItem>
    );
}

Education.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    level: PropTypes.string.isRequired,
    grade: PropTypes.string.isRequired,
    institution: PropTypes.string.isRequired,
    completion_date: PropTypes.string.isRequired
};

export default Education;
