import React from "react";
import "../styles/Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>LINKS</h4>
          <ul>
            <li>Recipes</li>
            <li>Articles</li>
            <li>Careers</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>LEGAL & SUPPORT</h4>
          <ul>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>FAQs</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>DOWNLOAD THE APP</h4>
          <div className="app-links">
            <button className="app-button">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
              />
            </button>
            <button className="app-button">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/5a/Download_on_the_App_Store_Badge.svg"
                alt="App Store"
              />
            </button>
          </div>
        </div>

        <div className="footer-section newsletter">
          <h4>Sign up for our Newsletter</h4>
          <p>Subscribe & start receiving your weekly dose of delicious inspiration!</p>
          <form className="newsletter-form">
            <input
              type="email"
              placeholder="name@domain.com"
              className="newsletter-input"
            />
            <button type="submit" className="newsletter-button">
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2023 Brand. All rights reserved.</p>
        <div className="social-icons">
          <i className="fab fa-facebook"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-pinterest"></i>
          <i className="fab fa-youtube"></i>
          <i className="fab fa-twitter"></i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
