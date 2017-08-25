import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import theme from './toolbox/theme';

import Home from './containers/Home/Home';
import registerServiceWorker from './registerServiceWorker';

import './toolbox/theme.css';
import './index.css';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Route path="/" component={Home} />
    </BrowserRouter>
  </ThemeProvider>, document.getElementById('root'));
registerServiceWorker();
