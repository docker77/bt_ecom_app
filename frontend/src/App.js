import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import "./bootstrap.min.css";

function App() {
  return (
    <>
      <Header />
      <main className="py-3">
        <HomeScreen />
      </main>

      <Footer />
    </>
  );
}

export default App;
