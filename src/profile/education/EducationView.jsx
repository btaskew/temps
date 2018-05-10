import React from 'react';
import PropTypes from 'prop-types';

import List from 'grommet/components/List';
import Notification from 'grommet/components/Notification';

import View from 'components/View';
import Education from './Education';

function EducationView(props) {
    return (
        <View loading={props.loading} error={props.error}>
            <h2>My education</h2>

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
        </View>
    );
}

EducationView.propTypes = {
    loading: PropTypes.bool,
    error: PropTypes.string,
    education: PropTypes.array
};

export default EducationView;
