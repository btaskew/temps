import React from 'react';
import PropTypes from 'prop-types';

import Box from 'grommet/components/Box';
import ReactPaginate from 'react-paginate';

function Paginator(props) {
    return (
        <Box justify="center" direction="row" margin={{top: 'medium'}}>
            <ReactPaginate
                pageCount={props.pageCount}
                pageRangeDisplayed={4}
                marginPagesDisplayed={2}
                containerClassName={'pagination'}
                activeClassName={'active'}
                onPageChange={props.handlePageChange}
                forcePage={props.currentPage}
            />
        </Box>
    );
}

Paginator.propTypes = {
    pageCount: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    handlePageChange: PropTypes.func.isRequired
};

export default Paginator;
