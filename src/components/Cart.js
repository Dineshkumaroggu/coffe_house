import "../styles/Cart.css";
import { MdDeleteForever } from "react-icons/md";
import { CgShoppingCart } from "react-icons/cg";
import { Link } from "react-router-dom";

const Cart = ({
  cart,
  increaseQty,
  decreaseQty,
  changeHandler,
  setDefault,
  deleteItem,
}) => {
  const total = cart.reduce((acc, { qty, price }) => acc + qty * price, 0);
  const renderedList = cart.map((item) => {
    return (
      <li className="cart__item" key={item.id}>
        <img src={item.image} alt={item.brand} />

        <div className="cart__item-details">
          <h3>{item.brand}</h3>
          <span>${item.price}</span>
          <div className="cart__item-quantity">
            <label>Quantity: </label>
            <button onClick={() => decreaseQty(item)}>-</button>
            <input
              type="number"
              value={item.qty}
              onChange={changeHandler(item)}
              onBlur={setDefault(item)}
            />
            <button onClick={() => increaseQty(item)}>+</button>
          </div>
          <MdDeleteForever onClick={() => deleteItem(item)} />
        </div>
      </li>
    );
  });
  return (
    <div className="cart">
      {cart.length === 0 ? (
        <div className="cart__empty">
          <CgShoppingCart />
          <span>Your cart is empty</span>
        </div>
      ) : (
        <>
          <ul className="cart__items">{renderedList}</ul>
          <div className="cart__total">
            <p>Total: ${total.toFixed(2)}</p>
            <Link to="message"><button>Proceed to Checkout</button></Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
