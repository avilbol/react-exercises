import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ChatApp from './chat-exercise/ChatApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ChatApp />, document.getElementById('root'));
registerServiceWorker();
