import React from "react";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import CardCarousel from "../CardCarousel/CardCarousel";
import FixedDepositCalculator from "../FixedDepositCalculator/FixedDepositCalculator";
import OurProduct from "../OurProduct/OurProduct";
import Footer from "../Footer/Footer";
import QuickLinks from "../QuickLinks/QuickLinks";
import MoneyPeopleSafety from "../MoneyPeopleSafety/MoneyPeopleSafety";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <CardCarousel />
      <QuickLinks />
      <MoneyPeopleSafety />
      {/* <OurProduct /> */}
      <FixedDepositCalculator />
      <Footer />
    </>
  );
};

export default Home;
