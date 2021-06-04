import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart';
import Header from './components/Header';
import Home from './components/Home';
import SubHeader from './components/SubHeader';
import { selectCartItem, selectProducts } from './features/products/productSlice';

function App() {
  const products = useSelector(selectProducts)
  const cartItem = useSelector(selectCartItem)
  const getTotalQty = () => {
    let totalQty = 0;
    cartItem.forEach(item => {
      totalQty += item.quantity;
    });
    return totalQty;
  }
  return (
    <div className="App">
      <Router>
        <Header totalQty={getTotalQty()} />
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
