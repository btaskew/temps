import React from 'react';
import {pure} from 'recompose';

import Box from 'grommet/components/Box';
import Label from 'grommet/components/Label';

import TextField from 'components/form/TextField';

function TagsField() {
    return (
        <Box>
            <TextField name="tags" label="Tags" />
            <Label maring="none" size="small">
                As comma separated list, e.g. catering, IT
            </Label>
        </Box>
    );
}

export default pure(TagsField);
