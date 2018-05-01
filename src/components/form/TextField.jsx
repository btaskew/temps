import React from 'react';
import PropTypes from 'prop-types';
import {onlyUpdateForKeys} from 'recompose';

import Box from 'grommet/components/Box';
import FormField from 'grommet/components/FormField';
import Label from 'grommet/components/Label';
import TextInput from 'grommet/components/TextInput';

function TextField(props) {
    return (
        <Box margin={{vertical: 'small'}}>
            {props.label && (
                <Label labelFor={props.name} margin="small">
                    {props.label}
                </Label>
            )}
            <FormField error={props.error ? 'Required' : ''}>
                <TextInput
                    id={props.name}
                    name={props.name}
                    placeHolder={props.placeHolder}
                    value={props.value}
                    onDOMChange={props.onChange}
                    {...props.additionalProps}
                />
            </FormField>
        </Box>
    );
}

TextField.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    additionalProps: PropTypes.object,
    error: PropTypes.bool,
    label: PropTypes.string,
    placeHolder: PropTypes.string
};

export default onlyUpdateForKeys(['value', 'error'])(TextField);
