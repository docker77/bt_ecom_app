import { Fragment } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import LoginScreen from "./screens/LoginScreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={LoginScreen} />
        <Fragment>
          <Header />
          <Route path="/" exact component={HomeScreen} />
          <Route path="/product/:id" component={ProductScreen} />
          <Footer />
        </Fragment>
      </Switch>
    </Router>
  );
}

export default App;
