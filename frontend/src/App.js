import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Route path="/" exact>
        <HomeScreen />
      </Route>
      <Route path="/product/:id">
        <ProductScreen />
      </Route>
      <Footer />
    </Router>
  );
}

export default App;
