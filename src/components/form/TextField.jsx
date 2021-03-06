import React from 'react';
import PropTypes from 'prop-types';
import {onlyUpdateForKeys} from 'recompose';

import Box from 'grommet/components/Box';
import FormField from 'grommet/components/FormField';
import Label from 'grommet/components/Label';
import TextInput from 'grommet/components/TextInput';

import {FormContext} from 'providers';

function TextField(props) {
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
                        <TextInput
                            id={props.name}
                            name={props.name}
                            placeHolder={props.placeholder}
                            value={form.values[props.name]}
                            onDOMChange={form.updateField}
                            {...props.additionalProps}
                        />
                    </FormField>
                )}
            </FormContext.Consumer>
        </Box>
    );
}

TextField.propTypes = {
    name: PropTypes.string.isRequired,
    additionalProps: PropTypes.object,
    error: PropTypes.bool,
    label: PropTypes.string,
    placeholder: PropTypes.string
};

export default onlyUpdateForKeys(['value', 'error'])(TextField);
