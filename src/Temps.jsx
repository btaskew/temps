import React, {Component} from 'react';
import {default as App} from 'grommet/components/App';

import Navbar from './components/Navbar';
import Routes from './components/Routes';

class Temps extends Component {
    render() {
        return (
            <App centered={false}>
                <Navbar />
                <Routes />
            </App>
        );
    }
}

export default Temps;
