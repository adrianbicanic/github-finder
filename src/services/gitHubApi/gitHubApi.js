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

      // Send original error to the error handling function
      const apiErrorMessage = response
        .headers
        .get('x-api-message');

      return {error: decodeURIComponent(apiErrorMessage)};
    });
  }
}

export default GitHubApi;
