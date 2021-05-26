import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./pages/Checkout";
import { auth } from "./utils/firebase";
import { useStateValue } from "./utils/StateProvider";
import SimpleSlider from "./utils/SimpleSlider";
import Payment from "./pages/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Home from "./pages/Home";
import Header from "./components/Header";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Orders from "./pages/Orders";

const promise = loadStripe(
  "pk_test_51HQog0E0XWms1zj7wB84LUGtu3SgDcN24mcCVEYNDnYrI0cgk6UEhzhAllq9FzQp8vyhafXIHjzYqVE17KcKUtBD00TvnOJfxm"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component load
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user just logged in / the use was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, [dispatch]);

  return (
    // BEM convention
    <Router>
      <div className="App">
        <Switch>
          {/* untuk router */}
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>

          <Route path="/register">
            <Register />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          <Route path="/">
            <Header />
            <SimpleSlider />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
