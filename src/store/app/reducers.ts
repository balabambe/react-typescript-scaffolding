import { IAppState, TypeActions } from './types';

const initialState: IAppState = {
  isLoading: false,
  defaultPageSize: 100,
  defaultPageSizes: [5, 10, 15, 20, 50, 100],
};

export default (state = initialState, action: TypeActions): IAppState => {
  switch (action.type) {
    case 'APP_LOADING_START':
    case 'APP_LOADING_END':
      return {
        ...state,
        isLoading: action.isLoading,
      };
    default:
      return state;
  }
};
