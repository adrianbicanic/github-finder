import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import {action, observable, runInAction, toJS} from 'mobx';
import {observer} from 'mobx-react';

import {Header, PreviewCardGrid, SearchBar, UserInfo, UserRepos} from '../../components';

import {userService} from '../../services';
import {dataCollection} from '../../state';
import {previewTitle, models} from '../../constants';

import './UserProfile.css';

@observer
class UserProfile extends Component {
  componentWillMount() {
    if (!dataCollection.userProfile) {
      browserHistory.push('/');
    }
  }

  render() {
    return (
      <div className="main">
        <div className="header">
          <Header
            leftIcon="navigate_before"
            onBackButtonClick={this.onBackButtonClickHandler}
          />
        </div>
        <div className="content">
          <UserInfo user={dataCollection.userProfile} />
          <UserRepos repos={dataCollection.userRepositories} />
        </div>
      </div>
    );
  }
}

export default UserProfile;
