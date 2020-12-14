import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import "./bootstrap.min.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <Container>
          <h1>Welcome to SkiShop</h1>
          <div>Main</div>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
