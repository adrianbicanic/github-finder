import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import {action, observable, runInAction} from 'mobx';
import {observer} from 'mobx-react';

import {Header, PreviewCardGrid, SearchBar} from '../../components';

import {userService} from '../../services';
import {dataCollection} from '../../state';
import {previewTitle} from '../../constants';

import './Home.css';

@observer
class Home extends Component {
  constructor(props) {
    super(props);
    this.onKeyUpHandler = this.onKeyUpHandler.bind(this);
    this.onCardClickHandler = this.onCardClickHandler.bind(this);

    this.searchTimeoutId = null;
  }

  @observable componentState = {
    previewTitle: previewTitle.DEFAULT,
    searchQuery: null
  };

  @action async onKeyUpHandler(e) {
    if (e.key === 'Enter') {
      if (e.target.value) {
        runInAction(() => {
          this.componentState.searchQuery = e.target.value;
        });
        

        const searchResult = await userService.findUsers(this.componentState.searchQuery);

        console.log('searchResult', searchResult)

        if (searchResult && searchResult.hasOwnProperty('error')) {
          runInAction(() => {
            this.componentState.previewTitle = 'ERROR';
          });

          return;
        }

        runInAction(() => {
          this.componentState.previewTitle = dataCollection.userPreviews
            ? previewTitle.SEARCH_RESULT_TRUE
            : previewTitle.SEARCH_RESULT_FALSE;
        });
        

        return;
      }
      
      runInAction(() => {
        this.componentState.searchQuery = null;
      });
    }
  }

  @action async onCardClickHandler(username) {
    console.log('---in card click handler---')
    const user = await userService.getUserProfile(username);
    console.log('user', user)

    const userRepos = user && user.id
      ? await userService.getUserRepos(user.username)
      : null;

    console.log('userRepos', userRepos)

    if (userRepos && !userRepos.error) {
      browserHistory.push(`profile/${username}`);
      return;
    }
    
    browserHistory.push('/');
    
  }

  render() {
    const users = this.componentState.searchQuery
      ? dataCollection.userPreviews
      : dataCollection.defaultUserPreviews;

    return (
      <div className="main">
        <div className="header">
          <Header />
        </div>
        <div className="content">
          <SearchBar onKeyUp={this.onKeyUpHandler} />
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
