import React from 'react';
import PropTypes from 'prop-types';

import Box from 'grommet/components/Box';
import Columns from 'grommet/components/Columns';

import Submit from 'components/form/Submit';
import TagField from './fields/TagField';
import DurationFields from './fields/DurationFields';
import RateFields from './fields/RateFields';

function FormView(props) {
    return (
        <Box separator="bottom">
            <Columns justify="between">
                <TagField updateField={props.updateField} value={props.data.tags} />
                <DurationFields
                    updateField={props.updateField}
                    minValue={props.data.minDuration}
                    maxValue={props.data.maxDuration}
                />
                <RateFields
                    updateField={props.updateField}
                    minValue={props.data.minRate}
                    maxValue={props.data.maxRate}
                />
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
