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
    instance.authenticate = this.authenticate.bind(this);
    instance.recordCreds = this.recordCreds.bind(this);

    return instance;
  }

  recordCreds(creds){
    localStorage.setItem('myToken', creds.token);
      localStorage.setItem('username', creds.username);
      localStorage.setItem('userID', creds.userID);
  }

  authenticate() {
    //this function will get token from local storage, set it to http header in axios options
    //and return the instance of axios, like in constructor above
    const token = localStorage.getItem('myToken');
    if (!token) throw Error('not authorized');
    const options = { ...this.options };
    options.headers.Authorization = 'JWT ' + token;

    let instance = axios.create(options);
    return instance;
  }
}

export default new ApiFetcher();
