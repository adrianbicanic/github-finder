import {UserPreview} from './';

import models from '../constants/models';

class DefaultUserPreview extends UserPreview {
  static type = models.DEFAULT_USER_PREVIEW;
}

export default DefaultUserPreview;
