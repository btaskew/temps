import React from 'react';

import {Link} from 'react-router-dom';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';

import Links from './Links';

function Navbar() {
    return (
        <Header colorIndex="neutral-3-a" pad="medium">
            <Link to="/" id="home-link">
                <Heading id="app-title" tag="h2">Temps</Heading>
            </Link>
            <Links />
        </Header>
    );
}

export default Navbar;
