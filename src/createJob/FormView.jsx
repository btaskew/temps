import React from 'react';

import Box from 'grommet/components/Box';

import Header from 'components/form/Header';
import TextArea from 'components/form/TextArea';
import TextField from 'components/form/TextField';
import DateField from 'components/form/DateField';
import NumberField from 'components/form/NumberField';
import Submit from 'components/form/Submit';

function FormView() {
    return (
        <Box>
            <Header heading="Create a new job" />

            <TextField name="title" label="Title" />
            <TextArea name="description" label="Job description" />
            <TextField name="tags" label="Tags (as comma separated list)" placeholder="e.g. catering, IT" />
            <DateField name="closing_date" label="Closing date" />
            <NumberField name="open_vacancies" label="Number of open vacancies" />
            <NumberField name="duration" label="Duration (in number of days)" />
            <NumberField name="rate" label="Rate (£ per hour)" />

            <Submit buttonText="Save job" />
        </Box>
    );
}

export default FormView;