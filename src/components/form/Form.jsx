import React from 'react';
import PropTypes from 'prop-types';

import {default as GrommetForm} from 'grommet/components/Form';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
import Footer from 'grommet/components/Footer';
import Button from 'grommet/components/Button';

function Form(props) {
    return (
        <GrommetForm align="center">
            <Header>
                <Heading>{props.heading}</Heading>
            </Header>
            {props.children}
            <Footer pad={{vertical: 'medium'}}>
                <Button label={props.buttonText} onClick={props.handleSubmit} primary={true} fill />
            </Footer>
        </GrommetForm>
    );
}

Form.propTypes = {
    heading: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired
};

export default Form;
