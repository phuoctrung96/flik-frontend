import axios from '../utils/axios.config';

export const getCartModel = params => {
  return axios.get('checkout/v1/cart', {
    params: params,
  });
};

export const genereteCartModel = ({ body }) => {
  return axios.post('checkout/v1/cart', body);
};

export const putCartItemModel = ({ params, body }) => {
  return axios.put(`checkout/v1/cart/${params.id}/item`, body);
};

export const putCartAddressModel = ({ params, body }) => {
  return axios.put(`checkout/v1/cart/${params.id}/address`, body);
};

export const putCartPaymentModel = ({ params, body }) => {
  return axios.put(`checkout/v1/cart/${params.id}/payment_info`, body);
};
