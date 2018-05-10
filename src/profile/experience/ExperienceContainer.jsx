import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import Experience from 'scripts/Experience';
import ExperienceView from './ExperienceView';

class ExperienceContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            error: null,
            experience: null
        };
    }

    async componentDidMount() {
        const experience = await Experience.get(this.props.token);

        if (experience.error) {
            this.setState({error: experience.error, loading: false});
            return;
        }

        this.setState({experience: experience, loading: false});
    }

    render() {
        return <ExperienceView {...this.state} />;
    }
}

ExperienceContainer.propTypes = {
    token: PropTypes.string.isRequired
};

export default ExperienceContainer;
