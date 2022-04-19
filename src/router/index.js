import { Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { toast as toastFn } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { MainLayout } from '../components/layouts/MainLayout';
import AuthHelper from '../utils/AuthHelpers';
import * as _ from '../redux/actions';
import {
  Home,
  MainRoute,
  Payment,
  CheckoutConfirm,
  Order,
  PayCreditCard,
  PaymentSuccess,
} from './constants';

const AuthRouter = () => {
  return (
    <Route path="/auth">
      {/* <Route path={AuthRoute.Login} element={<Suspense fallback={<>...</>}><Login /></Suspense>} /> */}
    </Route>
  );
};

const PaymentRouter = () => {
  return (
    <Route path="/">
      <Route
        path={MainRoute.Payment}
        element={
          <Suspense fallback={<>...</>}>
            <Payment />
          </Suspense>
        }
      ></Route>
      <Route
        path={MainRoute.CheckoutConfirm}
        element={
          <Suspense fallback={<>...</>}>
            <CheckoutConfirm />
          </Suspense>
        }
      ></Route>
      <Route
        path={MainRoute.Order}
        element={
          <Suspense fallback={<>...</>}>
            <Order />
          </Suspense>
        }
      ></Route>
      <Route
        path={MainRoute.PayCreditCard}
        element={
          <Suspense fallback={<>...</>}>
            <PayCreditCard />
          </Suspense>
        }
      ></Route>
      <Route
        path={MainRoute.PaymentSuccess}
        element={
          <Suspense fallback={<>...</>}>
            <PaymentSuccess />
          </Suspense>
        }
      ></Route>
    </Route>
  );
};

const Router = () => {
  const tokenUser = AuthHelper.getAccessToken();
  const dispatch = useDispatch();
  const { toast } = useSelector((state) => {
    return {
      toast: state?.toast?.toast,
    };
  });
  useEffect(() => {
    if (toast?.message) {
      toastFn[toast.status](toast.message, toast.toastConfig);
    }
  }, [toast]);

  useEffect(() => {
    if (tokenUser) {
      dispatch(_.authenticationCreator(_.VERIFY_TOKEN, {}));
      dispatch(_.userAction(_.GET_DATA_USER, {}));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {AuthRouter()}
        {PaymentRouter()}
        <Route
          index
          element={
            <Suspense fallback={<>...</>}>
              <Home />
            </Suspense>
          }
        />
        <Route path="*" element={<h1>Page not found</h1>} />
      </Route>
    </Routes>
  );
};

export default Router;
