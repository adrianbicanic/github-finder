import {UserPreview} from './';

import models from '../constants/models';

class DefaultUserPreview extends UserPreview {
  static type = models.USER;
}

export default DefaultUserPreview;
