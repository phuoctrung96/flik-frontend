import * as _ from './actions';

export const userReducer = (state = _.userState, action) => {
  switch (action.type) {
    case _.REQUEST_SEND_OTP_REQUEST:
      return {
        ...state,
        sendOtp: {
          loading: true,
        },
      };
    case _.REQUEST_SEND_OTP_SUCCESS:
      return {
        ...state,
        sendOtp: {
          ...action.payload,
          loading: false,
        },
      };
    case _.REQUEST_SEND_OTP_FAILED:
      return {
        ...state,
        sendOtp: {
          ...action.payload,
          loading: false,
        },
      };
    case _.REQUEST_SEND_OTP_RESET:
      return {
        ...state,
        sendOtp: {},
      };
    case _.REQUEST_SUBMIT_OTP:
      return {
        ...state,
        submitOTP: {
          loading: true,
        },
      };
    case _.REQUEST_SUBMIT_OTP_SUCCESS:
      return {
        ...state,
        submitOTP: {
          ...action.payload,
          loading: false,
        },
      };
    case _.REQUEST_SUBMIT_OTP_FAILED:
      return {
        ...state,
        submitOTP: {
          ...action.payload,
          loading: false,
        },
      };
    case _.REQUEST_SUBMIT_OTP_RESET:
      return {
        ...state,
      };
    case _.GET_DATA_USER:
      return {
        ...state,
        userData: {
          loading: true,
        },
      };
    case _.UPDATE_DATA_USER_ADDRESS:
      return {
        ...state,
        addressData: {
          loading: true,
        },
      };
    case _.GET_DATA_USER_SUCCESS:
      return {
        ...state,
        userData: {
          ...action.payload,
          loading: false,
        },
      };
    case _.GET_DATA_USER_FAILED:
      return {
        ...state,
        userData: {
          ...action.payload,
          loading: false,
        },
      };
    case _.GET_DATA_USER_RESET:
      return {
        ...state,
        userData: {
          loading: false,
          data: {},
        },
      };
    case _.VERIFY_TOKEN:
      return {
        ...state,
        verify: {
          loading: true,
        },
      };
    case _.VERIFY_TOKEN_SUCCESS:
      return {
        ...state,
        verify: {
          ...action.payload,
          loading: false,
          isVerify: true,
        },
      };
    case _.VERIFY_TOKEN_FAILED:
      return {
        ...state,
        verify: {
          ...action.payload,
          isVerify: false,
          loading: false,
        },
      };
    case _.VERIFY_TOKEN_RESET:
      return {
        ...state,
        verify: {
          loading: false,
          isVerify: false,
        },
      };
    case _.UPDATE_DATA_USER:
      return {
        ...state,
        testUser: {
          loading: true,
        },
      };
    case _.UPDATE_DATA_USER_SUCCESS:
      return {
        ...state,
        testUser: {
          ...action.payload,
          loading: false,
        },
      };
    case _.UPDATE_DATA_USER_FAILED:
      return {
        ...state,
        testUser: {
          ...action.payload,
          loading: false,
        },
      };
    case _.UPDATE_DATA_USER_RESET:
      return {
        ...state,
        testUser: {
          loading: false,
        },
      };
    default:
      return state;
  }
};
