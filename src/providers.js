import React from 'react';

const FormContext = React.createContext({
    values: {},
    updateField: () => {},
    submitForm: () => {}
});
const UserContext = React.createContext();

export {
    FormContext,
    UserContext
};