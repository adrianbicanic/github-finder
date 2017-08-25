import React, {Component} from 'react';

import './Home.css';

class Home extends Component {
  componentState = {
    title: 'Test',
  }

  render() {
    return (
        <div className="main">
          {this.componentState.title}
        </div>
    );
  }
}

export default Home;