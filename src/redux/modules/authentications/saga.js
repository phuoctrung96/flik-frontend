import { put, takeEvery, delay } from 'redux-saga/effects';
import {
  requestOTP,
  generateTokenWithOTP as generateTokenWithOTPModel,
  verifyToken as verifyTokenModel,
  putShopperAddress,
} from '../../../models/authentications.model';
import {
  getShooperInfo as getShooperInfoModel,
  putShooperInfo as putShooperInfoModel,
  putShopperAddress as putShopperAddressModel,
} from '../../../models/shopper.model';
import AuthHelper from '../../../utils/AuthHelpers';
import * as _ from './actions';

function* authenticationSendOTP({ payload }) {
  try {
    const res = yield requestOTP(payload);
    if (res?.status === 'success') {
      yield put({
        type: _.REQUEST_SEND_OTP_SUCCESS,
        payload: res,
      });
    }
  } catch (err) {
    yield put({
      type: _.REQUEST_SEND_OTP_FAILED,
      payload: err,
    });
  }
}

export function* addSagaAuthenticationSendOTPRequest() {
  yield takeEvery(_.REQUEST_SEND_OTP_REQUEST, authenticationSendOTP);
}

function* submitOTPVerify({ payload }) {
  try {
    const res = yield generateTokenWithOTPModel(payload);
    if (res.status === 'success') {
      yield put({
        type: _.REQUEST_SUBMIT_OTP_SUCCESS,
        payload: res,
      });
      yield put({
        type: _.VERIFY_TOKEN_SUCCESS,
        payload: res,
      });
      AuthHelper.storeAccessToken(res.data.access_token);
      AuthHelper.storeRefreshToken(res.data.refresh_token);
      yield delay(759);

      const response = yield getShooperInfoModel();
      yield put({
        type: _.GET_DATA_USER_SUCCESS,
        payload: response,
      });
    }
  } catch (err) {
    yield put({
      type: _.REQUEST_SUBMIT_OTP_FAILED,
      payload: err,
    });
  }
}

export function* addSagaAuthenticationSubmitOTPRequest() {
  yield takeEvery(_.REQUEST_SUBMIT_OTP, submitOTPVerify);
}

function* authVerifyToken() {
  try {
    const res = yield verifyTokenModel({
      access_token: AuthHelper.getAccessToken(),
    });
    if (res.status === 'success') {
      yield put({
        type: _.VERIFY_TOKEN_SUCCESS,
        payload: res,
      });
    }
  } catch (err) {
    yield put({
      type: _.VERIFY_TOKEN_FAILED,
      payload: err,
    });
  }
}

export function* authVerifyTokenSaga() {
  yield takeEvery(_.VERIFY_TOKEN, authVerifyToken);
}

// GET USER DATA
function* authGetDataUserAction() {
  try {
    const res = yield getShooperInfoModel();
    if (res.status === 'success') {
      yield put({
        type: _.GET_DATA_USER_SUCCESS,
        payload: res,
      });
    }
  } catch (err) {
    yield put({
      type: _.GET_DATA_USER_FAILED,
      payload: err,
    });
  }
}

export function* authGetDataUserSaga() {
  yield takeEvery(_.GET_DATA_USER, authGetDataUserAction);
}

// PUT USER DATA
function* putDataUser({ payload }) {
  try {
    const res = yield putShooperInfoModel(payload);
    if (res.status === 'success') {
      const response = yield getShooperInfoModel();
      yield put({
        type: _.UPDATE_DATA_USER_SUCCESS,
        payload: res,
      });

      yield put({
        type: _.GET_DATA_USER_SUCCESS,
        payload: response,
      });
    }
  } catch (err) {
    yield put({
      type: _.UPDATE_DATA_USER_FAILED,
      payload: err,
    });
  }
}

export function* putDataUserSaga() {
  yield takeEvery(_.UPDATE_DATA_USER, putDataUser);
}

// PUT USER DATA
function* putDataUserAddress({ payload }) {
  try {
    const res = yield putShopperAddressModel(payload);
    if (res.status === 'success') {
      const response = yield getShooperInfoModel();
      yield put({
        type: _.UPDATE_DATA_USER_SUCCESS,
        payload: res,
      });

      yield put({
        type: _.GET_DATA_USER_SUCCESS,
        payload: response,
      });
    }
  } catch (err) {
    yield put({
      type: _.UPDATE_DATA_USER_FAILED,
      payload: err,
    });
  }
}

export function* sagaPutDataUserAddress() {
  yield takeEvery(_.UPDATE_DATA_USER_ADDRESS, putDataUserAddress);
}
