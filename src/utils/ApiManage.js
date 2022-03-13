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
 * access_token
 * @returns
 */
export const verifyToken = (body) => {
  return axios.post("v1/authentication/verify", body);
};
