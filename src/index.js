import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BasicRoutingApp from './basic-routing/BasicRoutingApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<BasicRoutingApp />, document.getElementById('root'));
registerServiceWorker();
