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
import ExperienceContainer from 'profile/experience/ExperienceContainer';

import {UserContext} from 'providers';
import PrivateRoute from './PrivateRoute';

function Routes() {
    return (
        <Box pad="medium">
            <UserContext.Consumer>
                {({user}) => (
                    <Switch>
                        <PrivateRoute
                            path="/jobs/create"
                            userType="staff"
                            component={CreateJobPage}
                            exact
                        />

                        <PrivateRoute
                            path="/profile"
                            userType="worker"
                            user={user}
                            component={ProfilePage}
                            exact
                        />
                        <PrivateRoute
                            path="/profile/education"
                            userType="worker"
                            user={user}
                            render={routeProps => (
                                <EducationContainer {...routeProps} token={user.token} />
                            )}
                        />
                        <PrivateRoute
                            path="/profile/experience"
                            userType="worker"
                            user={user}
                            render={routeProps => (
                                <ExperienceContainer {...routeProps} token={user.token} />
                            )}
                        />

                        <Route path="/" exact component={Dashboard} />
                        <Route path="/jobs" exact component={JobSearchContainer} />
                        <Route path="/jobs/:id" component={JobPageContainer} />
                        <Route path="/login" component={LoginPage} />
                        <Route path="/signup" component={SignupPage} />
                    </Switch>
                )}
            </UserContext.Consumer>
        </Box>
    );
}

export default Routes;
