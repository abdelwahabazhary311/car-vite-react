import React from 'react'
import style from './Footer.module.css'
import logo from '../../assets/images/footer/logo-footer.png'
import loc from '../../assets/images/footer/location.png'
import call from '../../assets/images/footer/call.png'
import sms from '../../assets/images/footer/sms.png'
import facebook from '../../assets/images/footer/facebook.png'
import instagram from '../../assets/images/footer/instagram.png'
import youtube from '../../assets/images/footer/youtube.png'
export default function Footer() {
  return (
    <section id='footer' className={`${style.bg} p-3 `}>
        <div className="container  border-bottom text-white">
            <div className="row">
               <div className=" col-12 col-md-6 col-lg-4 mb-4">
                    <img src={logo}className="mb-4" alt="" />
                    <div className="d-flex align-items-start mb-3">
                        <img src={loc} className="me-2" alt="location"  />
                        <p className="mb-0">25566 Hc 1, Glenallen, Alaska, 99588, USA</p>
                    </div>
                    <div className="d-flex align-items-start mb-3">
                        <img src={call} className="me-2" alt="CallImg"  />
                        <p className="mb-0">+603 4784 273 12</p>
                    </div>
                    <div className="d-flex align-items-start mb-3">
                        <img src={sms} className='me-2' alt="smsImg" />
                        <p className="mb-0">rentcars@gmail.com</p>
                    </div>

                </div>

                <div className="  col-12 col-md-6 col-lg-2 mb-4">
                    <h5 className='mb-4'>Our Products</h5>
                    <p className='small'>Career</p>
                    <p className='small'>Car</p>
                    <p className='small'>package</p>
                    <p className='small'>Feature</p>
                    <p className='small'>Priceline</p>
                </div>

                <div className="col-12 col-md-6 col-lg-2 mb-4">
                    <h5 className='mb-4'>Resources</h5>
                    <p className='small'>Download</p>
                    <p className='small'>Help Centre</p>
                    <p className='small'>Guides</p>
                    <p className='small'>Partner Network</p>
                    <p className='small'>criuses</p>
                    <p className='small'>Developer</p>
                </div>

                <div className="col-12 col-md-6 col-lg-2 mb-4">
                    <h5 className='mb-4'>About Rentcars</h5>
                    <p className='small'>Why choose us</p>
                    <p className='small'>Investor Relations</p>
                    <p className='small'>Our story</p>
                    <p className='small'>Press Center</p>
                    <p className='small'>Adventory</p>
                </div>

                <div className="col-12 col-md-12 col-lg-2 mb-4">
                    <h5 className='mx-2'>Follow us</h5>
                    <div className="d-flex">
                        <img className='mx-2' src={facebook} alt="" />
                        <img className='mx-2' src={instagram} alt="" />
                        <img className='mx-2' src={youtube} alt="" />
                    </div>
                </div>
            </div>

        </div>
        <div className=" container text-white  py-3 overflow-auto"><small>Copyright 2023 ・ Rentcars, All Rights Reserved</small></div>
    </section>
  )
}
