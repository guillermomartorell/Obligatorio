import React from 'react';
import './styles/App.css';
import Nav from './components/Nav'
import Home from './pages/Home'
import Footer from './components/Footer'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Nav/>
      <Switch>
          <Route exact path = '/'>
            <Home/>
          </Route>
      </Switch>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
