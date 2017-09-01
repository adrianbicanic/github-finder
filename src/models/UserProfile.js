import {Model} from 'mobx-collection-store';

import models from '../constants/models';

class UserProfile extends Model {
  static type = models.USER_PROFILE;
}

UserProfile.defaults = {
  avatarUrl: null,
  bio: null,
  company: null,
  followers: null,
  gitHubUrl: null,
  name: null,
  publicRepos: null,
  reposUrl: null,
  username: null
};

export default UserProfile;
