import React from 'react';
import {Route} from 'react-router-dom';

import CreateJobPage from 'createJob/CreateJobPage';

function StaffRoutes() {
    return (
        <React.Fragment>
            <Route exact path="/jobs/create" component={CreateJobPage} />
        </React.Fragment>
    );
}

export default StaffRoutes;