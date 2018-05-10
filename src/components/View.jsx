import React from 'react';
import PropTypes from 'prop-types';

import Notification from 'grommet/components/Notification';
import Section from 'grommet/components/Section';

import Loading from './Loading';

function View(props) {
    return (
        <Section pad="none" {...props.additionalProps}>
            {props.loading && <Loading />}

            {props.children}

            {props.error && <Notification status="critical" message={props.error} />}
        </Section>
    );
}

View.propTypes = {
    additionalProps: PropTypes.object,
    children: PropTypes.node,
    loading: PropTypes.bool,
    error: PropTypes.string
};

export default View;
