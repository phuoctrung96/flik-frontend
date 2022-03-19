import axios from "./axios.config";

export const login = (body) => {
  return axios.post("/auth/login", body);
};

/**
 *
 * @param {*} body:
 * app_id
 * email
 * phone
 * device_id
 * @returns
 */
export const requestOTP = (body) => {
  return axios.post("v1/authentication/otp/send", body);
};

/**
 *
 * @param {*} body
 * app_id
 * device_id
 * phone
 * email
 * otp
 * @returns
 */
export const generateTokenWithOTP = (body) => {
  return axios.post("v1/authentication/otp/validate", body);
};

/**
 *
 * @param {*} body
 * refresh_token
 * @returns
 */
export const refreshToken = (body) => {
  return axios.post("v1/authentication/refresh", body);
};

/**
 *
 * @param {*} body
 * access_token
 * @returns
 */
export const verifyToken = (body) => {
  return axios.post("v1/authentication/verify", body);
};

export const generateCart = (appId) => {
  return axios.post(`v1/cart`, {
    headers: { "X-App-ID": appId },
  });
};

export const getCartData = (appId, merchantCartId) => {
  return axios.get(`v1/cart?merchant_cart_id=${merchantCartId}`, {
    headers: { "X-App-ID": appId },
  });
};

export const updateCartItem = (appId, body) => {
  return axios.get(
    `v1/cart/984d697f-33ea-3829-bb39-90f26fab7148`,
    {
      headers: { "X-App-ID": appId },
    },
    body
  );
};
