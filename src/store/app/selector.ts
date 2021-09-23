import { IAppDefaultPageSize, IAppStore } from './types';

export const getLoadingStatus = (state: IAppStore): boolean => state.app.isLoading;

export const getDefaultPageSizes = (state: IAppStore): IAppDefaultPageSize => {
  const { defaultPageSize, defaultPageSizes } = state.app;
  return { defaultPageSize, defaultPageSizes };
};
