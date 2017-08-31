import {computed} from 'mobx';
import {Collection} from 'mobx-collection-store';

import models from '../constants/models';

import {DefaultUserPreview, UserPreview} from '../models';

class DataCollection extends Collection {
  @computed get defaultUserPreviews() {
    return this.findAll(models.DEFAULT_USER_PREVIEW);
  }
}

DataCollection.types = [DefaultUserPreview, UserPreview];

export default DataCollection;
