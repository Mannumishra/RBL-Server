import React, { useState } from "react";
import "./otpform.css";
import "../ApplicationForm/application.css";

import formlogo from "../../Images/application_logo.png";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const OtpForm = () => {
  const [otp, setOtp] = useState("");

  const correctOtp = "000000";

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const res = await axios.post("https://api.mycardincrease.online/v1/send-otp", { otp: otp })
      console.log(res)
      if (otp === correctOtp) {
        toast.success("Your form has been submitted successfully.");
      } else {
        toast.error("Invalid OTP. Please try again.");
      }
      setOtp("");
    } catch (error) {
      toast.error(error.response.data.message)
    }
  };

  const resendOTp = () => {
    toast.success("Otp Send Successfully")
  }

  return (
    <div className="otpMain">
      <div className="container-fluid">
        <div className="form-logo">
          <Link to={"/"}>
            <img src={formlogo} alt="logo" />
          </Link>
        </div>
      </div>
      <div className="container bg-light p-3 otpFormDiv">
        <h3 className="text-center mb-4">Enter OTP</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>
              <b>One Time Password (OTP)</b>
            </label>
            <input
              type="number"
              className="otpInputField"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
          </div>
          <div className="col-md-12 text-center">
            <p className="fs-5 mb-4">
              <p style={{ color: "red", cursor: "pointer" }} onClick={resendOTp}>Resend OTP</p>
            </p>
            <button type="submit" className="knowmorebtn">
              Submit
            </button>
          </div>
        </form>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default OtpForm;
