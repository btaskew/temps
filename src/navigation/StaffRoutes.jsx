import React from 'react';
import {Route} from 'react-router-dom';

import CreateJobContainer from 'createJob/CreateJobContainer';

function StaffRoutes() {
    return (
        <React.Fragment>
            <Route exact path="/jobs/create" component={CreateJobContainer} />
        </React.Fragment>
    );
}

export default StaffRoutes;