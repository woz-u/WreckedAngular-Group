import "./App.css";
// importing components from react-router-dom package
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
  
import Home from "./pages/home";
import About from "./pages/about";
import Checkout from "./pages/checkout";
import Basicpackage from "./pages/basicpackage";
import Header from "./pages/header";
import Footer from "./pages/footer";
  
function App() {
  return (
    <>
      {/* This is the alias of BrowserRouter i.e. Router */}
      <Router>
      <div>
        <Header />
         <hr />
            <Switch>

              <Route exact from="/" to="/home" component={Home} />
                
              <Route path="/about" component={About} />
                
              <Route path="/checkout" component={Checkout} />
                
              <Route path="/basicpackage" component={Basicpackage} />
              <Redirect from ="/" to="/home" />
            </Switch>
          <Footer />
        </div>
      </Router>
    </>
  );
}
  
export default App;