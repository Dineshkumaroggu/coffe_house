import "../styles/Shop.css";
import data from "../data";
import { Link } from "react-router-dom";

const Shop = () => {
  return (
    <section className="shop">
      <ul className="shop__items">
        {data.map((item) => {
          return (
            <li key={item.id} className="shop__item">
              <Link to={`/shop/${item.id}`}>
                <div className="shop__card">
                  <img src={item.image} alt="picture" />
                  <h2>{item.brand}</h2>
                  <p>$ {item.price}</p>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Shop;
