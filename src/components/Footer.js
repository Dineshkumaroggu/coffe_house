import "../styles/Footer.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__icons">
        <FaFacebookSquare className="footer__icon" />
        <FaInstagramSquare className="footer__icon" />
        <FaTwitterSquare className="footer__icon" />
      </div>
      <span>Contact us</span>
    </footer>
  );
};

export default Footer;