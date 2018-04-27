import React from 'react';
import './dashboard.css';

import Section from 'grommet/components/Section';
import Stats from './Stats';

function Dashboard() {
    return (
        <React.Fragment>
            <Section id="dashboard-text">
                <h1>Welcome to Temps</h1>
                A simple to use job site where you can easily apply to a wide variety of temporary
                jobs.
            </Section>
            <Stats />
        </React.Fragment>
    );
}

export default Dashboard;
