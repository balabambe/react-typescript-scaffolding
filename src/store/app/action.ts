import { TypeActions } from './types';

export function actionAppLoadingStart(): TypeActions {
  return {
    type: 'APP_LOADING_START',
    isLoading: true,
  };
}

export function actionAppLoadingEnd(): TypeActions {
  return {
    type: 'APP_LOADING_END',
    isLoading: false,
  };
}
