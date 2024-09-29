import React from "react";
import "./FixedDepositCalculator.css";
import image from '../../Images/mobile.svg'
const FixedDepositCalculator = () => {
  return (
    <div className="credit-card-payment">
      <div className="container credit-card-payment-container">
        <div className="otp-section">
          <div className="row">
            <div className="col-md-2 col-sm-12">
              <img src={image} className="img-fluid" alt="" />
            </div>
            <div className="col-md-10 col-sm-12">
              <p className="otp-title">
                Generate One Time Password instantly for IVR transactions
              </p>
              <p className="otp-description mb-5">
                Now you can generate One Time Password (OTP) instantly for IVR
                transactions on your RBL Bank Credit Card. To generate, SMS OTP
                &lt; last 4 digit of your Card &gt; to 5607011 from your
                registered mobile number.
              </p>

              <div className="payment-options-section">
                {/* Left Section */}
                <div className="payment-left">
                  <h6 className="payment-title mb-3">
                    Make Your Card Payments Instantly
                  </h6>
                  <ul className="payment-list">
                    <li>
                      <strong>NEFT:</strong> Online Credit Card Payment from
                      Your Bank Account
                    </li>
                    <li>
                      <strong>Online Card Payment:</strong> Online Credit Card
                      Payment
                    </li>
                    <li>
                      <strong>RBL Bank Net Banking:</strong> Online Credit Card
                      Payment using RBL Bank Account
                    </li>
                  </ul>
                </div>

                {/* Right Section */}
                <div className="payment-right">
                  <h6 className="payment-title">Other Modes of Payment:</h6>
                  <p className="payment-link">
                    <a target="_blank" href="https://www.rblbank.com/credit-card-payments">Click Here</a>
                  </p>
                  <h6 className="payment-title">
                    To know your Application Status:
                  </h6>
                  <p className="payment-link">
                    <a target="_blank" href="https://www.rblbank.com/static-pages/track-your-credit-card-application?itm_campaign=CreditCard&itm_medium=Website&itm_source=track-card-cc-lp-bottom">Click Here</a>
                  </p>
                </div>
              </div>

              <div className="disclaimer-section">
                <p className="disclaimer-text">
                  Once you apply for a credit card, it takes up to 20 days
                  (subject to you providing KYC and other details completely) to
                  process the application.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FixedDepositCalculator;
