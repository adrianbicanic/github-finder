import React, {Component} from 'react';
import {action, observable, runInAction} from 'mobx';
import {observer} from 'mobx-react';

import Header from '../../components/Header/Header';
import SearchBar from '../../components/SearchBar/SearchBar';

import {userService} from '../../services';
import {dataCollection} from '../../state';

import './Home.css';

@observer
class Home extends Component {
  componentDidMount() {
    // userService.getDefaultPreviews();
  }

  render() {
    return (
      <div className="main">
        <div className="header">
          <Header />
        </div>
        <div className="content">
          <SearchBar />

        </div>
      </div>
    );
  }
}

export default Home;
