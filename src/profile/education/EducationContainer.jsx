import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import Education from 'scripts/Education';
import EducationView from './EducationView';

class EducationContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            error: null,
            education: null
        };
    }
    async componentDidMount() {
        const education = await Education.get(this.props.user.token);

        if (education.error) {
            this.setState({error: education.error, loading: false});
        }

        this.setState({education: education, loading: false});
    }

    render() {
        return <EducationView {...this.state} />;
    }
}

EducationContainer.propTypes = {
    user: PropTypes.object.isRequired
};

export default EducationContainer;
