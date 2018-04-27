import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Box from 'grommet/components/Box';

import Dashboard from 'dashboard/Dashboard';
import LoginContainer from 'guest/login/LoginContainer';

function Routes() {
    return (
        <Box pad="medium">
            <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/login" component={LoginContainer} />
            </Switch>
        </Box>
    );
}

export default Routes;
