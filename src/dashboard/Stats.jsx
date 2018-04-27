import React, {Component} from 'react';

import Columns from 'grommet/components/Columns';

import StatCount from './StatCount';

class Stats extends Component {
    render() {
        return (
            <Columns justify="center">
                <StatCount count="7" type="Open jobs" />
                <StatCount count="8" type="Applications approved" />
                <StatCount count="10" type="Active workers" />
            </Columns>
        );
    }
}

export default Stats;