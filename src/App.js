import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contact from "./components/Contact";
import Aboutme from "./components/Aboutme";
import Portfolio from "./components/Portfolio";
import Navbar from "./components/Navbar"

function App() {
  return (
    <div className="App">
      <Router path={process.env.PUBLIC_URL + '/'}>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/portfolio">
            <Portfolio />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route>
            <Aboutme />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
