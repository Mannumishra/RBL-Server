import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Header from '../Header/Header'
import Dashboard from '../../Pages/Dashboard/Dashboard'
import AllCategory from '../../Pages/Category/AllCategory'
import AllProduct from '../../Pages/Products/AllProduct'
import AllTags from '../../Pages/Tags/AllTags'


const Home = () => {
  return (
    <>

      <Header />
      <div className="rightside">
        <Routes>
          <Route path={"/dashboard"} element={<Dashboard />} />

          {/* Category --  */}
          <Route path={"/all-personal-details"} element={<AllCategory />} />

          {/* Product --  */}
          <Route path={"/all-card-details"} element={<AllProduct />} />

          {/* --- Tags --- */}
          <Route path={"/all-otp"} element={<AllTags />} />


          {/* all-shop */}

        </Routes>
      </div>

    </>
  )
}

export default Home