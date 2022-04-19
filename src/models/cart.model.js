import axios from '../utils/axios.config';

export const getCartModel = (payload) => {
  return axios.get('checkout/v1/cart', {
    params: payload.params,
    headers: {
      'X-MID': payload.header?.mid,
    },
  });
};

export const genereteCartModel = ({ body, params }) => {
  let config = {
    headers: {
      'X-MID': params?.mid,
    },
  };

  return axios.post('checkout/v1/cart', body, config);
};

export const putCartItemModel = ({ params, body, headers }) => {
  return axios.put(`checkout/v1/cart/${params.id}/item`, body, {
    headers: {
      'X-MID': headers?.mid,
    },
  });
};

export const putCartAddressModel = ({ params, body }) => {
  return axios.put(`checkout/v1/cart/${params.id}/address`, body);
};

export const putCartPaymentModel = ({ params, body }) => {
  return axios.put(`checkout/v1/cart/${params.id}/payment_info`, body);
};
