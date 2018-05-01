import React from 'react';
import PropTypes from 'prop-types';

import Box from 'grommet/components/Box';
import FormField from 'grommet/components/FormField';
import Label from 'grommet/components/Label';
import NumberInput from 'grommet/components/NumberInput';

function NumberField(props) {
    return (
        <Box margin={{vertical: 'small'}}>
            {props.label && (
                <Label labelFor={props.name} margin="small">
                    {props.label}
                </Label>
            )}
            <FormField error={props.error ? 'Required' : ''}>
                <NumberInput
                    name={props.name}
                    value={props.value}
                    onChange={props.onChange}
                    min={1}
                    max={50}
                    {...props.additionalProps}
                />
            </FormField>
        </Box>
    );
}

NumberField.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    additionalProps: PropTypes.object,
    error: PropTypes.bool,
    label: PropTypes.string
};

export default NumberField;
