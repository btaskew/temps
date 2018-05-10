import React from 'react';
import PropTypes from 'prop-types';

import List from 'grommet/components/List';
import Notification from 'grommet/components/Notification';
import Section from 'grommet/components/Section';

import Loading from 'components/Loading';
import Education from './Education';

function EducationView(props) {
    return (
        <Section>
            <h2>My education</h2>

            {props.loading && <Loading />}

            {props.error && <Notification status="critical" message={props.error} />}

            {props.education &&
                (props.education.length < 1 ? (
                    <Notification
                        status="warning"
                        message="You currently have no education saved to your profile"
                    />
                ) : (
                    <List>
                        {props.education.map(education => (
                            <Education key={education.id} {...education} />
                        ))}
                    </List>
                ))}
        </Section>
    );
}

EducationView.propTypes = {
    loading: PropTypes.bool,
    error: PropTypes.string,
    education: PropTypes.array,
};

export default EducationView;
