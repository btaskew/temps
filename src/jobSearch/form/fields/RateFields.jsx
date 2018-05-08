import React from 'react';
import {pure} from 'recompose';

import Box from 'grommet/components/Box';

import NumberField from 'components/form/NumberField';

function RateFields() {
    return (
        <Box>
            <NumberField name="minRate" label="Minimum rate (£ per hour)" />
            <NumberField name="maxRate" label="Maximum rate (£ per hour)" />
        </Box>
    );
}

export default pure(RateFields);
