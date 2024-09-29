import React from 'react';
// import { Facebook, Twitter, Instagram, Linkedin } from 'react-bootstrap-icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row footer-links">
          <div className="col-md-2 footer-section">
            <h6>About</h6>
            <ul>
              <li>The Bank</li>
              <li>Board of Directors</li>
              <li>Leadership Team</li>
              <li>Careers</li>
              <li>Social Responsibility</li>
              <li>Sustainability Framework</li>
            </ul>
          </div>
          <div className="col-md-2 footer-section">
            <h6>Media Center</h6>
            <ul>
              <li>Press Releases</li>
              <li>Media Kit</li>
              <li>Investor Kit</li>
              <li>Investor Relations</li>
            </ul>
          </div>
          <div className="col-md-2 footer-section">
            <h6>Products</h6>
            <ul>
              <li>Savings Account</li>
              <li>Current Account</li>
              <li>Credit Cards</li>
              <li>Term Deposits</li>
              <li>Housing Loan</li>
              <li>NRI Services</li>
            </ul>
          </div>
          <div className="col-md-2 footer-section">
            <h6>Important Links</h6>
            <ul>
              <li>Regulatory Disclosures</li>
              <li>Bank Policies</li>
              <li>News</li>
              <li>Service Charges & Fees</li>
              <li>Interest Rates</li>
              <li>Download Forms</li>
              <li>Site Map</li>
            </ul>
          </div>
          <div className="col-md-2 footer-section">
            <h6>Customer Service</h6>
            <ul>
              <li>Contact Us</li>
              <li>Locate Us</li>
              <li>Do Not Call Registry</li>
              <li>Grievance Redressal</li>
              <li>Feedback</li>
              <li>Report a Complaint/Fraud</li>
              <li>Unclaimed Deposits</li>
              <li>Certificates Issued by the Bank</li>
            </ul>
          </div>
        </div>
        <hr className="footer-divider" />
        
        <div className="footer-bottom">
          <span className="footer-text">
            Copyright 2024 RBL Bank Ltd.<br />
            Site best viewed in IE 9-11, Edge 25, Chrome 58, Firefox 53, Safari 10.1
          </span>
          <div className="social-icons">
            <span className="follow-us">Follow us</span>
            <a href="#" className="social-icon"><i class="bi bi-facebook"></i></a>
            <a href="#" className="social-icon"><i class="bi bi-linkedin"></i></a>
            <a href="#" className="social-icon"><i class="bi bi-twitter"></i></a>
            <a href="#" className="social-icon"><i class="bi bi-instagram"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
