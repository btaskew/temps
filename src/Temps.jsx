import React, {Component} from 'react';
import {default as App} from 'grommet/components/App';

import Navbar from './components/Navbar';

class Temps extends Component {
    render() {
        return (
            <App centered={false}>
                <Navbar />
            </App>
        );
    }
}

export default Temps;
