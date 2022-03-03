import { lazy } from "react";

//Auth
// const Login = lazy(() => import('../pages/Auth/LoginModal'));

//Main
const Payment = lazy(() => import("../pages/Payment"));
const Home = lazy(() => import("../pages/Home"));
const CheckoutConfirm = lazy(() => import("../pages/Payment/CheckoutConfirm"));

export {
  //Auth
  // Login,

  //Main
  Home,
  Payment,
  CheckoutConfirm,
};

export const MainRoute = {
  Home: "/",

  Payment: "/payment",
  CheckoutConfirm: "/payment/confirm",
};

export const AuthRoute = {
  Login: "/login",
};
