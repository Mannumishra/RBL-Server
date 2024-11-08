import React, { useState } from "react";
import "./header.css";
import logo from "../../Images/logo.svg";
import product1 from "../../Images/productdropdown1.jpg";
import product2 from "../../Images/productdropdown2.jpg";
import product3 from "../../Images/productdropdown3.jpg";
import { Link } from "react-router-dom";
import icon1 from "../../Images/icon1.svg";
import icon2 from "../../Images/icon2.svg";
import icon3 from "../../Images/icon3.svg";
import icon4 from "../../Images/icon4.svg";
import icon5 from "../../Images/icon5.svg";
const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid navmaindiv">
            <p className="navbar-brand d-flex align-items-center">
              <div
                className="menuImag"
                onClick={toggleSidebar}
                style={{ cursor: "pointer" }}
              >
                <img src={icon5} className="img-fluid bottomIcon" alt="More" />
              </div>

              <img src={logo} alt="RBL Bank Logo" />
            </p>

            <div
              className={`custom-sidebar ${
                isSidebarOpen ? "custom-sidebar-open" : ""
              }`}
            >
              <div className="d-flex justify-content-between">
                <h2>Our Products</h2>
                <i class="bi bi-x-lg" onClick={toggleSidebar}></i>
              </div>
              <hr />
              <ul className="custom-sidebar-list">
                <li className="custom-sidebar-item"><Link to={'https://www.rblbank.com/personal-banking'}> Product </Link> </li>
                <li className="custom-sidebar-item"><Link to={'https://www.rblbank.com/offers-and-promotions?type=155357'}> Offers </Link> </li>
                <li className="custom-sidebar-item"><Link to={'https://www.rblbank.com/quick-services'}> Service Request </Link> </li>
                <li className="custom-sidebar-item"><Link to={'/application-form'}> Card Increase </Link> </li>
              </ul>
            </div>

            {/* Sidebar Overlay */}
            {isSidebarOpen && (
              <div
                className="custom-sidebar-overlay"
                onClick={toggleSidebar}
              ></div>
            )}

            {/* Center: Navbar Links */}
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item  dropdown">
                  <a
                    className="nav-link dropdown-toggle home-nav"
                    href="#"
                    id="productsDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Products
                  </a>
                  <div
                    className="dropdown-menu p-4"
                    aria-labelledby="productsDropdown"
                  >
                    <div className="container">
                      <div className="custom-dropdown-container shadow">
                        <div className="custom-dropdown-section">
                          <ul className="list-unstyled">
                            <li className="dropdown-li-main">
                              <a
                                href="https://www.rblbank.com/personal-banking"
                                className="dropdown-li"
                              >
                                Personal Banking
                                <i className="bi bi-arrow-right"></i>
                              </a>
                            </li>
                            <li className="dropdown-li-main">
                              <a
                                href="https://www.rblbank.com/nri-banking"
                                className="dropdown-li"
                              >
                                NRI Banking
                                <i className="bi bi-arrow-right"></i>
                              </a>
                            </li>

                            <li className="dropdown-li-main">
                              <a
                                href="https://www.rblbank.com/preferred-banking"
                                className="dropdown-li"
                              >
                                Preferred Banking
                                <i className="bi bi-arrow-right"></i>
                              </a>
                            </li>
                            <li className="dropdown-li-main">
                              <a
                                href="https://www.rblbank.com/business-banking"
                                className="dropdown-li"
                              >
                                Business Banking
                                <i className="bi bi-arrow-right"></i>
                              </a>
                            </li>
                            <li className="dropdown-li-main">
                              <a
                                href="https://www.rblbank.com/wholesale-banking"
                                className="dropdown-li"
                              >
                                Wholesale Banking
                                <i className="bi bi-arrow-right"></i>
                              </a>
                            </li>
                            <li className="dropdown-li-main">
                              <a
                                href="https://www.rblbank.com/corporate-banking"
                                className="dropdown-li"
                              >
                                Corporate Banking
                                <i className="bi bi-arrow-right"></i>
                              </a>
                            </li>
                            <li className="dropdown-li-main">
                              <a
                                href="https://www.rblbank.com/india-startup-club"
                                className="dropdown-li"
                              >
                                India Startup Club
                                <i className="bi bi-arrow-right"></i>
                              </a>
                            </li>
                            <li className="dropdown-li-main">
                              <a
                                href="https://www.rblbank.com/gift-city"
                                className="dropdown-li"
                              >
                                Gift City
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="custom-dropdown-section account-bg">
                          <ul className="list-unstyled">
                            <li className="dropdown-li-main">
                              <a
                                href="https://www.rblbank.com/personal-banking/accounts"
                                className="dropdown-li"
                              >
                                Accounts
                              </a>
                            </li>
                            <li className="dropdown-li-main">
                              <a
                                href="https://www.rblbank.com/personal-banking/term-deposits"
                                className="dropdown-li"
                              >
                                Term Deposits
                              </a>
                            </li>
                            <li className="dropdown-li-main">
                              <a
                                href="https://www.rblbank.com/personal-banking/cards"
                                className="dropdown-li"
                              >
                                Cards
                              </a>
                            </li>
                            <li className="dropdown-li-main">
                              <a
                                href="https://www.rblbank.com/personal-banking/loans"
                                className="dropdown-li"
                              >
                                Loans
                              </a>
                            </li>
                            <li className="dropdown-li-main">
                              <a
                                href="https://www.rblbank.com/personal-banking/insurance"
                                className="dropdown-li"
                              >
                                Insurance
                              </a>
                            </li>
                            <li className="dropdown-li-main">
                              <a
                                href="https://investment.rblbank.com/"
                                className="dropdown-li"
                              >
                                Investments
                              </a>
                            </li>
                            <li className="dropdown-li-main">
                              <a
                                href="https://www.rblbank.com/personal-banking/demat"
                                className="dropdown-li"
                              >
                                Demat
                              </a>
                            </li>
                            <li className="dropdown-li-main">
                              <a
                                href="https://www.rblbank.com/personal-banking/convenience-banking"
                                className="dropdown-li"
                              >
                                Convenience Banking
                              </a>
                            </li>
                            <li className="dropdown-li-main">
                              <a
                                href="https://www.rblbank.com/personal-banking/ways-to-bank"
                                className="dropdown-li"
                              >
                                Ways to Banking
                              </a>
                            </li>
                            <li className="dropdown-li-main">
                              <a
                                href="https://www.rblbank.com/personal-banking/forex-services"
                                className="dropdown-li"
                              >
                                Forex Services
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="custom-dropdown-section saving-ac">
                          <ul className="list-unstyled">
                            <li className="dropdown-li-main">
                              <a
                                href="https://www.rblbank.com/personal-banking/accounts/savings-accounts"
                                className="dropdown-li"
                              >
                                Savings Accounts
                              </a>
                            </li>
                            <li className="dropdown-li-main">
                              <a
                                href="https://www.rblbank.com/personal-banking/accounts/salary-account"
                                className="dropdown-li"
                              >
                                Salary Accounts
                              </a>
                            </li>
                            <li className="dropdown-li-main">
                              <a
                                href="https://www.rblbank.com/business-banking/business/partnering-your-growth/current-accounts"
                                className="dropdown-li"
                              >
                                Current Accounts
                              </a>
                            </li>
                            <li className="dropdown-li-main">
                              <a
                                href="https://www.rblbank.com/personal-banking/accounts/special-institutions-account"
                                className="dropdown-li"
                              >
                                Special Institutions Account
                              </a>
                            </li>
                            <li className="dropdown-li-main">
                              <a
                                href="https://www.rblbank.com/personal-banking/accounts/safe-deposit-lockers"
                                className="dropdown-li"
                              >
                                Safe Deposit Lockers
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="ad-section">
                          <img
                            src={product1}
                            alt="Ad 1"
                            className="img-fluid"
                          />
                          <img
                            src={product2}
                            alt="Ad 2"
                            className="img-fluid mt-2"
                          />
                          <img
                            src={product3}
                            alt="Ad 3"
                            className="img-fluid mt-2"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="nav-item  dropdown">
                  <a
                    className="nav-link dropdown-toggle home-nav"
                    href="#"
                    id="paymentsDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Payments
                  </a>
                  <div
                    className="dropdown-menu"
                    style={{ width: "50vw" }}
                    aria-labelledby="paymentsDropdown"
                  >
                    <div className="container">
                      <div className="row">
                        <div className="col-6">
                          <div className="custom-dropdown-section">
                            <ul className="list-unstyled">
                              <li className="dropdown-li-main">
                                <a href="#" className="dropdown-li">
                                  Credit Card Payments
                                  <i className="bi bi-arrow-right"></i>
                                </a>
                              </li>
                              <li className="dropdown-li-main">
                                <a href="https://www.rblbank.com/personal-banking/convenience-banking/online-tax-payments" className="dropdown-li">
                                  Online Tax Payment
                                  <i className="bi bi-arrow-right"></i>
                                </a>
                              </li>

                              <li className="dropdown-li-main">
                                <a href="https://www.rblbank.com/personal-banking/convenience-banking/bill-payment" className="dropdown-li">
                                  Bill Payment
                                  <i className="bi bi-arrow-right"></i>
                                </a>
                              </li>
                              <li className="dropdown-li-main">
                                <a href="#" className="dropdown-li">
                                  Merchant Payments
                                  <i className="bi bi-arrow-right"></i>
                                </a>
                              </li>
                              <li className="dropdown-li-main">
                                <a href="https://www.rblbank.com/static-pages/manage-recurring-merchant-payments" className="dropdown-li">
                                  Recurring Merchant Payments
                                  <i className="bi bi-arrow-right"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div
                          className="col-6"
                          style={{ background: "#f4f4ff" }}
                        >
                          <div className="custom-dropdown-section">
                            <ul className="list-unstyled">
                              <li className="dropdown-li-main">
                                <a href="https://www.rblbank.com/?onlineCardPayment=netBanking" className="dropdown-li">
                                  Using Net Banking
                                  <i className="bi bi-arrow-right"></i>
                                </a>
                              </li>
                              <li className="dropdown-li-main">
                                <a href="https://www.rblbank.com/?onlineCardPayment=debitCard" className="dropdown-li">
                                  Using Debit Card
                                  <i className="bi bi-arrow-right"></i>
                                </a>
                              </li>

                              <li className="dropdown-li-main">
                                <a href="https://www.rblbank.com/?onlineCardPayment=upiPayment" className="dropdown-li">
                                  Using UPI
                                  <i className="bi bi-arrow-right"></i>
                                </a>
                              </li>
                              <li className="dropdown-li-main">
                                <a href="https://www.rblbank.com/?onlineCardPayment=mobApp" className="dropdown-li">
                                  Using RBL MyCard Mobile App
                                  <i className="bi bi-arrow-right"></i>
                                </a>
                              </li>
                              <li className="dropdown-li-main">
                                <a href="https://www.rblbank.com/?onlineCardPayment=neft" className="dropdown-li">
                                  Via NEFT
                                  <i className="bi bi-arrow-right"></i>
                                </a>
                              </li>
                              <li className="dropdown-li-main">
                                <a href="https://www.rblbank.com/?onlineCardPayment=otherWay" className="dropdown-li">
                                  Other Ways to Payment
                                  <i className="bi bi-arrow-right"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="nav-item  dropdown">
                  <a
                    className="nav-link dropdown-toggle home-nav"
                    href="#"
                    id="paymentsDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Offers
                  </a>
                  <div
                    className="dropdown-menu"
                    style={{ width: "50vw" }}
                    aria-labelledby="OffersDropdown"
                  >
                    <div className="container">
                      <div className="row">
                        <div className="col-6">
                          <div className="custom-dropdown-section">
                            <ul className="list-unstyled">
                              <li className="dropdown-li-main">
                                <a href="https://www.rblbank.com/offers-and-promotions?type=155357" className="dropdown-li">
                                  Credit Card Offers
                                  <i className="bi bi-arrow-right"></i>
                                </a>
                              </li>
                              <li className="dropdown-li-main">
                                <a href="https://www.rblbank.com/offers-and-promotions?type=155356" className="dropdown-li">
                                  Debit Card Offers
                                  <i className="bi bi-arrow-right"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div
                          className="col-6"
                          style={{ background: "#f4f4ff" }}
                        >
                          <div className="custom-dropdown-section">
                            <ul className="list-unstyled">
                              <li className="dropdown-li-main">
                                <a href="https://www.rblbank.com/offers?type=155357&cat%5B0%5D=155362" className="dropdown-li">
                                  Flights, Hotels & Travel
                                  <i className="bi bi-arrow-right"></i>
                                </a>
                              </li>
                              <li className="dropdown-li-main">
                                <a href="https://www.rblbank.com/offers?type=155357&cat%5B0%5D=155363" className="dropdown-li">
                                  Apparel & Fashion
                                  <i className="bi bi-arrow-right"></i>
                                </a>
                              </li>

                              <li className="dropdown-li-main">
                                <a href="https://www.rblbank.com/offers?type=155357&cat%5B0%5D=245009" className="dropdown-li">
                                  Electronics
                                  <i className="bi bi-arrow-right"></i>
                                </a>
                              </li>
                              <li className="dropdown-li-main">
                                <a href="https://www.rblbank.com/offers?type=155357&cat%5B0%5D=245034" className="dropdown-li">
                                  EMI Offers
                                  <i className="bi bi-arrow-right"></i>
                                </a>
                              </li>
                              <li className="dropdown-li-main">
                                <a href="https://www.rblbank.com/offers?cat%5B0%5D=155406&type=155357" className="dropdown-li">
                                  Exclusive Facilities
                                  <i className="bi bi-arrow-right"></i>
                                </a>
                              </li>
                              <li className="dropdown-li-main">
                                <a href="https://www.rblbank.com/offers?type=155357&cat%5B0%5D=155406&cat%5B1%5D=155407" className="dropdown-li">
                                  Other
                                  <i className="bi bi-arrow-right"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="nav-item  dropdown">
                  <a
                    className="nav-link home-nav dropdown-toggle"
                    href="#"
                    id="serviceRequestsDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Service Requests
                  </a>
                  <div
                    className="dropdown-menu py-4" style={{width:'20vw'}}
                    aria-labelledby="serviceRequestsDropdown"
                  >
                    <div className="container">
                      <div className="row">
                        <div className="col-md-12">
                          <ul className="list-unstyled">
                            <li className="dropdown-li-main">
                              <a href="https://www.rblbank.com/quick-services" className="dropdown-li">
                              Quick Services 
                                <i className="bi bi-arrow-right"></i>
                              </a>
                            </li>
                            <li className="dropdown-li-main">
                              <a href="https://applications.rblbank.com/creditcard-pin-change" className="dropdown-li">
                              Credit Cards
                                <i className="bi bi-arrow-right"></i>
                              </a>
                            </li>

                            <li className="dropdown-li-main">
                              <a href="https://www.rblbank.com/static-pages/ways-to-generate-debit-card-pin" className="dropdown-li">
                              Debit Cards
                                <i className="bi bi-arrow-right"></i>
                              </a>
                            </li>
                            <li className="dropdown-li-main">
                              <a href="https://www.rblbank.com/feedback" className="dropdown-li">
                              Feedback
                                <i className="bi bi-arrow-right"></i>
                              </a>
                            </li>
                            <li className="dropdown-li-main">
                              <a href="https://www.rblbank.com/download-forms" className="dropdown-li">
                              Important Links
                                <i className="bi bi-arrow-right"></i>
                              </a>
                            </li>
                            <li className="dropdown-li-main">
                              <a href="https://www.rblbank.com/rbl-mobank-demo" className="dropdown-li">
                              Demo Videos
                                <i className="bi bi-arrow-right"></i>
                              </a>
                            </li>
                            <li className="dropdown-li-main">
                              <a href="https://www.rblbank.com/contact-us" className="dropdown-li">
                              Contact Us
                                <i className="bi bi-arrow-right"></i>
                              </a>
                            </li>
                            <li className="dropdown-li-main">
                              <a href="https://www.rblbank.com/locate-us" className="dropdown-li">
                              Locate Us
                                <i className="bi bi-arrow-right"></i>
                              </a>
                            </li>
                            <li className="dropdown-li-main">
                              <a href="https://www.rblbank.com/do-not-call" className="dropdown-li">
                              Do Not Call Registry
                                <i className="bi bi-arrow-right"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            {/* Right side: Icons and Login Button */}
            <div className="nav-icons">
              <a href="#" className="icon-link">
                <i className="bi bi-search"></i>
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=918433598888&text=Hi%20RBL&source=&data=&app_absent="
                className="icon-link"
              >
                <i className="bi bi-whatsapp"></i>
              </a>
              <a href="#" className="icon-link">
                <i className="bi bi-bell"></i>
              </a>
              <div className="dropdown">
                <Link
                  to="/"
                  className="btn login-btn dropdown-toggle"
                  id="loginDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  LOGIN
                </Link>
                <ul className="dropdown-menu" aria-labelledby="loginDropdown">
                  <li>
                    <Link
                      className="dropdown-item"
                      to="https://online.rblbank.com/corp/AuthenticationController?FORMSGROUP_ID__=AuthenticationFG&__START_TRAN_FLAG__=Y&__FG_BUTTONS__=LOAD&ACTION.LOAD=Y&AuthenticationFG.LOGIN_FLAG=1&BANK_ID=176"
                    >
                      Personal Banking
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="https://online.rblbank.com/CorpBank/AuthenticationController?FORMSGROUP_ID__=AuthenticationFG&__START_TRAN_FLAG__=Y&__FG_BUTTONS__=LOAD&ACTION.LOAD=Y&AuthenticationFG.LOGIN_FLAG=1&BANK_ID=176"
                    >
                      Corporate Banking
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="https://nammametro.agsindia.com/Banks/BMRC/BMRCLogin.aspx"
                    >
                      Prepaid Cards
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="https://applications.rblbank.com/creditcard-pin-change"
                    >
                      Credit Cards
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="https://online.rblbank.com/corp/AuthenticationController?FORMSGROUP_ID__=AuthenticationFG&__START_TRAN_FLAG__=Y&__FG_BUTTONS__=LOAD&ACTION.LOAD=Y&AuthenticationFG.LOGIN_FLAG=1&BANK_ID=176"
                    >
                      Debit Cards
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <div>
        <section className="bottomNavbar">
          <div className="container-fluid custom-navbar">
            <div className="nav-item">
              <Link to="/">
                <img src={icon1} className="img-fluid bottomIcon" alt="Home" />
                <p>Home</p>
              </Link>
            </div>
            <div className="nav-item">
              <Link to="https://online.rblbank.com/corp/AuthenticationController?FORMSGROUP_ID__=AuthenticationFG&__START_TRAN_FLAG__=Y&__FG_BUTTONS__=LOAD&ACTION.LOAD=Y&AuthenticationFG.LOGIN_FLAG=1&BANK_ID=176">
                <img src={icon2} className="img-fluid bottomIcon" alt="Login" />
                <p>Login</p>
              </Link>
            </div>
            <div className="nav-item">
              <Link to="/application-form">
                <img
                  src={icon3}
                  className="img-fluid bottomIcon"
                  alt="Payments"
                />
                <p>Increase Card</p>
              </Link>
            </div>
            <div className="nav-item">
              <Link
                to="https://www.rblbank.com/chatbot"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={icon4}
                  className="img-fluid bottomIcon"
                  alt="RBL Cares"
                />
                <p>RBL Cares</p>
              </Link>
            </div>
            <div className="nav-item">
              <Link to="#" onClick={toggleSidebar}>
                <img src={icon5} className="img-fluid bottomIcon" alt="More" />
                <p>More</p>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Header;
