import {gitHubApi} from '../';
import {dataCollection} from '../../state';

import models from '../../constants/models';

class UserService {
  async getDefaultPreviews() {
    const requestUrl = 'https://api.github.com/search/users?q=followers:>1000';

    const response = await gitHubApi.find(requestUrl);

    if (response && response.hasOwnProperty('items')) {
      const defaultUserPreviews = response.items.slice(0, 16).map((item) => {
        const defaultUserPreview = {
          avatarUrl: item.avatar_url,
          url: item.url,
          username: item.login
        };

        return defaultUserPreview;
      });

      dataCollection.add(defaultUserPreviews, models.DEFAULT_USER_PREVIEW);
    }

    return response;
  }

  async findUsers(nameQuery) {
    const requestUrl = `https://api.github.com/search/users?q=${nameQuery}`;

    const response = await gitHubApi.find(requestUrl);

    if (response && response.hasOwnProperty('items')) {
      const defaultUserPreviews = response.items.slice(0, 16).map((item) => {
        const defaultUserPreview = {
          avatarUrl: item.avatar_url,
          url: item.url,
          username: item.login
        };

        return defaultUserPreview;
      });

      dataCollection.add(defaultUserPreviews, models.DEFAULT_USER_PREVIEW);
    }

    return response;
  }
}

export default UserService;
