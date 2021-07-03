import Header from "./Header";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Shop from "./Shop";
import Cart from "./Cart";
import Details from "./Details";
import Footer from "./Footer";
import Messagebox from "./messagebox";
import { useState } from "react";

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (current) => {
    if (cart.some((item) => current.id === item.id)) {
      setCart(
        cart.map((item) =>
          item.id === current.id
            ? { ...item, qty: item.qty + current.qty }
            : item
        )
      );
      return;
    }

    setCart(cart.concat(current));
  };

  const buyNow = (current) => {
    if (cart.some((item) => current.id === item.id)) return;
    setCart(cart.concat(current));
  };

  const increaseQty = (current) => {
    setCart(
      cart.map((item) =>
        item.id === current.id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decreaseQty = (current) => {
    if (current.qty === 1) return;
    setCart(
      cart.map((item) =>
        item.id === current.id ? { ...item, qty: item.qty - 1 } : item
      )
    );
  };

  const changeHandler = (current) => (e) => {
    setCart(
      cart.map((item) =>
        item.id === current.id ? { ...item, qty: e.target.value } : item
      )
    );
  };

  const setDefault = (current) => (e) => {
    if (e.target.value === "" || e.target.value === "0")
      setCart(
        cart.map((item) => (item === current ? { ...item, qty: 1 } : item))
      );
  };

  const deleteItem = (current) => {
    setCart(cart.filter((item) => item.id !== current.id));
  };

  return (
    <Router basename="/">
      <div className="App">
        <Header cart={cart} />
        <div className="container">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/shop">
              <Shop />
            </Route>
            <Route exact path="/message">
              <Messagebox />
            </Route>
            <Route path="/cart">
              <Cart
                cart={cart}
                increaseQty={increaseQty}
                decreaseQty={decreaseQty}
                changeHandler={changeHandler}
                setDefault={setDefault}
                deleteItem={deleteItem}
              />
            </Route>
            <Route path="/shop/:id">
              <Details addToCart={addToCart} buyNow={buyNow} />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
