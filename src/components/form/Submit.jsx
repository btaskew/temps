import React from 'react';
import PropTypes from 'prop-types';
import {pure} from 'recompose';

import Footer from 'grommet/components/Footer';
import Button from 'grommet/components/Button';

import {FormContext} from 'providers';

function Submit(props) {
    return (
        <FormContext.Consumer>
            {form => (
                <Footer pad={{vertical: 'medium'}}>
                    <Button
                        label={props.buttonText}
                        onClick={form.submitForm}
                        primary={true}
                        fill
                    />
                </Footer>
            )}
        </FormContext.Consumer>
    );
}

Submit.propTypes = {
    buttonText: PropTypes.string.isRequired
};

export default pure(Submit);
