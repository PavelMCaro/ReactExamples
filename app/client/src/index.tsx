import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from '@app/src/store/configureStore';
import { App } from './view';
import { injectGlobal } from 'styled-components';

injectGlobal`
  body {
    margin: 0;
  }
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }
`

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);