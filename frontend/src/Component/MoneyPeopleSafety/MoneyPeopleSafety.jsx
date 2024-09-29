import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Import local images
import holidayImg from "../../Images/quickImage1.jpg";
import savingsImg from "../../Images/quickImage2.jpg";
import creditCardImg from "../../Images/quickImage3.jpg";
import scamImg from "../../Images/quickImage4.jpg";
import "./moneypeople.css";
import image1 from "../../Images/gplay.png";
import image2 from "../../Images/app-iphone-store.png";
// Data for the cards
const cardInfo = [
  {
    date: "September 26, 2024",
    title: "Top 10 National and International Holiday Destinations",
    imgUrl: holidayImg,
    link: "#",
  },
  {
    date: "September 21, 2024",
    title: "6 Tips for Effective Savings Account Management",
    imgUrl: savingsImg,
    link: "#",
  },
  {
    date: "September 13, 2024",
    title: "Know the eligibility criteria applicable for a Credit Card",
    imgUrl: creditCardImg,
    link: "#",
  },
  {
    date: "September 02, 2024",
    title: "How to Spot and Avoid Impersonation Scams",
    imgUrl: scamImg,
    link: "#",
  },
];

// Card component
const BootstrapCard = ({ date, title, imgUrl }) => (
  <div
    className="card shadow-sm custom-card-bg"
    style={{
      backgroundImage: `url(${imgUrl})`,
      backgroundSize: "cover",
      backgroundPosition: "top",
      position: "relative",
      height: "100%", // Ensuring the card takes full height
    }}
  >
    <div className="overlay">
      <div
        className="card-body text-white moneyPeoplecard"
      >
        <p className="custom-card-date">{date}</p>
        <h5 className="custom-card-title">{title}</h5>
      </div>
    </div>
  </div>
);

// Main Section component
const BootstrapCardSection = () => {
  return (
    <>
      <section className="py-5" style={{background:'rgb(244, 245, 252)'}}>
        <div className="container">
          <h2 className="mb-5 fs-1">Money, People & Safety</h2>
          <div className="row">
            {cardInfo.map((card, index) => (
              <div className="col-lg-3 col-md-6 mb-4" key={index}>
                <BootstrapCard
                  date={card.date}
                  title={card.title}
                  imgUrl={card.imgUrl}
                />
              </div>
            ))}
          </div>
          <div className="mt-3 text-center">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://blog.rblbank.com/"
              className="knowmorebtn btn btn-primary"
            >
              View All
            </a>
          </div>
        </div>
      </section>
      <section>
        <div className="rblCardApp">
          <div className="row">
            <div className="col-md-6"></div>
            <div className="col-md-6">
              <div className="text-center p-4">
                <h2 className="display-4"><b>RBL MyCard App</b></h2>

                <div className="banner-para my-3">
                  <p className="safe-simple">
                    Safe <span className="mx-2">|</span> Simple{" "}
                    <span className="mx-2">|</span> Fast
                  </p>
                </div>

                <div className="d-flex justify-content-center mt-4">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.rbl.rblmycard"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-2"
                  >
                    <img
                      alt="App Google Play"
                      className="img-fluid"
                      src={image1}
                      style={{ width: "160px" }}
                    />
                  </a>
                  <a
                    href="https://itunes.apple.com/in/app/rbl-mycard/id1094968214"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-2"
                  >
                    <img
                      alt="App iPhone Store"
                      className="img-fluid"
                      src={image2}
                      style={{ width: "160px" }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BootstrapCardSection;
