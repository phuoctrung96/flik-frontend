import * as _ from './cart-actions';

export const cartReducer = (state = _.cartState, action) => {
  switch (action.type) {
    case _.CART_REQUEST:
      return {
        ...state,
        cartData: {
          ...state.cartData,
          loading: true,
        },
      };
    case _.CART_REQUEST_SUCCESS:
      return {
        ...state,
        cartData: {
          ...action.payload,
          loading: false,
        },
      };
    case _.CART_REQUEST_FAILED:
      return {
        ...state,
        cartData: {
          ...action.payload,
          loading: false,
        },
      };
    case _.CART_REQUEDT_RESET:
      return {
        ...state,
        cartData: {
          data: [],
          loading: false,
        },
      };
    case _.CART_REQUEST_GENERETE:
      return {
        ...state,
        cartData: {
          ...state.cartData,
          loading: true,
        },
      };
    case _.CART_REQUEST_GENERETE_SUCCESS:
      return {
        ...state,
        cartData: {
          ...action.payload,
          loading: false,
        },
      };
    case _.CART_REQUEST_GENERETE_FAILED:
      return {
        ...state,
        cartData: {
          ...action.payload,
          loading: false,
        },
      };
    case _.CART_REQUEST_GENERETE_RESET:
      return {
        ...state,
        cartData: {
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
