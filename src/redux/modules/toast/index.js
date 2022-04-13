import * as _ from './toast-actions';

export const toastReducer = (state = _.defaultState, action) => {
  switch (action.type) {
    case _.TOAST_DISPLAY_SHOW_SUCCESS:
      return {
        ...state,
        toast: action.payload
      };
    case _.TOAST_DISPLAY_SHOW_FAILED:
      return {
        ...state,
        toast: action.payload
      };
    case _.TOAST_RESET:
      return {
        ...state,
        toast: {}
      };

    default:
      return state;
  }
};
