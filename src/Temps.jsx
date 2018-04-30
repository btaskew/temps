import React, {Component} from 'react';
import App from 'grommet/components/App';

import Navbar from 'navigation/Navbar';
import Routes from 'navigation/Routes';
import {UserContext} from './providers';

import cache from 'js-cache';

class Temps extends Component {
    render() {
        return (
            <UserContext.Provider value={cache.get('user')}>
                <App centered={false}>
                    <Navbar />
                    <Routes />
                </App>
            </UserContext.Provider>
        );
    }
}

export default Temps;
