import React from 'react';
import PropTypes from 'prop-types';

import {default as Card} from 'react-toolbox/lib/card/Card';
import {default as CardTitle} from 'react-toolbox/lib/card/CardTitle';
import {default as CardText} from 'react-toolbox/lib/card/CardText';

import {formatInfo} from '../../utils';

import './UserRepos.css';

const UserRepos = (props) => {
  const repos = props.repos || [];

  return (
    <div className="main">
      <h3 className="title">GitHub Repositories ({repos.length})</h3>
      <div className="grid">
        {
          repos
            ? repos.map((repo) => (
              <div
                key={repo.id}
                className="user-repos-item"
              >
                <Card>
                  <CardTitle
                    title={repo.name}
                    subtitle={repo.description}
                    className="user-repos-card-title"
                  />
                  <div className="user-repos-card-info">
                    <CardText className="user-repos-card-info-item">
                      <i className="material-icons">star</i> {`${formatInfo(repo.stars)} Stars`}
                    </CardText>
                    <CardText className="user-repos-card-info-item">
                      <i className="material-icons">visibility</i> {`${formatInfo(repo.watchers)} Watchers`}
                    </CardText>
                    <CardText className="user-repos-card-info-item">
                      <i className="material-icons">call_split</i> {`${formatInfo(repo.forks)} Forks`}
                    </CardText>
                  </div>
                </Card>
              </div>
            ))
            : null
        }
      </div>
    </div>
  );
};

export default UserRepos;
