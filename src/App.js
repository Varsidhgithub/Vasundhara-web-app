import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Tabview from './Components/Tabview';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/header">
            <Header />
          </Route>
          <Route path="/footer">

            <Footer />
          </Route>
          <Route path="/ff">
            <Tabview />

          </Route>
        </Switch>
      </Router>




    </div>
  );
}

export default App;
