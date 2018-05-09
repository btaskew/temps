import React from 'react';
import PropTypes from 'prop-types';

import Form from 'components/form/Form';
import FormView from './FormView';

function CreateJobForm(props) {
    return (
        <Form
            fields={{
                title: '',
                description: '',
                tags: '',
                closing_date: '',
                open_vacancies: '',
                duration: '',
                rate: ''
            }}
            requiredFields={[
                'title',
                'description',
                'tags',
                'closing_date',
                'open_vacancies',
                'duration',
                'rate'
            ]}
            handleSubmit={props.handleSubmit}
            render={() => <FormView />}
        />
    );
}

CreateJobForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired
};

export default CreateJobForm;
