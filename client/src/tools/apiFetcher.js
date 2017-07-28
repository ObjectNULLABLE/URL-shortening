import axios from 'axios';
import apiConstants from '../constants/api-constants';

class ApiFetcher {
  constructor() {
    this.options = {
      baseURL: apiConstants.hostUrl,
      headers: {
        'Content-Type': 'application/json'
      }
    };

    let instance = axios.create(this.options);

    return instance;
  }

  authenticate(token) {
    //this function will get token from local storage, set it to http header in axios options
    //and return the instance of axios, like in constructor above
    if (!token) throw Error('not authorized');
    const options = { ...this.options };
    options.headers.authenticate = 'JWT ' + token;

    let instance = axios.create(options);
    return instance;
  }
}

export default new ApiFetcher();
