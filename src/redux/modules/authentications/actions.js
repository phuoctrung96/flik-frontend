export const REQUEST_SEND_OTP_REQUEST = 'REQUEST_SEND_OTP_REQUEST';
export const REQUEST_SEND_OTP_SUCCESS = 'REQUEST_SEND_OTP_SUCCESS';
export const REQUEST_SEND_OTP_FAILED = 'REQUEST_SEND_OTP_FAILED';
export const REQUEST_SEND_OTP_RESET = 'REQUEST_SEND_OTP_RESET';

export const REQUEST_SUBMIT_OTP = 'REQUEST_SUBMIT_OTP';
export const REQUEST_SUBMIT_OTP_SUCCESS = 'REQUEST_SUBMIT_OTP_SUCCESS';
export const REQUEST_SUBMIT_OTP_FAILED = 'REQUEST_SUBMIT_OTP_FAILED';
export const REQUEST_SUBMIT_OTP_RESET = 'REQUEST_SUBMIT_OTP_RESET';

export const GET_DATA_USER = 'GET_DATA_USER';
export const GET_DATA_USER_SUCCESS = 'GET_DATA_USER_SUCCESS';
export const GET_DATA_USER_FAILED = 'GET_DATA_USER_FAILED';
export const GET_DATA_USER_RESET = 'GET_DATA_USER_RESET';

export const UPDATE_DATA_USER = 'UPDATE_DATA_USER';
export const UPDATE_DATA_USER_SUCCESS = 'UPDATE_DATA_USER_SUCCESS';
export const UPDATE_DATA_USER_FAILED = 'UPDATE_DATA_USER_FAILED';
export const UPDATE_DATA_USER_RESET = 'UPDATE_DATA_USER_RESET';

export const UPDATE_DATA_USER_ADDRESS = 'UPDATE_DATA_USER_ADDRESS';
export const UPDATE_DATA_USER_ADDRESS_SUCCESS = 'UPDATE_DATA_USER_ADDRESS_SUCCESS';
export const UPDATE_DATA_USER_ADDRESS_FAILED = 'UPDATE_DATA_USER_ADDRESS_FAILED';
export const UPDATE_DATA_USER_ADDRESS_RESET = 'UPDATE_DATA_USER__ADDRESS_RESET';

export const VERIFY_TOKEN = 'VERIFY_TOKEN';
export const VERIFY_TOKEN_SUCCESS = 'VERIFY_TOKEN_SUCCESS';
export const VERIFY_TOKEN_FAILED = 'VERIFY_TOKEN_FAILED';
export const VERIFY_TOKEN_RESET = 'VERIFY_TOKEN_RESET';

export const userState = {
  users: [],
  sendOtp: {
    loading: false,
  },
  submitOTP: {
    loading: false,
  },
  userData: {
    loading: false,
    data: {},
  },
  verify: {
    loading: false,
    isVerify: false,
  },
  addressUser: {
    loading: false,
  },
  loading: true,
  message: '',
};

export const authenticationCreator = (type, payload) => {
  return {
    type: type,
    payload: { ...payload },
  };
};
export const submitOTPCreator = (type, payload) => {
  return {
    type: type,
    payload: { ...payload },
  };
};

export const userAction = (type, payload) => {
  return {
    type: type,
    payload: { ...payload },
  };
};
