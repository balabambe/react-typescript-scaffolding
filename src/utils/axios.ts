import { actions as appActions } from '@store/app';
import axios, {
  AxiosError,
  AxiosPromise,
  AxiosRequestConfig,
  AxiosResponse,
  Method,
} from 'axios';
import { ThunkDispatch } from 'redux-thunk';

interface IApiRequest {
  opts: AxiosRequestConfig;
  headers?: any;
  dispatch: ThunkDispatch<any, any, any>;
  loading?: boolean,
  [key: string]: any,
}

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 30000,
  withCredentials: false,
});

const touchAxios = (opts = {}, headers = {}): AxiosPromise =>
  axiosInstance.request({
    headers: {
      'Content-Type': 'application/json',
      bearer: 'token',
      ...headers,
    },
    ...opts,
  });

const apiRequest = ({
  opts = {},
  headers = {},
  dispatch,
  ...rest
}: IApiRequest): AxiosPromise => {
  const { loading = true } = rest;
  if (loading) {
    dispatch(appActions.actionAppLoadingStart());
  }
  return touchAxios(opts, headers).finally(() => {
    if (loading) {
      dispatch(appActions.actionAppLoadingEnd());
    }
  });
};

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

export type { Method };
export default apiRequest;
