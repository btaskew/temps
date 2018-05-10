import React from 'react';
import PropTypes from 'prop-types';

import ListItem from 'grommet/components/ListItem';
import Heading from 'grommet/components/Heading';

function Experience(props) {
    return (
        <ListItem id={props.id} direction="column" align="start">
            <Heading tag="h3" margin="small">
                {props.title}
            </Heading>

            <div>
                <b>Description</b>
                <p className="experience-description">{props.description}</p>
            </div>
            <span>
                <b>Type:</b> {props.type}
            </span>
            <span>
                <b>Start date:</b> {props.start_date}
            </span>
            <span>
                <b>End date:</b> {props.end_date}
            </span>
        </ListItem>
    );
}

Experience.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    start_date: PropTypes.string.isRequired,
    end_date: PropTypes.string.isRequired
};

export default Experience;
