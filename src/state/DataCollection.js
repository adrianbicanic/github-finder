import {computed} from 'mobx';
import {Collection} from 'mobx-collection-store';

import models from '../constants/models';

import {DefaultUserPreview, UserProfile, UserPreview, UserRepository} from '../models';

class DataCollection extends Collection {
  @computed get defaultUserPreviews() {
    return this.findAll(models.DEFAULT_USER_PREVIEW);
  }

  @computed get userProfile() {
    return this.find(models.USER_PROFILE);
  }

  @computed get userPreviews() {
    return this.findAll(models.USER_PREVIEW);
  }

  @computed get userRepositories() {
    return this.findAll(models.USER_REPOSITORY);
  }
}

DataCollection.types = [DefaultUserPreview, UserProfile, UserPreview, UserRepository];

export default DataCollection;
