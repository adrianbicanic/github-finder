import {Model} from 'mobx-collection-store';

import models from '../constants/models';

class UserPreview extends Model {
  static type = models.USER;
}

UserPreview.defaults = {
  avatarUrl: null,
  url: null,
  username: null
};

export default UserPreview;
