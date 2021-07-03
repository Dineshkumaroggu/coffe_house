import { useEffect, useState } from "react";
import { useRouteMatch, Link } from "react-router-dom";
import "../styles/Details.css";
import data from "../data";

const Details = ({ buyNow, addToCart }) => {
  let match = useRouteMatch("/shop/:id");

  const [selected, setSelected] = useState({});
  const [error, setError] = useState(false);

  useEffect(() => {
    const selectedData = data.find((item) => item.id === match.params.id);

    if (!selectedData) {
      setError(true);
      return;
    }

    setSelected(selectedData);
    setError(false);
  }, [match.params.id]);

  const increaseSelectedQty = () => {
    setSelected({ ...selected, qty: selected.qty + 1 });
  };

  const decreaseSelectedQty = () => {
    if (selected.qty === 1) return;
    setSelected({ ...selected, qty: selected.qty - 1 });
  };

  const selectedChangeHandler = (e) => {
    setSelected({ ...selected, qty: e.target.value });
  };

  const setSelectedDefault = (e) => {
    if (e.target.value === "" || e.target.value === "0")
      setSelected({ ...selected, qty: 1 });
  };

  return !error ? (
    <div className="details">
      <img src={selected.image} alt={selected.brand} />
      <div className="details__info">
        <h2>{selected.brand}</h2>
        <br />
        <p>{selected.description}</p>
        <br />
        <span>${selected.price}</span>
        <br />
        <div className="details__quantity">
          <label>Quantity: </label>
          <button onClick={decreaseSelectedQty}>-</button>
          <input
            type="number"
            value={selected.qty || 1}
            onChange={selectedChangeHandler}
            onBlur={setSelectedDefault}
          />
          <button onClick={increaseSelectedQty}>+</button>
        </div>
        <div className="details__btns">
          <Link to="/cart" onClick={() => buyNow(selected)}>
            Buy Now
          </Link>
          <button onClick={() => addToCart(selected)}>Add to cart</button>
        </div>
      </div>
    </div>
  ) : (
    <div className="error">Product not found</div>
  );
};

export default Details;
