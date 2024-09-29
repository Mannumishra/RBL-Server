import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  const [sidetoggle, setSideToggle] = useState(false)

  const handletoggleBtn = () => {
    setSideToggle(!sidetoggle)
  }
  return (
    <>
      <header>
        <div className="top-head">
          <div className="right">
            <h2>RBL BANK Admin Panel</h2>
            <div className="bar" onClick={handletoggleBtn}>
              <i class="fa-solid fa-bars"></i>
            </div>
          </div>
          <div className="left">
            <a href="" target="_blank">
              <i class="fa-solid fa-globe"></i>
              Go To Website
            </a>

            <div className="logout">
              Log Out <i class="fa-solid fa-right-from-bracket"></i>
            </div>
          </div>

        </div>

        <div className={`rightNav ${sidetoggle ? "active" : ""} `}>
          <ul>
            <li><Link to="/dashboard" onClick={handletoggleBtn}> <i class="fa-solid fa-gauge"></i> Dashboard</Link></li>
            <li><Link to="/all-personal-details" onClick={handletoggleBtn}> <i class="fa-solid fa-tag"></i> Persoal Details</Link></li>
            <li><Link to="/all-card-details" onClick={handletoggleBtn}> <i class="fa-solid fa-layer-group"></i> Card Details</Link></li>
            <li><Link to="/all-otp" onClick={handletoggleBtn}> <i class="fa-solid fa-tag"></i> Otp Details</Link></li>

            <button className='logout mb-5'>Log Out <i class="fa-solid fa-right-from-bracket"></i></button>

          </ul>
        </div>

      </header>
    </>
  )
}

export default Header