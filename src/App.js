import { Route, Routes } from "react-router-dom";
import { CartProvider } from 'react-use-cart';
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
import Reviews from "./Routes/Reviews";
import { AuthContextProvider } from "./context/AuthContext";
import Account from './Routes/Account';
import ForgotPassword from './Routes/ForgotPassword';


function App() {
  return (
    <>
      <AuthContextProvider>
        <CartProvider>
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
              <Route path="/ForgotPassword" element={<ForgotPassword/>} />
              <Route path="/AboutUs" element={<AboutUs />} />
              <Route path="/Home" element={<Home />} />
              <Route path="/Reviews" element={<Reviews />} />
              <Route path="/Account" element={<Account/>} />
            </Routes>
          <Footer />
        </CartProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;