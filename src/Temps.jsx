import React, {Component} from 'react';
import App from 'grommet/components/App';

import Navbar from 'navigation/Navbar';
import Routes from 'navigation/Routes';
import {UserContext} from './providers';

class Temps extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null
        };

        this.setUser = this.setUser.bind(this);
    }

    setUser(user) {
        this.setState({user});
    }

    render() {
        return (
            <UserContext.Provider value={{user: this.state.user, setUser: this.setUser}}>
                <App centered={false}>
                    <Navbar />
                    <Routes />
                </App>
            </UserContext.Provider>
        );
    }
}

export default Temps;
