import React from 'react';

import {Link} from 'react-router-dom';

function StaffLinks() {
    return (
        <React.Fragment>
            <Link to="/jobs/create">Create job</Link>
        </React.Fragment>
    );
}

export default StaffLinks;
