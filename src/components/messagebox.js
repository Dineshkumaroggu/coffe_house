import "../styles/Message.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="message">
      <div className="message__title">
      <h1>Successfully  Purchased!</h1>
        <Link to="/" className="message__cta-btn">
          Home
        </Link>
      </div>
    </section>
  );
};

export default Home;
