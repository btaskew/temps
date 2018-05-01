import React from 'react';
import PropTypes from 'prop-types';

import Box from 'grommet/components/Box';
import Label from 'grommet/components/Label';

import TextField from 'components/form/TextField';

function TagField(props) {
    return (
        <Box>
            <TextField name="tags" label="Tags" onChange={props.updateField} value={props.value} />
            <Label maring="none" size="small">
                As comma separated list, e.g. catering, IT
            </Label>
        </Box>
    );
}

TagField.propTypes = {
    updateField: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
};

export default TagField;
