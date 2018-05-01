import React from 'react';
import PropTypes from 'prop-types';
import {pure} from 'recompose';

import Box from 'grommet/components/Box';

import NumberField from 'components/form/NumberField';

function DurationFields(props) {
    return (
        <Box>
            <NumberField
                name="minDuration"
                label="Minimum duration (days)"
                onChange={props.updateField}
                value={props.minValue}
            />
            <NumberField
                name="maxDuration"
                label="Maximum duration (days)"
                onChange={props.updateField}
                value={props.maxValue}
            />
        </Box>
    );
}

DurationFields.propTypes = {
    updateField: PropTypes.func.isRequired,
    minValue: PropTypes.string.isRequired,
    maxValue: PropTypes.string.isRequired
};

export default pure(DurationFields);
