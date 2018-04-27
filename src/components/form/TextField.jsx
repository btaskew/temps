import React from 'react';
import PropTypes from 'prop-types';

import Box from 'grommet/components/Box';
import FormField from 'grommet/components/FormField';
import TextInput from 'grommet/components/TextInput';

function TextField(props) {
    return (
        <Box margin={{vertical: 'small'}}>
            <FormField>
                <TextInput
                    name={props.name}
                    placeHolder={props.placeHolder}
                    {...props.additionalProps}
                />
            </FormField>
        </Box>
    );
}

TextField.propTypes = {
    name: PropTypes.string.isRequired,
    placeHolder: PropTypes.string,
    additionalProps: PropTypes.object
};

export default TextField;
