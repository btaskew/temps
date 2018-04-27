import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import '../node_modules/grommet-css';

import {BrowserRouter} from 'react-router-dom';
import Temps from './Temps';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <BrowserRouter>
        <Temps />
    </BrowserRouter>,
    document.getElementById('root')
);
registerServiceWorker();
