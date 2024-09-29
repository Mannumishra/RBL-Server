import React from "react";
// import cardBanner1 from "../../Images/bannerOtherSection1.jpg";
// import cardBanner2 from "../../Images/bannerOtherSection2.jpg";
import image from "../../Images/hero.png";
import superCardImage from "../../Images/super-card.png";
import rewardsProgramImage from "../../Images/RewardsProgram.png";
import "./card.css";
import video1 from "../../Images/video1.mp4";
import { Link } from "react-router-dom";
const CardCarousel = () => {
  return (
    <>
      <section className="hometop">
        <div className="homeInner">
          <div className="row align-items-center">
            {/* Left Side: Text Content */}
            <div className="col-md-7 col-sm-12 order-2 order-md-1">
              <div className="p-4 creditcard rounded shadow">
                <h1>Credit Cards</h1>
                <p className="mb-0 card-hea">
                Find the best credit card for you – one card, endless possibilities. Increase your card limit and maximize your rewards and convenience with our best credit card tailored to your needs.
                </p>
                <p className="fst-italic mb-0">
                  Maximize your rewards and convenience with our best credit
                  card for your needs.
                </p>
                <div className="tc">
                  <Link to="/application-form" className="custom-btn primary-btn">
                    Increase Card
                  </Link>
                  <small className="text-muted">*T&C Apply</small>
                </div>
              </div>
            </div>

            {/* Right Side: Image */}
            <div className="col-md-5 col-sm-12 order-1 order-md-2 text-center">
              <img src={image} alt="Credit Cards" className="img-fluid credit-image" />
            </div>
          </div>
        </div>
      </section>
      <section className="video-section">
        <div className="container">
        <h1 className="pt-5">Pick the Best for You</h1>
          <div className="video-wrapper">
            <video
              className="custom-video"
              width="100%"
              height="500"
              src={video1}
              autoPlay
              muted
              loop
            ></video>
          </div>
        </div>
      </section>
        <div className="d-flex justify-content-center mt-3">
        <a className="knowmorebtn" target="_blank" href="https://www.rblbank.com/personal-banking/cards/credit-cards/category">Explore All Cardds </a>
        </div>
      <section className="container mt-5">
        <div className="row">
          {/* First Box */}
          <div className="col-md-6 col-sm-12 custom-column first-box">
            <div className="custom-box card-box-1 d-flex justify-content-between align-items-center">
              <div className="box-content">
                <h5 className="box-heading">
                  Bajaj Finserv RBL Bank SuperCards
                </h5>
                <button className="custom-btn primary-btn">Explore More</button>
              </div>
              <div className="box-image">
                <img
                  src={superCardImage}
                  alt="SuperCard"
                  className="custom-img"
                />
              </div>
            </div>
          </div>

          {/* Second Box */}
          <div className="col-md-6 col-sm-12 custom-column second-box">
            <div className="custom-box card-box-2 d-flex justify-content-between align-items-center">
              <div className="box-content">
                <h5 className="box-heading">Rewards Program</h5>
                <button className="custom-btn primary-btn">Explore More</button>
              </div>
              <div className="box-image">
                <img
                  src={rewardsProgramImage}
                  alt="Rewards Program"
                  className="custom-img"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="container py-5">
          <p className="para">
            We offer credit cards on MasterCard, RuPay & Visa. You can select
            the card variant from the network of your choice. Click here for
            more details.
          </p>
          <p className="para">
            Existing cardmembers wishing to explore an alternate network on
            their existing RBL Bank Credit Card, can call helpline at +91 22
            6232 7777. Click here to check for available network(s) on your
            existing card.
          </p>
        </div>
      </section>
    </>
  );
};

export default CardCarousel;
