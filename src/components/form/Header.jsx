import React from 'react';
import PropTypes from 'prop-types';
import {pure} from 'recompose';

import {default as GrommetHeader} from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';

function Header(props) {
    return (
        <GrommetHeader>
            <Heading>{props.heading}</Heading>
        </GrommetHeader>
    );
}

Header.propTypes = {
    heading: PropTypes.string.isRequired
};

export default pure(Header);
