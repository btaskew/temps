import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import {FormContext} from 'providers';

class Form extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.fields,
            errors: {}
        };

        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUpdate(e) {
        this.setState({
            data: Object.assign({}, this.state.data, {[e.target.name]: e.target.value})
        });
    }

    handleSubmit() {
        if (!this.validate(this.state.data)) {
            return;
        }

        this.props.handleSubmit(this.state.data);
    }

    validate(formData) {
        let errors = {};
        let valid = true;

        for (const i in this.props.requiredFields) {
            const field = this.props.requiredFields[i];
            const value = formData[field];

            if (!value || value === '') {
                valid = false;
                errors = Object.assign(errors, {[field]: true});
            }
        }

        this.setState({errors});
        return valid;
    }

    render() {
        return (
            <FormContext.Provider value={{
                values: this.state.data,
                errors: this.state.errors,
                updateField: this.handleUpdate,
                submitForm: this.handleSubmit
            }}>
                {this.props.render()}
            </FormContext.Provider>
        );
    }
}

Form.propTypes = {
    render: PropTypes.func.isRequired,
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    requiredFields: PropTypes.array
};

Form.defaultProps = {
    requiredFields: []
};

export default Form;
