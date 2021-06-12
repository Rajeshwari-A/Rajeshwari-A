import axios from 'axios';
import Config from '../Components/config';

const { apiGateway } = Config;

const Api = () => {
    const defaultOptions = {
        baseURL: apiGateway.URL,
        headers: {
          'Content-Type': 'application/json',
        },
        timeout: 60 * 1000,
      };
      let instance = axios.create(defaultOptions);
      instance.interceptors.request.use(function (config) {
        // config.headers.Authorization = token ? token.AccessToken : '';
        // config.headers['X-Api-Key'] = 'S8LKRkhXTK34q8fDL3RClKaIr0S5Kxj81zag94l0';
        return config;
      });
}

export default Api;