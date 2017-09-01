import * as fetch from 'isomorphic-fetch';

class GitHubApi {
  find(url) {
    const method = 'GET';

    const headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    };

    const requestInit = {
      headers,
      method
    };

    return fetch(url, requestInit).then((response) => {
      if (response.ok) {
        return response.json();
      }

      return {errorCode: response.status};
    });
  }
}

export default GitHubApi;
