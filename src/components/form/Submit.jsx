import React from 'react';
import PropTypes from 'prop-types';
import {pure} from 'recompose';

import Footer from 'grommet/components/Footer';
import Button from 'grommet/components/Button';

import {FormContext} from 'providers';

function Submit(props) {
    return (
        <Footer pad={{vertical: 'medium'}}>
            <FormContext.Consumer>
                {form => (
                    <Button
                        label={props.buttonText}
                        onClick={form.submitForm}
                        primary={true}
                        fill
                    />
                )}
            </FormContext.Consumer>
        </Footer>
    );
}

Submit.propTypes = {
    buttonText: PropTypes.string.isRequired
};

export default pure(Submit);
