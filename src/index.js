import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import {useStrict} from 'mobx';
import {Store} from 'mobx-jsonapi-store';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import theme from './toolbox/theme';

import Home from './containers/Home/Home';
import registerServiceWorker from './registerServiceWorker';

import './toolbox/theme.css';
import './index.css';

useStrict(true);

const store = new Store();

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Route path="/" component={Home} />
    </BrowserRouter>
  </ThemeProvider>, document.getElementById('root'));
registerServiceWorker();
