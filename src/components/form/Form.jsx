import {Component} from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.fields,
            errors: {}
        };

        this.updateField = this.updateField.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    updateField(e) {
        this.setState({data: Object.assign({}, this.state.data, {[e.target.name]: e.target.value})});
    }

    submitForm() {
        if (!this.validate(this.state.data)) {
            return;
        }

        this.props.handleSubmit(this.state.data);
    }

    validate(formData) {
        let errors = {};
        let valid = true;

        for (const field in formData) {
            if (!this.props.requiredFields.includes(field)) {
                continue;
            }

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
        return this.props.render(this.state, this.updateField, this.submitForm);
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
