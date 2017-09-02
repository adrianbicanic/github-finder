import React from 'react';
import PropTypes from 'prop-types';

import {default as Card} from 'react-toolbox/lib/card/Card';
import {default as CardMedia} from 'react-toolbox/lib/card/CardMedia';
import {default as CardText} from 'react-toolbox/lib/card/CardText';

import './PreviewCardGrid.css';

const PreviewCardGrid = (props) => {
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
                  <CardText className="user-preview-card-text">
                    {`@${user.username}`}
                  </CardText>
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
