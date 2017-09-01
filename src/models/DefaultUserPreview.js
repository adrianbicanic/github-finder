import {default as UserPreview} from './UserPreview';

import models from '../constants/models';

class DefaultUserPreview extends UserPreview {
  static type = models.DEFAULT_USER_PREVIEW;
}

export default DefaultUserPreview;
