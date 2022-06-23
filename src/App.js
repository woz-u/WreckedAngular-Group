// importing components from react-router-dom package
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Home from "./Routes/Home";
import AboutUs from "./Routes/AboutUs";
import Checkout from "./Routes/Checkout";
import CalfPack from "./Routes/CalfPack";
import CowPack from "./Routes/CowPack";
import BullPack from "./Routes/BullPack";
import MadCow from "./Routes/MadCow";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import SignIn from "./Routes/SignIn";
import SignUp from "./Routes/SignUp";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" to="/Home" element={<Home />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/CalfPack" element={<CalfPack />} />
        <Route path="/CowPack" element={<CowPack />} />
        <Route path="/BullPack" element={<BullPack />} />
        <Route path="/MadCow" element={<MadCow />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
