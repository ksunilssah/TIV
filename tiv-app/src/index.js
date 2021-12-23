import './styles/custom.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import App from './app';
import store from './store';

const Root = (
	<Provider store={store}>
		<App />
	</Provider>
);

ReactDOM.render(Root, document.getElementById('root'));
