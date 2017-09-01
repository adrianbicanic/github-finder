import {gitHubApi} from '../';
import {dataCollection} from '../../state';

import models from '../../constants/models';

class UserService {
  async getDefaultPreviews() {
    const requestUrl = 'https://api.github.com/search/users?q=followers:>1000';

    const response = await gitHubApi.find(requestUrl);

    if (response && response.hasOwnProperty('items')) {
      const defaultUsers = response.items.slice(0, 16).map((item) => {
        const defaultUser = {
          avatarUrl: item.avatar_url,
          url: item.url,
          username: item.login
        };

        return defaultUser;
      });

      dataCollection.add(defaultUsers, models.DEFAULT_USER_PREVIEW);
    }

    return response;
  }

  async findUsers(nameQuery) {
    const requestUrl = `https://api.github.com/search/users?q=${nameQuery}`;

    const response = await gitHubApi.find(requestUrl);

    if (response && response.hasOwnProperty('items')) {
      dataCollection.remove('userPreview');

      console.log('isRemoved', dataCollection.userPreviews);
      console.log('how many is defaulr', dataCollection.defaultUserPreviews);
      

      const users = response.items.slice(0, 40).map((item) => {
        const user = {
          avatarUrl: item.avatar_url,
          url: item.url,
          username: item.login
        };

        return user;
      });

      dataCollection.add(users, models.USER_PREVIEW);
    }

    return response;
  }
}

export default UserService;
