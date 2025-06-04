import React, { useEffect } from 'react'
import style from "./CarDetails.module.css"
import ImgDetails from '../../assets/images/landing-page/Audi 1.png'
import Aos from 'aos'
import user from '../../assets/images/card/user.png'
import frame from '../../assets/images/card/doors.png'
import dors from '../../assets/images/card/doors.png'
import air from '../../assets/images/card/d8wxke_2_.png'

export default function CarDetails() {
    useEffect(()=>{
        (
            Aos.init(
                {duration:2000 , once:true}
            )
        )
    },[])
  return (
    <section id='carDetails' className={`${style.bgDetails} mt-5 `}>
        <div className="container-fluid mt-4 ">
            <div className="row ">
                <div className="col-md-6">
                    <div className="cap">
                        <img   data-aos="zoom-in-right"  data-aos-duration="1500" data-aos-offset="300" data-aos-easing="ease-in-out" src={ImgDetails} className='w-75' alt="" />
                    </div>
                </div>
                <div className="col-md-6  ">
                    <div className="cap">
                        <button className='rounded-2 p-2 text-primary m-4 btn-outline-primary bg-primary-subtle border-0'>WHY CHOOS US</button>
                        <h3>We offer the best experience with our rental deals</h3>
                        <p className='text-sm text-gray-500 my-4'><img className=' pb-1' src={user} alt="" /> 2 Passanger</p>
                        <p className='text-sm text-gray-500 my-4'><img className=' pb-1' src={frame} alt="" /> Manual</p>
                        <p className='text-sm text-gray-500 my-4'><img className=' pb-1' src={air} alt="" /> Air conditioning</p>
                        <p className='text-sm text-gray-500 my-4'><img className=' pb-1' src={dors} alt="" /> Doors</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
