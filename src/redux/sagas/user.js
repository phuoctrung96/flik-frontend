// function* loginSaga(action) {
//   const { body, resolve, reject } = action;

//   try {
//     const responseLogin = yield call(login, body);
//     yield authHelpers.storeAccessToken(responseLogin.access_token);
//     const responseUserInfo = yield call(getUserInfo);
//     yield authHelpers.storeUserInfo(responseUserInfo);
//     const userInfo = responseUserInfo;

//     yield put({ type: LOGIN_SUCCESSFUL, userInfo });
//     resolve && resolve(userInfo);
//   } catch (err) {
//     yield put({ type: LOGIN_FAILURE });
//     reject && reject(err);
//   }
// }

export default function* root() {
  // yield all([takeLatest(LOGIN, loginSaga)]);
}
