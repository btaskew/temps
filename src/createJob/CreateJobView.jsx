import React from 'react';

import Form from 'components/form/Form';
import FormView from './FormView';

function CreateJobView(props) {
    return (
        <Form
            fields={{title: '', description: '', tags: '', closing_date: '', open_vacancies: '', duration: '', rate: ''}}
            requiredFields={['title', 'description', 'tags']}
            handleSubmit={props.handleSubmit}
            render={() => <FormView />}
        />
    );
}

export default CreateJobView;