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
}

export default new ApiFetcher();
