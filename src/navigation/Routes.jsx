import React from 'react';

import {Switch, Route} from 'react-router-dom';
import Box from 'grommet/components/Box';

import Dashboard from 'dashboard/Dashboard';
import LoginPage from 'guest/login/LoginPage';
import SignupPage from 'guest/signup/SignupPage';
import JobSearchContainer from 'jobSearch/JobSearchContainer';
import JobPageContainer from 'jobPage/JobPageContainer';

import CreateJobPage from 'createJob/CreateJobPage';

import {UserContext} from 'providers';

function Routes() {
    return (
        <Box pad="medium">
            <UserContext.Consumer>
                {({user}) => (
                    <Switch>
                        {user && user.type === 'staff' && <Route exact path="/jobs/create" component={CreateJobPage} />}

                        <Route exact path="/" component={Dashboard} />
                        <Route exact path="/jobs" component={JobSearchContainer} />
                        <Route exact path="/jobs/:id" component={JobPageContainer} />
                        <Route exact path="/login" component={LoginPage} />
                        <Route exact path="/signup" component={SignupPage} />
                    </Switch>
                )}
            </UserContext.Consumer>
        </Box>
    );
}

export default Routes;
