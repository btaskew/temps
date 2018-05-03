import React from 'react';

import {Switch, Route} from 'react-router-dom';
import Box from 'grommet/components/Box';

import Dashboard from 'dashboard/Dashboard';
import LoginPage from 'guest/login/LoginPage';
import JobSearchContainer from 'jobSearch/JobSearchContainer';
import JobPageContainer from 'jobPage/JobPageContainer';

function Routes() {
    return (
        <Box pad="medium">
            <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/jobs" component={JobSearchContainer} />
                <Route exact path="/jobs/:id" component={JobPageContainer} />
                <Route exact path="/login" component={LoginPage} />
            </Switch>
        </Box>
    );
}

export default Routes;
