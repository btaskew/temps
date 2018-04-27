import React, {PureComponent} from 'react';

import Columns from 'grommet/components/Columns';
import StatCount from './StatCount';

import Dashboard from './../scripts/Dashboard';

class Stats extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            stats: null
        };
    }

    async componentDidMount() {
        const stats = await Dashboard.getStats();

        this.setState({stats: stats});
    }

    render() {
        if (!this.state.stats) {
            return null;
        }

        return (
            <Columns justify="center" responsive={false}>
                <StatCount count={this.state.stats.jobs_count} type="Open jobs" />
                <StatCount count={this.state.stats.approved_count} type="Applications approved" />
                <StatCount count={this.state.stats.workers_count} type="Active workers" />
            </Columns>
        );
    }
}

export default Stats;