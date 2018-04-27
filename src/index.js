import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import '../node_modules/grommet-css';

import {BrowserRouter} from 'react-router-dom';
import Temps from './Temps';

ReactDOM.render(
    <BrowserRouter>
        <Temps />
    </BrowserRouter>,
    document.getElementById('root')
);
registerServiceWorker();
