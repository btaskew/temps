import React from 'react';
import PropTypes from 'prop-types';

import Box from 'grommet/components/Box';
import FormField from 'grommet/components/FormField';
import TextInput from 'grommet/components/TextInput';

function TextField(props) {
    return (
        <Box margin={{vertical: 'small'}}>
            <FormField error={props.error ? 'Required' : ''}>
                <TextInput
                    name={props.name}
                    placeHolder={props.placeHolder}
                    {...props.additionalProps}
                    value={props.value}
                    onDOMChange={props.onChange}
                />
            </FormField>
        </Box>
    );
}

TextField.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.bool,
    placeHolder: PropTypes.string,
    additionalProps: PropTypes.object
};

export default TextField;
