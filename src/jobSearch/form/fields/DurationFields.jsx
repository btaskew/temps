import React from 'react';
import {pure} from 'recompose';

import Box from 'grommet/components/Box';

import NumberField from 'components/form/NumberField';

function DurationFields() {
    return (
        <Box>
            <NumberField name="minDuration" label="Minimum duration (days)" />
            <NumberField name="maxDuration" label="Maximum duration (days)" />
        </Box>
    );
}

export default pure(DurationFields);
