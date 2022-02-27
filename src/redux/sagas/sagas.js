import { all, fork } from "redux-saga/effects";

import userSaga from "./user";

function* root() {
  yield all([fork(userSaga)]);
}

export default root;
