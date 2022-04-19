import { lazy } from 'react';

//Auth
// const Login = lazy(() => import('../pages/Auth/LoginModal'));

//Main
const Payment = lazy(() => import('../pages/Payment'));
const Home = lazy(() => import('../pages/Home'));
const CheckoutConfirm = lazy(() => import('../pages/Payment/CheckoutConfirm'));
const Order = lazy(() => import('../pages/Payment/Order'));
const PaymentSuccess = lazy(() => import('../pages/Payment/PaymentSuccess'));
const PayCreditCard = lazy(() => import('../pages/Payment/PayCreditCard'));

export {
  //Auth
  // Login,

  //Main
  Home,
  Payment,
  CheckoutConfirm,
  Order,
  PaymentSuccess,
  PayCreditCard,
};

export const MainRoute = {
  Home: '/',

  Payment: '/checkout',
  CheckoutConfirm: '/payment/confirm',
  Order: '/payment/order',
  PaymentSuccess: '/payment/success',
  PayCreditCard: '/payment/credit-card',
};

export const AuthRoute = {
  Login: '/login',
};
