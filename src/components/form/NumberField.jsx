import React from 'react';
import PropTypes from 'prop-types';
import {onlyUpdateForKeys} from 'recompose';

import Box from 'grommet/components/Box';
import FormField from 'grommet/components/FormField';
import Label from 'grommet/components/Label';
import NumberInput from 'grommet/components/NumberInput';

import {FormContext} from 'providers';

function NumberField(props) {
    return (
        <Box margin={{vertical: 'small'}}>
            {props.label && (
                <Label labelFor={props.name} margin="small">
                    {props.label}
                </Label>
            )}

            <FormContext.Consumer>
                {form => (
                    <FormField error={form.errors[props.name] ? 'Required' : ''}>
                        <NumberInput
                            name={props.name}
                            value={form.values[props.name]}
                            onChange={form.updateField}
                            min={1}
                            max={50}
                            {...props.additionalProps}
                        />
                    </FormField>
                )}
            </FormContext.Consumer>
        </Box>
    );
}

NumberField.propTypes = {
    name: PropTypes.string.isRequired,
    additionalProps: PropTypes.object,
    error: PropTypes.bool,
    label: PropTypes.string
};

export default onlyUpdateForKeys(['value', 'error'])(NumberField);
