import * as fetch from 'isomorphic-fetch';

class GitHubApi {
  static baseUrl = 'https://api.github.com'
  
  static defaultRequestHeaders = {

  }

  search(requestBody, url) {
    
  }

  read(requestBody, url) {
    const method = 'GET';

    const requestInit = {
      defaultRequestHeaders,
      method,
    };

    return fetch(url, requestInit)
    .then((response) => {
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