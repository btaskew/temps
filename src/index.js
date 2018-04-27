import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import '../node_modules/grommet-css';

import Temps from './Temps';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Temps />, document.getElementById('root'));
registerServiceWorker();
