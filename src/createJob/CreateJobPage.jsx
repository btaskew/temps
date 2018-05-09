import React from 'react';

import {UserContext} from 'providers';
import CreateJobContainer from './CreateJobContainer';

function CreateJobPage() {
    return <UserContext>{({user}) => <CreateJobContainer user={user} />}</UserContext>;
}

export default CreateJobPage;
