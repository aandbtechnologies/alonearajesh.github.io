import ReactDOM from 'react-dom';
import React from 'react';
import * as serviceWorker from './serviceWorker';
import './style.scss';
import App from './app'


ReactDOM.render(<div className="person-app"><App /></div>, document.getElementById('root'));
serviceWorker.unregister();