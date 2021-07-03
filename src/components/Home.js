import "../styles/Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="home">
      <div className="home__title">
        <h1>The Best Coffee Brands Around The World</h1>
        <Link to="/shop" className="home__cta-btn">
          Shop now
        </Link>
      </div>
    </section>
  );
};

export default Home;
