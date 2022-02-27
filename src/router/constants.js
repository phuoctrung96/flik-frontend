import { lazy } from "react";

//Auth
// const Login = lazy(() => import('../pages/Auth/LoginModal'));

//Main
const Payment = lazy(() => import("../pages/Payment"));
const Home = lazy(() => import("../pages/Home"));

export {
  //Auth
  // Login,

  //Main
  Home,
  Payment,
};

export const MainRoute = {
  Home: "/",
  Payment: "payment",
};

export const AuthRoute = {
  Login: "login",
};
