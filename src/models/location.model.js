import axios from '../utils/axios.config';

export const getProvinceModel = (params) => {
  return axios.get('location/province', {
    params: params,
  });
};

export const getRegencyModel = (params) => {
  const { name } = params;
  let url = 'location/regency/parent';
  if (name !== '' && name.length > 2) {
    url = 'location/regency';
  }
  return axios.get(url, {
    params: params,
  });
};

export const getDistrictModel = (params) => {
  return axios.get('location/district/parent', {
    params: params,
  });
};
export const getVillageModal = (params) => {
  return axios.get('location/village/parent', {
    params: params,
  });
};
