import {Model} from 'mobx-collection-store';

import models from '../constants/models';

class UserRepository extends Model {
  static type = models.USER_REPOSITORY;
}

UserRepository.defaults = {
  bio: null,
  description: null,
  forks: null,
  gitHubUrl: null,
  name: null,
  stars: null,
  watchers: null
};

export default UserRepository;
