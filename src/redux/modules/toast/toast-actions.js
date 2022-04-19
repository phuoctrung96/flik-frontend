export const TOAST_DISPLAY_SHOW_SUCCESS = 'TOAST_DISPLAY_SHOW';
export const TOAST_DISPLAY_SHOW_FAILED = 'TOAST_DISPLAY_SHOW';
export const TOAST_DISPLAY_FAILED = 'TOAST_DISPLAY_FAILED';
export const TOAST_DISPLAY_SUCCESS = 'TOAST_DISPLAY_SUCCESS';
export const TOAST_RESET = 'TOAST_RESET';

export const defaultState = {
  toast: {},
};

export const toastAction = (type, payload) => {
  return {
    type: type,
    payload: { ...payload },
  };
};
