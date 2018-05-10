import React from 'react';
import PropTypes from 'prop-types';

import FormNextIcon from 'grommet/components/icons/base/FormNext';
import ListItem from 'grommet/components/ListItem';
import {Link} from 'react-router-dom';

function MenuItem(props) {
    return (
        <Link to={props.link} className="menu-item">
            <ListItem align="center" justify="between">
                {props.text}
                <FormNextIcon size="medium" colorIndex="grey-3-a" />
            </ListItem>
        </Link>
    );
}

MenuItem.propTypes = {
    link: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

export default MenuItem;
