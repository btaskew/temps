import React, {Component} from 'react';
import App from 'grommet/components/App';

import Loading from 'components/Loading';
import Navbar from 'navigation/Navbar';
import Routes from 'navigation/Routes';
import {UserContext} from './providers';

import Cookies from 'js-cookie';
import User from 'scripts/User';

class Temps extends Component {
    constructor(props) {
        super(props);

        this.setUser = user => {
            this.setState({
                context: Object.assign({}, this.state.context, {user: user})
            });
        };

        this.state = {
            context: {
                user: null,
                setUser: this.setUser
            },
            loading: true
        };
    }

    async componentDidMount() {
        if (Cookies.get('temps-user-token')) {
            const user = await User.fetchUser(Cookies.get('temps-user-token'));

            if (!user.error) {
                this.setUser(user);
            }
        }

        this.setState({loading: false});
    }

    render() {
        return (
            <UserContext.Provider value={this.state.context}>
                <App centered={false}>
                    <Navbar />
                    {this.state.loading ? <Loading /> : <Routes />}
                </App>
            </UserContext.Provider>
        );
    }
}

export default Temps;
