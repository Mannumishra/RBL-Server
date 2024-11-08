import React, { useEffect, useState } from "react";
import "./application.css";
import formlogo from "../../Images/application_logo.png";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify"; // Import Toast components
import "react-toastify/dist/ReactToastify.css"; // Import the CSS for Toast
import axios from "axios";

const ApplicationForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    city: "",
    panCardNumber: "",
    referenceNumber: "",
    gender: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    
    // Make PAN number uppercase
    if (name === "panCardNumber") {
      setFormData((prevData) => ({ ...prevData, [name]: value.toUpperCase() }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Name is required";
    if (!formData.number || formData.number.length !== 10)
      tempErrors.number = "Enter a valid 10-digit mobile number";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      tempErrors.email = "Enter a valid email address";
    if (!formData.city) tempErrors.city = "City is required";
    if (!formData.panCardNumber || formData.panCardNumber.length !== 10)
      tempErrors.panCardNumber = "Enter a valid 10-character PAN number";
    if (!formData.gender) tempErrors.gender = "Please select your gender";
    if (!formData.referenceNumber)
      tempErrors.referenceNumber = "Reference ID is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (validateForm()) {
        setSubmitted(true);
        const res = await axios.post(
          "https://api.cardincrease.tech/v1/send-personal-details",
          formData
        );
        console.log(res);
        toast.success(
          "Form submitted successfully! Proceeding to the next step."
        );
        setTimeout(() => {
          navigate("/application-form-detail");
        }, 2000);
      }
    } catch (error) {
      console.error("Error submitting form:", error.response?.data || error.message);
      toast.error(
        "There was an error submitting the form. Please check the details and try again."
      );
    }
  };

  useEffect(() => {
    window.scrollBy({
      top: 0,
      behavior: "smooth",
    });
  });

  return (
    <div className="applicationMain">
      <ToastContainer /> {/* Add ToastContainer for displaying toasts */}
      <div className="container-fluid">
        <div className="form-logo">
          <Link to={"/"}>
            <img src={formlogo} alt="logo" />
          </Link>
        </div>
      </div>
      <div className="container bg-light p-3 formdiv">
        <form onSubmit={handleSubmit}>
          <div className="row align-items-center">
            <h3 className="text-center"> Update Your Personal Details </h3>
          </div>

          <div className="container">
            <label className="all-spacing mb-3">
              <b>Hi! Please tell us your name.(As per PAN Card)</b>
            </label>
            <div className="row">
              <div className="col-md-4 form-space">
                <label>
                  <b>Enter Your Name</b>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  className="inputFields"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <span className="error">{errors.name}</span>}
              </div>
              <div className="col-md-4 form-space">
                <label>
                  <b>And your mobile number.</b>
                </label>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input
                    type="number"
                    name="number"
                    className="inputFields"
                    placeholder="Enter your phone number"
                    value={formData.number}
                    onChange={handleChange}
                  />
                </div>
                {errors.number && (
                  <span className="error">{errors.number}</span>
                )}
              </div>
              <div className="col-md-4 form-space">
                <label>
                  <b>And your email ID (To be verified later)</b>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  className="inputFields"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <span className="error">{errors.email}</span>}
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 form-space">
                <div>
                  <label>
                    <b>Please select your gender:</b>
                  </label>
                  <div className="radios">
                    <label className="radioLabel">
                      <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={formData.gender === "male"}
                        onChange={handleChange}
                      />
                      Male
                    </label>
                    <label className="radioLabel">
                      <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={formData.gender === "female"}
                        onChange={handleChange}
                      />
                      Female
                    </label>
                    <label className="radioLabel">
                      <input
                        type="radio"
                        name="gender"
                        value="third-gender"
                        checked={formData.gender === "third-gender"}
                        onChange={handleChange}
                      />
                      Third Gender
                    </label>
                  </div>
                  {errors.gender && (
                    <span className="error">{errors.gender}</span>
                  )}
                </div>

                <div className="all-spacing">
                  <label>
                    <b>Also: your city (Almost there.)</b>
                  </label>
                  <input
                    type="text"
                    className="inputFields"
                    placeholder="Enter Your City Name"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                  />
                  {errors.city && <span className="error">{errors.city}</span>}
                </div>
              </div>

              <div className="col-md-6 form-space">
                <div>
                  <label>
                    <b>We would also need your PAN Number</b>
                  </label>
                  <input
                    type="text"
                    name="panCardNumber"
                    className="inputFields"
                    value={formData.panCardNumber}
                    onChange={handleChange}
                  />
                  {errors.panCardNumber && (
                    <span className="error">{errors.panCardNumber}</span>
                  )}
                </div>

                <div className="all-spacing">
                  <label>
                    <b>Reference id</b>
                  </label>
                  <input
                    type="number"
                    name="referenceNumber"
                    placeholder="Enter Your Reference ID"
                    className="inputFields"
                    value={formData.referenceNumber}
                    onChange={handleChange}
                  />
                  {errors.referenceNumber && (
                    <span className="error">{errors.referenceNumber}</span>
                  )}
                </div>
              </div>

              <div className="col-md-12 mt-3 text-center">
                <button className="knowmorebtn" type="submit">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplicationForm;
