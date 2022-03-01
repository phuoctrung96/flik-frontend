import "./App.scss";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Router from "./router";
import configureStore from "./redux/stores";
import { MainRoute } from "./router/constants";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter basename={MainRoute.Home}>
        <Router />
        <ToastContainer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
