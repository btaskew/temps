import React from 'react';
import PropTypes from 'prop-types';
import {onlyUpdateForKeys} from 'recompose';

import Box from 'grommet/components/Box';
import FormField from 'grommet/components/FormField';
import Label from 'grommet/components/Label';

import {FormContext} from 'providers';

function TextArea(props) {
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
                        <textarea
                            id={props.name}
                            name={props.name}
                            placeholder={props.placeholder}
                            value={form.values[props.name]}
                            onChange={form.updateField}
                            {...props.additionalProps}
                            rows="15"
                        />
                    </FormField>
                )}
            </FormContext.Consumer>
        </Box>
    );
}

TextArea.propTypes = {
    name: PropTypes.string.isRequired,
    additionalProps: PropTypes.object,
    error: PropTypes.bool,
    label: PropTypes.string,
    placeholder: PropTypes.string
};

export default onlyUpdateForKeys(['value', 'error'])(TextArea);
