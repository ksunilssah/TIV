import './styles.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import App from './app';
import birdStore from './store';

const Root = (
  <Provider birdStore={birdStore}>
    <App />
  </Provider>
);

ReactDOM.render(Root, document.getElementById('root'));
