import React, {Component} from 'react';
import {action, observable, runInAction} from 'mobx';
import {observer} from 'mobx-react';

import {Header, PreviewCardGrid, SearchBar} from '../../components';

import {userService} from '../../services';
import {dataCollection} from '../../state';
import {previewTitle} from '../../constants';

import './Home.css';

@observer
class UserProfile extends Component {
  constructor(props) {
    super(props);
  }

  @observable componentState = {

  };


  render() {
    return (
      <div className="main">
        <div className="header">
          <Header />
        </div>
        <div className="content">
        </div>
      </div>
    );
  }
}

export default UserProfile;
