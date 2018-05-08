import React from 'react';
import PropTypes from 'prop-types';
import {onlyUpdateForKeys} from 'recompose';

import Box from 'grommet/components/Box';
import FormField from 'grommet/components/FormField';
import Label from 'grommet/components/Label';
import DateTime from 'grommet/components/DateTime';

import {FormContext} from 'providers';

function DateField(props) {
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
                        <DateTime
                            id={props.name}
                            name={props.name}
                            value={form.values[props.name]}
                            onChange={value => {
                                form.updateField({target: {name: props.name, value: value}});
                            }}
                            {...props.additionalProps}
                            format="YYYY-MM-DD"
                        />
                    </FormField>
                )}
            </FormContext.Consumer>
        </Box>
    );
}

DateField.propTypes = {
    name: PropTypes.string.isRequired,
    additionalProps: PropTypes.object,
    error: PropTypes.bool,
    label: PropTypes.string
};

export default onlyUpdateForKeys(['value', 'error'])(DateField);
