import { put, takeEvery } from 'redux-saga/effects';
import {
  getProvinceModel,
  getRegencyModel,
  getDistrictModel,
  getVillageModal,
} from '../../../models/location.model';
import * as _ from './location-actions';

function* getLocationProvince({ payload }) {
  try {
    const res = yield getProvinceModel(payload?.params);
    if (res.status) {
      yield put({
        type: _.LOCATION_REQUEST_SUCCESS,
        payload: {
          response: res,
          locationType: 'province',
        },
      });
    }
  } catch (err) {
    yield put({
      type: _.LOCATION_REQUEST_FAILED,
      payload: {
        response: err,
        locationType: 'province',
      },
    });
  }
}

function* getLocationRegency({ payload }) {
  try {
    const res = yield getRegencyModel(payload?.params);
    if (res.status) {
      yield put({
        type: _.LOCATION_REQUEST_SUCCESS,
        payload: {
          response: res,
          locationType: 'regency',
        },
      });
    }
  } catch (err) {
    yield put({
      type: _.LOCATION_REQUEST_FAILED,
      payload: {
        response: err,
        locationType: 'regency',
      },
    });
  }
}

function* getLocationDistrict({ payload }) {
  try {
    const res = yield getDistrictModel(payload?.params);
    if (res.status) {
      yield put({
        type: _.LOCATION_REQUEST_SUCCESS,
        payload: {
          response: res,
          locationType: 'district',
        },
      });
    }
  } catch (err) {
    yield put({
      type: _.LOCATION_REQUEST_FAILED,
      payload: {
        response: err,
        locationType: 'district',
      },
    });
  }
}

function* getLocationVillage({ payload }) {
  try {
    const res = yield getVillageModal(payload?.params);
    if (res.status) {
      yield put({
        type: _.LOCATION_REQUEST_SUCCESS,
        payload: {
          response: res,
          locationType: 'village',
        },
      });
    }
  } catch (err) {
    yield put({
      type: _.LOCATION_REQUEST_FAILED,
      payload: {
        response: err,
        locationType: 'village',
      },
    });
  }
}

export function* sagaGetLocationProvince() {
  yield takeEvery(_.PROVINCE_REQUEST, getLocationProvince);
}

export function* sagaGetLocationVillage() {
  yield takeEvery(_.VILLAGE_REQUEST, getLocationVillage);
}
export function* sagaGetLocationDistrict() {
  yield takeEvery(_.DISTRICT_REQUEST, getLocationDistrict);
}

export function* sagaGetLocationRegency() {
  yield takeEvery(_.REGENCY_REQUEST, getLocationRegency);
}
