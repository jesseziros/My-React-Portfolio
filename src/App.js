import { HashRouter, Route, Switch } from "react-router-dom";
import Contact from "./components/Contact";
import Aboutme from "./components/Aboutme";
import Portfolio from "./components/Portfolio";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"

const App = () => {
  return (
    <div className="App">
      <HashRouter basename='/'>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Aboutme}>
            </Route>
            <Route exact path="/portfolio" component={Portfolio}>
            </Route>
            <Route exact path="/contact" component={Contact}>
            </Route>
          </Switch>
          <Footer />
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
