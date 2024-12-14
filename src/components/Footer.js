import React from "react";
import "../styles/Footer.css";

// External links for logos and icons
const googlePlayLogo = "https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg";
const appStoreLogo = "https://upload.wikimedia.org/wikipedia/commons/0/0a/Apple_Store_badge.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4 className="footer-title">LINKS</h4>
          <ul className="footer-links">
            <li><a href="/recipes">Recipes</a></li>
            <li><a href="/articles">Articles</a></li>
            <li><a href="/careers">Careers</a></li>
            <li><a href="/about-us">About Us</a></li>
            <li><a href="/contact-us">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4 className="footer-title">LEGAL & SUPPORT</h4>
          <ul className="footer-links">
            <li><a href="/terms-of-service">Terms of Service</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/faqs">FAQs</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4 className="footer-title">DOWNLOAD THE APP</h4>
          <a href="/google-play" className="app-link">
            <img src={googlePlayLogo} alt="Google Play" className="app-logo" />
          </a>
          <a href="/app-store" className="app-link">
            <img src={appStoreLogo} alt="App Store" className="app-logo" />
          </a>
        </div>
        <div className="footer-section">
          <h4 className="footer-title">Sign up for our Newsletter</h4>
          <p>Subscribe & start receiving your weekly dose of delicious inspiration!</p>
          <div className="newsletter">
            <input type="email" placeholder="name@domain.com" className="newsletter-input" />
            <button className="newsletter-button">SUBSCRIBE</button>
          </div>
          <h4 className="footer-title">FOLLOW US</h4>
          <div className="social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-pinterest"></i>
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Brand. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;