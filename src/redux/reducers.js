/**
 * Created by Tung Le on 27/02/22.
 */

import { combineReducers } from 'redux';
// import userReducer from './reducers/user';
import { userReducer } from './modules/authentications';
import { cartReducer } from './modules/cart';
import { locationReducer } from './modules/location';
import { toastReducer } from './modules/toast';

export default combineReducers({
  // user: userReducer,
  authentication: userReducer,
  cart: cartReducer,
  toast: toastReducer,
  location: locationReducer,
});
