import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { MainLayout } from "../components/layouts/MainLayout";
import {
  Home,
  MainRoute,
  Payment,
  CheckoutConfirm,
  Order,
  PaymentSuccess,
} from "./constants";

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
