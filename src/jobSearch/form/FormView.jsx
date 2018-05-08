import React from 'react';

import Box from 'grommet/components/Box';
import Columns from 'grommet/components/Columns';

import Submit from 'components/form/Submit';
import TagsField from './fields/TagsField';
import DurationFields from './fields/DurationFields';
import RateFields from './fields/RateFields';

function FormView() {
    return (
        <Box separator="bottom">
            <Columns justify="between">
                <TagsField />
                <DurationFields />
                <RateFields />
            </Columns>
            <Submit buttonText="Search" />
        </Box>
    );
}

export default FormView;
