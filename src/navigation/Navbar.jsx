import React from 'react';

import {Link} from 'react-router-dom';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';

import Links from './Links';

function Navbar() {
    return (
        <Header colorIndex="neutral-3-a" pad="medium">
            <Link to="/" id="home-link">
                <Title>Temps</Title>
            </Link>
            <Links />
        </Header>
    );
}

export default Navbar;
