import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ModularApp1 from './ModularApp1';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ModularApp1 />, document.getElementById('root'));
registerServiceWorker();
