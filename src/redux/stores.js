import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers";
import rootSaga from "./sagas/sagas";

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = applyMiddleware(sagaMiddleware);
  //   const store = createStore(rootReducer, composeWithDevTools(middlewares));
  const store = createStore(rootReducer, compose(middlewares));

  sagaMiddleware.run(rootSaga);

  return store;
};

export default configureStore;
