import { put, takeEvery, delay } from 'redux-saga/effects';
import * as _ from './toast-actions';

const delayTimer = 2000;
const optionToast = {
  position: 'top-center',
  autoClose: delayTimer,
  hideProgressBar: false,
  closeOnClick: false,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

function* addToastDisplayComponentSuccess({ payload }) {
  try {
    yield put({
      type: _.TOAST_DISPLAY_SHOW_SUCCESS,
      payload: {
        status: 'success',
        toastConfig: {
          ...optionToast,
        },
        ...payload,
      },
    });
    yield delay(delayTimer);
    yield put({
      type: _.TOAST_RESET,
      payload: {},
    });
  } catch (err) {}
}
function* addToastDisplayComponentFailed({ payload }) {
  try {
    yield put({
      type: _.TOAST_DISPLAY_SHOW_FAILED,
      payload: {
        status: 'error',
        toastConfig: {
          ...optionToast,
        },
        ...payload,
      },
    });
    yield delay(delayTimer);
    yield put({
      type: _.TOAST_RESET,
      payload: {},
    });
  } catch (err) {}
}

export function* addSagaToastDisplaySuccess() {
  yield takeEvery(_.TOAST_DISPLAY_SUCCESS, addToastDisplayComponentSuccess);
}
export function* addSagaToastDisplayFailed() {
  yield takeEvery(_.TOAST_DISPLAY_FAILED, addToastDisplayComponentFailed);
}
