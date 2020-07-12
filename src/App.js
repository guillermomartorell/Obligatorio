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
import CharSel from './pages/CharSel';
import NewChar from './pages/NewChar';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/CharacterSelection'>
            <CharSel />
          </Route>
          <Route exact path='/NewCharacter'>
            <NewChar />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
