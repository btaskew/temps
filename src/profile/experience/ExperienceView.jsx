import React from 'react';
import PropTypes from 'prop-types';

import List from 'grommet/components/List';
import Notification from 'grommet/components/Notification';

import View from 'components/View';
import Experience from './Experience';

function ExperienceView(props) {
    return (
        <View loading={props.loading} error={props.error}>
            <h2>My experience</h2>

            {props.experience &&
                (props.experience.length < 1 ? (
                    <Notification
                        status="warning"
                        message="You currently have no experience saved to your profile"
                    />
                ) : (
                    <List>
                        {props.experience.map(experience => (
                            <Experience key={experience.id} {...experience} />
                        ))}
                    </List>
                ))}
        </View>
    );
}

ExperienceView.propTypes = {
    loading: PropTypes.bool,
    error: PropTypes.string,
    experience: PropTypes.array
};

export default ExperienceView;
