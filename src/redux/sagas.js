import { all } from 'redux-saga/effects';
import {
  addSagaAuthenticationSendOTPRequest,
  addSagaAuthenticationSubmitOTPRequest,
  authGetDataUserSaga,
  authVerifyTokenSaga,
  putDataUserSaga,
  sagaPutDataUserAddress,
} from './modules/authentications/saga';
import { addSagaToastDisplaySuccess, addSagaToastDisplayFailed } from './modules/toast/toast-saga';
import { sagaGetCart, sagaGenereteCart, sagaPutCartItem } from './modules/cart/cart-saga';
import {
  sagaGetLocationProvince,
  sagaGetLocationRegency,
  sagaGetLocationDistrict,
  sagaGetLocationVillage,
} from './modules/location/location-saga';

function* rootSagas() {
  yield all([
    addSagaAuthenticationSendOTPRequest(),
    addSagaAuthenticationSubmitOTPRequest(),
    putDataUserSaga(),
    authGetDataUserSaga(),
    authVerifyTokenSaga(),
    addSagaToastDisplaySuccess(),
    addSagaToastDisplayFailed(),
    sagaGetCart(),
    sagaGenereteCart(),
    sagaPutCartItem(),
    sagaGetLocationProvince(),
    sagaGetLocationRegency(),
    sagaGetLocationDistrict(),
    sagaGetLocationVillage(),
    sagaPutDataUserAddress(),
  ]);
}

export default rootSagas;
