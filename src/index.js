import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import UserGameApp from './user-game-data/UserGameApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<UserGameApp />, document.getElementById('root'));
registerServiceWorker();
