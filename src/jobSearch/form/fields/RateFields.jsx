import React from 'react';
import PropTypes from 'prop-types';
import {pure} from 'recompose';

import Box from 'grommet/components/Box';

import NumberField from 'components/form/NumberField';

function RateFields(props) {
    return (
        <Box>
            <NumberField
                name="minRate"
                label="Minimum rate (£ per hour)"
                onChange={props.updateField}
                value={props.minValue}
            />
            <NumberField
                name="maxRate"
                label="Maximum rate (£ per hour)"
                onChange={props.updateField}
                value={props.maxValue}
            />
        </Box>
    );
}

RateFields.propTypes = {
    updateField: PropTypes.func.isRequired,
    minValue: PropTypes.string.isRequired,
    maxValue: PropTypes.string.isRequired
};

export default pure(RateFields);
