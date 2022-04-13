// LOCATION data
export const LOCATION_REQUEST = 'LOCATION_REQUEST';
export const LOCATION_REQUEST_SUCCESS = 'LOCATION_REQUEST_SUCCESS';
export const LOCATION_REQUEST_FAILED = 'LOCATION_REQUEST_FAILED';
export const LOCATION_REQUEST_RESET = 'LOCATION_REQUEST_RESET';
export const LOCATION_REQUEST_RESET_ALL = 'LOCATION_REQUEST_RESET_ALL';

export const PROVINCE_REQUEST = 'PROVINCE_REQUEST';
export const DISTRICT_REQUEST = 'DISTRICT_REQUEST';
export const REGENCY_REQUEST = 'REGENCY_REQUEST';
export const VILLAGE_REQUEST = 'VILLAGE_REQUEST';

export const locationState = {
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

export const locationAction = (type, payload) => {
  return {
    type: type,
    payload: { ...payload },
  };
};
