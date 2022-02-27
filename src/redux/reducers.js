/**
 * Created by Tung Le on 27/02/22.
 */

import { combineReducers } from "redux";
import userReducer from "./reducers/user";

export default combineReducers({
  user: userReducer,
});
