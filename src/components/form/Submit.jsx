import React from 'react';
import PropTypes from 'prop-types';
import {pure} from 'recompose';

import Footer from 'grommet/components/Footer';
import Button from 'grommet/components/Button';

function Submit(props) {
    return (
        <Footer pad={{vertical: 'medium'}}>
            <Button label={props.buttonText} onClick={props.onSubmit} primary={true} fill />
        </Footer>
    );
}

Submit.propTypes = {
    buttonText: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired
};

export default pure(Submit);
