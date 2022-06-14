// importing components from react-router-dom package
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Home from "./Routes/Home";
import About from "./Routes/About";
import Checkout from "./Routes/Checkout";
import BasicPackage from "./Routes/BasicPackage";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" to="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/BasicPackage" element={<BasicPackage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
