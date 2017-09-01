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

  async getUserProfile(username) {
    const requestUrl = `https://api.github.com/users/${username}`;

    const response = await gitHubApi.find(requestUrl);

    if (response && response.hasOwnProperty('id')) {
      dataCollection.remove(models.USER_PROFILE);
      

      const user = Object.assign({}, {
        avatarUrl: response.avatar_url,
        bio: response.bio,
        company: response.company,
        followers: response.followers,
        gitHubUrl: response.html_url,
        name: response.name,
        publicRepos: response.public_repos,
        reposUrl: response.repos_url,
        username: response.login
      });

      dataCollection.add(user, models.USER_PROFILE);
    }

    return response;
  }

  async getUserRepos(username) {
    const requestUrl = `https://api.github.com/users/${username}/repos`;

    const response = await gitHubApi.find(requestUrl);
    
    if (response && response.hasOwnProperty('items')) {
      const repositories = response.items.slice().map((item) => {
        const repository = {
          bio: item,
          description: item.description,
          forks: item.forks_count,
          gitHubUrl: item.html_url,
          name: item.name,
          stars: item.stargazers_count,
          watchers: item.watchers_count
        };

        return repository;
      });

      dataCollection.add(repositories, models.USER_REPOSITORY);
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
