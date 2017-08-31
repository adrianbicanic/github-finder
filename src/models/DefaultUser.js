import {Model} from 'mobx-collection-store';

import models from 'constants/models';

class DefaultUser extends Model {
  static type = models.DEFAULT_USER;
}

DefaultUser.defaults = {
  avatarUrl: null,
  bio: null,
  company: null,
  email: null,
  followers: null,
  htmlUrl: null,
  name: null,
  organizationsUrl: null,
  publicGists: null,
  publicRepos: null,
  reposUrl: null,
  username: null,
}

export default DefaultUser;
