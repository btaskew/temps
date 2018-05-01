import React from 'react';
import PropTypes from 'prop-types';

import Box from 'grommet/components/Box';
import Columns from 'grommet/components/Columns';

import TextField from 'components/form/TextField';
import NumberField from 'components/form/NumberField';
import Submit from 'components/form/Submit';

function FormView(props) {
    return (
        <Box separator="bottom">
            <Columns justify="between">
                <Box>
                    <TextField
                        name="tags"
                        label="Tags (e.g. catering, IT)"
                        onChange={props.updateField}
                        value={props.data.tags}
                    />
                </Box>
                <Box>
                    <NumberField
                        name="minDuration"
                        label="Minimum duration (days)"
                        onChange={props.updateField}
                        value={props.data.minDuration}
                    />
                    <NumberField
                        name="maxDuration"
                        label="Maximum duration (days)"
                        onChange={props.updateField}
                        value={props.data.maxDuration}
                    />
                </Box>
                <Box>
                    <NumberField
                        name="minRate"
                        label="Minimum rate (£ per hour)"
                        onChange={props.updateField}
                        value={props.data.minRate}
                    />
                    <NumberField
                        name="maxRate"
                        label="Maximum rate (£ per hour)"
                        onChange={props.updateField}
                        value={props.data.maxRate}
                    />
                </Box>
            </Columns>
            <Submit buttonText="Search" onSubmit={props.submitForm} />
        </Box>
    );
}

FormView.propTypes = {
    data: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    submitForm: PropTypes.func.isRequired,
    updateField: PropTypes.func.isRequired
};

export default FormView;
