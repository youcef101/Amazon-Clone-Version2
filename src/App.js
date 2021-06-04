import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart';
import Header from './components/Header';
import Home from './components/Home';
import SubHeader from './components/SubHeader';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <SubHeader />
        <Switch>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>



    </div>
  );
}

export default App;
