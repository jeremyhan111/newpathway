import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css';
import registerServiceWorker from './registerServiceWorker';

import configureStore from './store/configureStore';
import AppRouter from './router/AppRouter';
import './styles/styles.css';

const store = configureStore();

ReactDOM.render(<Provider store={store}><AppRouter/></Provider>, document.getElementById('root'));
	registerServiceWorker();