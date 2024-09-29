import React from 'react';
import Slider from 'react-slick';
import './product.css';
import image1 from '../../Images/cardimage1.jpg'
import image2 from '../../Images/cardimage2.jpg'
import image3 from '../../Images/cardimage3.jpg'
import image4 from '../../Images/cardimage4.jpg'
const OurProducts = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Show 3 slides at once
        slidesToScroll: 1,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 768, // For tablet
                settings: {
                    slidesToShow: 2, // Show 2 slides on smaller screens
                },
            },
            {
                breakpoint: 480, // For mobile
                settings: {
                    slidesToShow: 1, // Show 1 slide on mobile
                },
            },
        ],
    };

    return (
      <>
        <div className="container my-5">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2>Our Products</h2>
            </div>
            <Slider {...settings}>
                {/* Slide 1 */}
                <div className="product-slide">
                    <div className="card">
                        <img src={image1} className="card-img-top" alt="ShopRite Credit Card" />
                        <div className="card-body card-slider-hero">
                            <h5 className="card-title product-title mb-5">ShopRite Credit Card</h5>
                            <div className='d-flex justify-content-between'>
                                <a href="#" className="knowmorebtn">Know More</a>
                                <a href="#" className="apply-btn">Apply Now</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Slide 2 */}
                <div className="product-slide">
                    <div className="card">
                        <img src={image2} className="card-img-top" alt="Digital Fixed Deposit" />
                        <div className="card-body card-slider-hero">
                            <h5 className="card-title product-title mb-5">Digital Fixed Deposit</h5>
                            <div className='d-flex justify-content-between'>
                                <a href="#" className="knowmorebtn">Know More</a>
                                <a href="#" className="apply-btn">Apply Now</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Slide 3 */}
                <div className="product-slide">
                    <div className="card">
                        <img src={image3} className="card-img-top" alt="Home Loan" />
                        <div className="card-body card-slider-hero">
                            <h5 className="card-title product-title mb-5">Home Loan</h5>
                            <div className='d-flex justify-content-between'>
                                <a href="#" className="knowmorebtn">Know More</a>
                                <a href="#" className="apply-btn">Apply Now</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-slide">
                    <div className="card">
                        <img src={image4} className="card-img-top" alt="Personal Loan" />
                        <div className="card-body card-slider-hero">
                            <h5 className="card-title product-title mb-5">Personal Loan</h5>
                            <div className='d-flex justify-content-between'>
                                <a href="#" className="knowmorebtn">Know More</a>
                                <a href="#" className="apply-btn">Apply Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
      </>
    );
};

export default OurProducts;
