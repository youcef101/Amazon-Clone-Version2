import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import SubHeader from './components/SubHeader';
import { selectCartItem, selectProducts } from './features/products/productSlice';
import { selectUsername, setSignIn } from './features/user/userSlice';
import { auth } from './Firebase';

function App() {
  const username = useSelector(selectUsername)
  const dispatch = useDispatch()
  const cartItem = useSelector(selectCartItem)
  const getTotalQty = () => {
    let totalQty = 0;
    cartItem.forEach(item => {
      totalQty += item.quantity;
    });
    return totalQty;
  }
  useEffect(() => {

    let user = localStorage.getItem('user')
    if (user) {
      dispatch(setSignIn(JSON.parse(user)))
    }
  }, [])
  return (
    <div className="App">
      <Router>
        {!username ?
          <><Login /></> : <>
            <Header totalQty={getTotalQty()} />
            <SubHeader />
            <Switch>
              <Route path="/cart">
                <Cart />
              </Route>

              <Route path="/">
                <Home />
              </Route>
            </Switch></>
        }
      </Router>



    </div>
  );
}

export default App;
