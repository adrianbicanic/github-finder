import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import {action, observable, runInAction} from 'mobx';
import {observer} from 'mobx-react';

import {Header, PreviewCardGrid, SearchBar} from '../../components';

import models from '../../constants/models';
import {userService} from '../../services';
import {dataCollection} from '../../state';
import {previewTitle} from '../../constants';

import './Home.css';

@observer
class Home extends Component {
  constructor(props) {
    super(props);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onKeyUpHandler = this.onKeyUpHandler.bind(this);
    this.onCardClickHandler = this.onCardClickHandler.bind(this);

    this.searchTimeoutId = null;
  }

  @observable componentState = {
    previewTitle: previewTitle.DEFAULT,
    searchQuery: ''
  };

  componentWillMount() {
    dataCollection.removeAll(models.USER_PREVIEW);
  }

  @action onChangeHandler(value) {
    this.componentState.searchQuery = value;
  }

  @action async onKeyUpHandler(e) {
    if (e.key === 'Enter') {
      if (e.target.value) {
        runInAction(() => {
          this.componentState.searchQuery = e.target.value;
        });

        const searchResult = await userService.findUsers(this.componentState.searchQuery);

        if (searchResult && searchResult.hasOwnProperty('error')) {
          runInAction(() => {
            this.componentState.previewTitle = 'ERROR';
          });

          return;
        }

        runInAction(() => {
          if (!dataCollection.userPreviews.length) {
            dataCollection.removeAll(models.USER_PREVIEW);
            this.componentState.previewTitle = previewTitle.SEARCH_RESULT_FALSE;
            
            return;
          }
          
          this.componentState.previewTitle = previewTitle.SEARCH_RESULT_TRUE;
        });
        

        return;
      }
      
      runInAction(() => {
        this.componentState.searchQuery = '';
        this.componentState.previewTitle = previewTitle.DEFAULT;

        dataCollection.removeAll(models.USER_PREVIEW);
      });
    }
  }

  @action async onCardClickHandler(username) {
    const user = await userService.getUserProfile(username);

    if (user && user.id) {
      const userRepos = await userService.getUserRepos(username);

      if (userRepos && !userRepos.error) {
        browserHistory.push(`profile/${username}`);
        return;
      }
    }

    browserHistory.push('/');
    
  }

  render() {
    const users = dataCollection.userPreviews.length
      ? dataCollection.userPreviews
      : dataCollection.defaultUserPreviews;

    return (
      <div className="main">
        <div className="header">
          <Header />
        </div>
        <div className="content">
          <SearchBar
            onChange={this.onChangeHandler}
            onKeyUp={this.onKeyUpHandler}
            value={this.componentState.searchQuery}
          />
          <PreviewCardGrid
            title={this.componentState.previewTitle}
            users={users}
            onCardClick={this.onCardClickHandler}
          />
        </div>
      </div>
    );
  }
}

export default Home;
