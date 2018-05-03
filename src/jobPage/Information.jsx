import React from 'react';
import PropTypes from 'prop-types';

import Box from 'grommet/components/Box';

function Information({job}) {
    return (
        <Box className="job-information">
            <h3>Information</h3>
            <span>
                <b>Duration: </b>
                {Number(job.duration)} days
            </span>
            <span>
                <b>Hourly rate: </b>£{job.rate}
            </span>
            <span>
                <b>Open vacancies: </b>
                {job.open_vacancies}
            </span>
            <span>
                <b>Closing date: </b>
                {job.closing_date}
            </span>
        </Box>
    );
}

Information.propTypes = {
    job: PropTypes.object.isRequired
};

export default Information;
