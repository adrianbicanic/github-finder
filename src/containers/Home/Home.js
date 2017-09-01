import React, {Component} from 'react';
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

    this.searchTimeoutId = null;
    this.componentState = {
      previewTitle: previewTitle.DEFAULT,
      searchQuery: null
    };
  }

  @observable componentState = {
    previewTitle: null,
    searchQuery: null
  };

  @action onKeyUpHandler(e) {
    if (e.key === 'Enter') {
      if (e.target.value) {
        const searchResult = userService.findUsers(this.componentState.searchQuery);

        this.componentState.searchQuery = e.target.value;

        console.log(searchResult)

        // if (searchResult.hasOwnPropery('error')) {
        //   this.componentState.previewTitle = 'ERROR';

        //   return;
        // }

        this.componentState.previewTitle = dataCollection.userPreviews
          ? previewTitle.SEARCH_RESULT_TRUE
          : previewTitle.SEARCH_RESULT_FALSE;

        return;
      }
      
      this.componentState.searchQuery = null;
    }
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
          />
        </div>
      </div>
    );
  }
}

export default Home;
