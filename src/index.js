import React from 'react';
import ReactDOM from 'react-dom';
import {browserHistory, IndexRoute, Route, Router} from 'react-router';
import {useStrict} from 'mobx';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import theme from './toolbox/theme';

import Home from './containers/Home/Home';
import UserProfile from './containers/UserProfile/UserProfile';
import registerServiceWorker from './registerServiceWorker';

import {userService} from './services';

import './toolbox/theme.css';
import './index.css';

useStrict(true);

userService.getDefaultPreviews();

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Router history={browserHistory}>
      <Route path="/">
        <IndexRoute component={Home} />
        <Route path="profile/:username" component={UserProfile} />
      </Route>
    </Router>
  </ThemeProvider>, document.getElementById('root'));
registerServiceWorker();
