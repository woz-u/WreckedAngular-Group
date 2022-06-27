// importing components from react-router-dom package
import {
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
