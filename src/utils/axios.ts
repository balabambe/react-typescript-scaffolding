import axios, { AxiosError, AxiosPromise, AxiosRequestConfig, AxiosResponse } from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 30000,
  withCredentials: false,
});

const apiRequest = (opts = {}, headers = {}): AxiosPromise =>
  axiosInstance.request({
    headers: {
      'Content-Type': 'application/json',
      bearer: 'token',
      ...headers,
    },
    ...opts,
  });

axiosInstance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    if (config.method === 'get' && config.data !== undefined) {
      // eslint-disable-next-line no-param-reassign
      config.params = config.data;
    }
    return config;
  },
  (error: AxiosError) => {
    throw error;
  }
);

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response.data,
  (error: AxiosError) => {
    const { code } = error;
    if (code === '400401' && window.location.pathname !== '/login') {
      // Can be done with redirect page or clean credentials.
    }
    throw error;
  }
);

export default apiRequest;
