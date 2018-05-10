import React from 'react';

import {Switch, Route} from 'react-router-dom';
import Box from 'grommet/components/Box';

import Dashboard from 'dashboard/Dashboard';
import LoginPage from 'guest/login/LoginPage';
import SignupPage from 'guest/signup/SignupPage';
import JobSearchContainer from 'jobSearch/JobSearchContainer';
import JobPageContainer from 'jobPage/JobPageContainer';

import CreateJobPage from 'createJob/CreateJobPage';

import ProfilePage from 'profile/ProfilePage';
import EducationContainer from 'profile/education/EducationContainer';

import {UserContext} from 'providers';

function Routes() {
    return (
        <Box pad="medium">
            <UserContext.Consumer>
                {({user}) => (
                    <Switch>
                        {user &&
                            user.type === 'staff' && (
                                <Route path="/jobs/create" exact component={CreateJobPage} />
                            )}

                        <Route path="/" exact component={Dashboard} />
                        <Route path="/jobs" exact component={JobSearchContainer} />
                        <Route path="/jobs/:id" component={JobPageContainer} />
                        <Route path="/login" component={LoginPage} />
                        <Route path="/signup" component={SignupPage} />

                        <Route path="/profile" exact component={ProfilePage} />
                        <Route
                            path="/profile/education"
                            exact
                            render={routeProps => (
                                <EducationContainer {...routeProps} user={user} />
                            )}
                        />
                    </Switch>
                )}
            </UserContext.Consumer>
        </Box>
    );
}

export default Routes;
