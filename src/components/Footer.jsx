import amazonlogo from "../image/amazonlogo.png";
import global from "../image/globe.png";
import flag from "../image/flag.png";
import { useLocation } from "react-router-dom";
import "../styles/footer.css";

const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  console.log(isHomePage);

  return (
    <div className={isHomePage ? "footer-home-footer" : "footer"}>
      <a href="#">Back to top</a>

      <div className="footer-sections">
        <div>
          <h4>Get to Know Us</h4>
          <ul>
            <li>About Amazon</li>
            <li>Careers</li>
            <li>Press Releases</li>
            <li>Amazon Science</li>
          </ul>
        </div>
        <div>
          <h4>Connect with Us</h4>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>
        <div>
          <h4>Make Money with Us</h4>
          <ul>
            <li>Sell on Amazon</li>
            <li>Sell under Amazon Accelerator</li>
            <li>Protect and Build Your Brand</li>
            <li>Amazon Global Selling</li>
            <li>Supply to Amazon</li>
            <li>Become an Affiliate</li>
            <li>Fulfillment by Amazon</li>
            <li>Advertise Your Products</li>
            <li>Amazon Pay on Merchants</li>
          </ul>
        </div>
        <div>
          <h4>Let Us Help You</h4>
          <ul>
            <li>Your Account</li>
            <li>Returns Centre</li>
            <li>Recalls and Purchase Safety Alerts</li>
            <li>100% Purchase Protection</li>
            <li>Amazon App Download</li>
            <li>Help</li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <div>
          <img src={amazonlogo} alt="Amazon Logo" />
        </div>
        <div>
          <img src={global} alt="Globe" />
          <p>English</p>
        </div>
        <div>
          <img src={flag} alt="Flag" />
          <p>India</p>
        </div>
      </div>
      <div className="footer-end">
        <div>
          <ul>
            <h4>AbeBooks</h4>
            <li>Books,art</li>
            <li>& collectibles</li>
          </ul>
          <ul>
            <h4>Amazon Web Services</h4>
            <li>Scalable Cloud</li>
            <li>Computing Services</li>
          </ul>
          <ul>
            <h4>Audible</h4>
            <li>Dowload</li>
            <li>Audio Books</li>
          </ul>
          <ul>
            <h4>IMDb</h4>
            <li>Movies,TV</li>
            <li>& Celebrities</li>
          </ul>
        </div>
        <div>
          <ul>
            <h4>Shopbop</h4>
            <li>Designer</li>
            <li>Fashion Brands</li>
          </ul>
          <ul>
            <h4>Amazon Business</h4>
            <li>Eveerything For</li>
            <li>YOur Businesss</li>
          </ul>
          <ul>
            <h4>Prime Now</h4>
            <li>2-Hour Delivery</li>
            <li>on Everyday Items</li>
          </ul>
          <ul>
            <h4>Amazon Prime Music</h4>
            <li>100 million songs,ad-free</li>
            <li>Over 15 million podcast episodes</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
