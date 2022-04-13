import { put, takeEvery } from 'redux-saga/effects';
import { genereteCartModel, getCartModel, putCartItemModel } from '../../../models/cart.model';
import * as _ from './cart-actions';

function* getCart({ payload }) {
  try {
    yield put({
      type: _.CART_REQUEST_SUCCESS,
      payload: payload,
    });
  } catch (err) {
    yield put({
      type: _.CART_REQUEST_FAILED,
      payload: err,
    });
  }
}

export function* sagaGetCart() {
  yield takeEvery(_.CART_REQUEST, getCart);
}

function* genereteCart({ payload }) {
  try {
    const res = yield genereteCartModel(payload);
    if (res.status === 'success') {
      const responseCart = yield getCartModel({
        merchant_cart_id: res?.data?.merchant_cart_id,
      });

      yield put({
        type: _.CART_REQUEST_SUCCESS,
        payload: responseCart,
      });
    }
  } catch (err) {
    yield put({
      type: _.CART_REQUEST_GENERETE_FAILED,
      payload: err,
    });
  }
}

export function* sagaGenereteCart() {
  yield takeEvery(_.CART_REQUEST_GENERETE, genereteCart);
}

function* putCartItem({ payload }) {
  try {
    const res = yield putCartItemModel(payload);
    if (res.status === 'success') {
      const responseCart = yield getCartModel({
        merchant_cart_id: payload?.params?.id,
      });
      yield put({
        type: _.CART_REQUEST_SUCCESS,
        payload: responseCart,
      });
    }
  } catch (err) {
    yield put({
      type: _.CART_REQUEST_UPDATE_FAILED,
      payload: err,
    });
  }
}

export function* sagaPutCartItem() {
  yield takeEvery(_.CART_REQUEST_UPDATE, putCartItem);
}
