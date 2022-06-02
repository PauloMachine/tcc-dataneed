import axios from 'axios';
import { getToken, logout } from './auth';

// const api = axios.create({ baseURL: 'http://10.0.2.2:3333/' });
const api = axios.create({ baseURL: 'http://192.168.3.23:3333/' });

api.interceptors.request.use(
  async config => {
    const token = await getToken();
    if (token) config.headers.Authorization = `Bearer ${token}`
    return config;
  },
  error => { return Promise.reject(error) }
);

api.interceptors.response.use(
  response => { return response },
  error => {
    if (error.response.status === 400) console.log('INVALID CREDENTIALS')
    if (error.response.status === 401) { 
      logout();
      navigation.navigate('Login');
    }
    return Promise.reject(error);
  }
);

export default api;
