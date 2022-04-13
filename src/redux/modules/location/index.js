import * as _ from './location-actions';

export const locationReducer = (state = _.locationState, action) => {
  switch (action.type) {
    case _.LOCATION_REQUEST:
      return {
        ...state,
        [action.locationType]: {
          ...state.cartData,
          loading: true,
        },
      };
    case _.PROVINCE_REQUEST:
      return {
        ...state,
        [action?.payload?.locationType]: {
          ...action.payload?.response,
          loading: true,
        },
      };
    case _.LOCATION_REQUEST_SUCCESS:
      return {
        ...state,
        [action?.payload?.locationType]: {
          ...action.payload?.response,
          loading: false,
        },
      };
    case _.LOCATION_REQUEST_FAILED:
      return {
        ...state,
        [action.locationType]: {
          ...action.payload,
          loading: false,
        },
      };
    case _.LOCATION_REQUEST_RESET:
      return {
        ...state,
        [action.locationType]: {
          data: [],
          loading: false,
        },
      };
    case _.LOCATION_REQUEST_RESET_ALL:
      return {
        ...state,
        province: {
          data: {
            items: [],
          },
          loading: false,
        },
        district: {
          data: {
            items: [],
          },
          loading: false,
        },
        village: {
          data: {
            items: [],
          },
          loading: false,
        },
        regency: {
          data: {
            items: [],
          },
          loading: false,
        },
      };
    default:
      return state;
  }
};
