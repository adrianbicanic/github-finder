import React from 'react';
import PropTypes from 'prop-types';

import {default as Card} from 'react-toolbox/lib/card/Card';
import {default as CardMedia} from 'react-toolbox/lib/card/CardMedia';
import {default as Link} from 'react-toolbox/lib/link/Link';

import {dataCollection} from '../../state';
import {formatInfo} from '../../utils';

import './UserInfo.css';

const UserInfo = (props) => {
  const user = props.user || {};

  return (
    <div className="main">
      <div className="grid">
        <div className="user-info-avatar">
          <Card className="user-info-image">
            <CardMedia
              aspectRatio="square"
              image={user.avatarUrl}
            />
          </Card>
        </div>
        <div className="user-info-fields">
          <h3 className="user-info-bio">{user.name || user.username}</h3>
          {
            user.bio
              ? <h5 className="user-info-bio-small">{user.bio}</h5>
              : null
          }
          {
            user.company
              ? (<p className="user-info-bio-small">
                <i className="material-icons">work</i> {user.company}
              </p>)
              : null
          }
          <p className="user-info-bio-small">
            <i className="material-icons">people</i> {formatInfo(user.followers)} Followers
          </p>
          <div className="user-info-bio-small">
            <Link
              className="user-info-bio-link"
              active
              target="_blank"
              href={user.gitHubUrl}
              label="Visit on GitHub"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
