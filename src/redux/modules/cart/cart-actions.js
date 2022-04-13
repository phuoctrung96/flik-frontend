// get data
export const CART_REQUEST = 'CART_REQUEST';
export const CART_REQUEST_SUCCESS = 'CART_REQUEST_SUCCESS';
export const CART_REQUEST_FAILED = 'CART_REQUEST_FAILED';
export const CART_REQUEDT_RESET = 'CART_REQUEDT_RESET';

// update data
export const CART_REQUEST_UPDATE = 'CART_REQUEST_UPDATE';
export const CART_REQUEST_UPDATE_SUCCESS = 'CART_REQUEST_UPDATE_SUCCESS';
export const CART_REQUEST_UPDATE_FAILED = 'CART_REQUEST_UPDATE_FAILED';
export const CART_REQUEST_UPDATE_RESET = 'CART_REQUEST_UPDATE_RESET';

// generete data
export const CART_REQUEST_GENERETE = 'CART_REQUEST_GENERETE';
export const CART_REQUEST_GENERETE_SUCCESS = 'CART_REQUEST_GENERETE_SUCCESS';
export const CART_REQUEST_GENERETE_FAILED = 'CART_REQUEST_GENERETE_FAILED';
export const CART_REQUEST_GENERETE_RESET = 'CART_REQUEST_GENERETE_RESET';

export const cartState = {
  cartData: {
    data: {
      items: [],
    },
    loading: false,
  },
};

export const cartAction = (type, payload) => {
  return {
    type: type,
    payload: { ...payload },
  };
};
