import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import {action, observable, runInAction} from 'mobx';
import {observer} from 'mobx-react';

import {Header, PreviewCardGrid, SearchBar} from '../../components';

import {userService} from '../../services';
import {dataCollection} from '../../state';
import {previewTitle} from '../../constants';

import './UserProfile.css';

@observer
class UserProfile extends Component {
  componentWillMount() {

    this.onBackButtonClickHandler = this.onBackButtonClickHandler.bind(this);
  }

  onBackButtonClickHandler() {
    browserHistory.push('/');
  }

  render() {
    const user = dataCollection.userProfile.pop();

    console.log(user);

    return (
      <div className="main">
        <div className="header">
          <Header
            onBackButtonClick={this.onBackButtonClickHandler}
          />
        </div>
        <div className="content">
        </div>
      </div>
    );
  }
}

export default UserProfile;
