import React from 'react';

import {Link} from 'react-router-dom';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';

function Navbar() {
    return (
        <Header colorIndex="neutral-1-a" pad="medium">
            <Link to="/" id="home-link">
                <Title>Temps</Title>
            </Link>
        </Header>
    );
}

export default Navbar;
