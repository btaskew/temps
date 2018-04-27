import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Box from 'grommet/components/Box';

import Dashboard from './../dashboard/Dashboard';

function Routes() {
    return (
        <Box pad="small">
            <Switch>
                <Route exact path="/" component={Dashboard} />
            </Switch>
        </Box>
    );
}

export default Routes;
