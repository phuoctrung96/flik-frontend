import axios from '../utils/axios.config';

export const getShooperInfo = (body) => {
  return axios.get('shopper/v1/shopper', body);
};

export const putShooperInfo = (body) => {
  return axios.put('shopper/v1/shopper', body);
};

export const putShopperAddress = (body) => {
  return axios.put('shopper/v1/shopper/address', body);
};
