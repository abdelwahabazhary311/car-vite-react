import React, { useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import homeImg from "../../assets/images/landing-page/car 2 1.png"
import style from "./Section1.module.css"
import Aos from 'aos'
import 'aos/dist/aos.css';

export default function Section1() {
  useEffect(() => {
    Aos.init(
      {duration:2000 , once:true}
    )
  }, [])
  
  return (
    <div>
        
        <section data-aos="fade-down" data-aos-delay="200" id='home' className={`${style.bg}`}>
          <Navbar/>
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="cap ps-5 pt-5">
                  <h1>Find, book and rent</h1>
                  <h1>a car <span className='text-primary'> Easily</span></h1>
                  <p>Get a car wherever and whenever you need it <br /> with your  IOS and Android device.</p>
                </div>
              
              </div>
              <div className="col-md-6">
                 
                <div className="img"  data-aos="zoom-in" data-aos-duration="2000" data-aos-easing="ease-in-out">
                  <img src={homeImg} className="img-fluid w-100" alt="" />
                </div>
              
             
              </div>
            </div>
            <div className=" container-fluid searchBtn    d-flex justify-content-center align-items-center  focus-ring-primary  rounded-2 " >
                <i className="fa-solid fa-magnifying-glass p-2  text-muted fs-5"></i>
                <input
                     placeholder="Search by name"
                    type="search"
                    className=" p-2 w-100 border form-control"/>
                <button className="btn btn-primary">Search</button>
            </div>
          </div>
        </section>
    </div>
  )
}
