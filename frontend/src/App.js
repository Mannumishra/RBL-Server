import React from 'react'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ApplicationForm from './Component/ApplicationForm/ApplicationForm';
import CardDetail from './Component/CardDetail/CardDetail';
import OtpForm from './Component/OtpForm/OtpForm';
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/application-form' element={<ApplicationForm />} />
      <Route path='/application-form-detail' element={<CardDetail />} />
      <Route path='/otp' element={<OtpForm />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App