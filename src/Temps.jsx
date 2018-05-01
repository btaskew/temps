import React, {Component} from 'react';
import App from 'grommet/components/App';

import Navbar from 'navigation/Navbar';
import Routes from 'navigation/Routes';
import {UserContext} from './providers';

class Temps extends Component {
    constructor(props) {
        super(props);

        this.setUser = (user) => {
            this.setState({user});
        };

        this.state = {
            user: null,
            setUser: this.setUser
        };
    }

    render() {
        return (
            <UserContext.Provider value={this.state}>
                <App centered={false}>
                    <Navbar />
                    <Routes />
                </App>
            </UserContext.Provider>
        );
    }
}

export default Temps;
