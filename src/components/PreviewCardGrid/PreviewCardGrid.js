import React from 'react';
import PropTypes from 'prop-types';

import {default as Card} from 'react-toolbox/lib/card/Card';
import {default as CardActions} from 'react-toolbox/lib/card/CardActions';
import {default as CardMedia} from 'react-toolbox/lib/card/CardMedia';
import {default as CardTitle} from 'react-toolbox/lib/card/CardTitle';
import {default as Button} from 'react-toolbox/lib/button/Button';

import './PreviewCardGrid.css';

const PreviewCardGrid = (props) => {
  console.log('typeof users', props.users);
  const users = props.users.slice();

  return (
    <div className="main">
      <h3 className="title">{props.title}</h3>
      <div className="grid">
        {
          users
            ? users.map((user) => (
              <div
                key={user.id}
                className="item"
                onClick={() => props.onCardClick.call(null, user.username)}>
                <Card>
                  <CardMedia
                    aspectRatio="square"
                    image={user.avatarUrl}
                  />
                  <CardTitle
                    subtitle={`@${user.username}`}
                  />
                </Card>
              </div>
            ))
            : null
        }
      </div>
      
    </div>
  );
};

export default PreviewCardGrid;
