import React from 'react'
import logoImg from "../../assets/images/nav/logo.png"

export default function Navbar() {
  return (
     <nav className="navbar navbar-expand-lg  py-3">
      <div className="container">

        {/* Logo */}
        <a className="navbar-brand fw-bold" href="#">
          <img src={logoImg} alt="Logo" style={{ height: '40px' }} />
        </a>

        {/* Buttons*/}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* محتوى الناف بار */}
        <div className="collapse navbar-collapse justify-content-between" id="navbarContent">
          
          {/* اللينكات في النص */}
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item mx-2">
              <a className="nav-link active" href="#">Become renter</a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="#">Rental deals</a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="#"> How it work</a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="#"> Why chooes us</a>
            </li>
          </ul>

          {/* الأزرار على اليمين */}
          <div className="d-flex">
            <button className="btn btn-outline-primary me-2"> Sign in</button>
            <button className="btn btn-primary"> Sign up</button>
          </div>

        </div>
      </div>
    </nav>
  )
}
