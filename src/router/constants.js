import { lazy } from "react";

//Auth
// const Login = lazy(() => import('../pages/Auth/LoginModal'));

//Main
const Payment = lazy(() => import("../pages/Payment"));
const Home = lazy(() => import("../pages/Home"));
const CheckoutConfirm = lazy(() => import("../pages/Payment/CheckoutConfirm"));
const Order = lazy(() => import("../pages/Payment/Order"));
const PaymentSuccess = lazy(() => import("../pages/Payment/PaymentSuccess"));

export {
  //Auth
  // Login,

  //Main
  Home,
  Payment,
  CheckoutConfirm,
  Order,
  PaymentSuccess,
};

export const MainRoute = {
  Home: "/",

  Payment: "/payment",
  CheckoutConfirm: "/payment/confirm",
  Order: "/payment/order",
  PaymentSuccess: "/payment/success",
};

export const AuthRoute = {
  Login: "/login",
};
