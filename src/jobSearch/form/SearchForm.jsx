import React from 'react';
import PropTypes from 'prop-types';

import Form from 'components/form/Form';

import FormView from './FormView';

function SearchForm(props) {
    return (
        <Form
            fields={{tags: '', minDuration: '', maxDuration: '', minRate: '', maxRate: ''}}
            handleSubmit={props.handleSubmit}
            render={() => <FormView />}
        />
    );
}

SearchForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired
};

export default SearchForm;
