import { lazy } from "react";

//Auth
// const Login = lazy(() => import('../pages/Auth/LoginModal'));

//Main
const Payment = lazy(() => import("../pages/Payment"));
const Home = lazy(() => import("../pages/Home"));
const CheckoutConfirm = lazy(() => import("../pages/Payment/CheckoutConfirm"));
const Order = lazy(() => import("../pages/Payment/Order"));

export {
  //Auth
  // Login,

  //Main
  Home,
  Payment,
  CheckoutConfirm,
  Order,
};

export const MainRoute = {
  Home: "/",

  Payment: "/payment",
  CheckoutConfirm: "/payment/confirm",
  Order: "/payment/order",
};

export const AuthRoute = {
  Login: "/login",
};
