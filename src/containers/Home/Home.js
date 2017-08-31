import React, {Component} from 'react';

import Header from '../../components/Header/Header';
import SearchBar from '../../components/SearchBar/SearchBar';

import './Home.css';

class Home extends Component {
  componentState = {
    title: 'Test',
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
