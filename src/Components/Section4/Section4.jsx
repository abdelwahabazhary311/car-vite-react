import React from 'react'
import style from './Section4.module.css'
import carImg from '../../assets/images/landing-page/Audi 1.png'
import userImg from '../../assets/images/landing-page/user.png'
import chatImg from '../../assets/images/landing-page/chat.png'
import messageImg from '../../assets/images/landing-page/message.png'

export default function Section4() {
  return (
    <section className='mt-5 pt-5 pb-5'>
      <div className="container-fluid ">
        <div className="row">
          <div className={`col-12 col-md-6 mb-4 mb-md-0 px-0 ${style.bg}`}>
            <div className={`${style.contentImg} mt-5 pt-5`}>
              <img src={carImg} alt="Car" className="img-fluid w-75 mt-5 object-fit-cover" />
            </div>
          </div>
          <div className="col-12 col-md-6 p-3">
            <div className="content p-3">
              <button className='rounded-2 p-2 text-primary m-4 btn-outline-primary bg-primary-subtle border-0'>WHY CHOOSE US</button>
              <h2>We offer the best experience with our rental deals</h2>

              <div className="item d-flex mt-5">
                <div className="itemImg">
                  <img src={userImg} alt="" />
                </div>
                <div className="itemCap ms-3">
                  <h5>Best price guaranteed</h5>
                  <p className='text-muted'>Find a lower price? We’ll refund you 100% of the difference.</p>
                </div>
              </div>

              <div className="item d-flex mt-5">
                <div className="itemImg">
                  <img src={userImg} alt="" />
                </div>
                <div className="itemCap ms-3">
                  <h5>24 hour car delivery</h5>
                  <p className='text-muted'>Book your car anytime and we will deliver it directly to you.</p>
                </div>
              </div>

              <div className="item d-flex mt-5">
                <div className="itemImg">
                  <img src={chatImg} alt="" />
                </div>
                <div className="itemCap ms-3">
                  <h5>Best price guaranteed</h5>
                  <p className='text-muted'>Find a lower price? We’ll refund you 100% of the difference.</p>
                </div>
              </div>

              <div className="item d-flex mt-5">
                <div className="itemImg">
                  <img src={messageImg} alt="" />
                </div>
                <div className="itemCap ms-3">
                  <h5>24/7 technical support</h5>
                  <p className='text-muted'>Have a question? Contact Rentcars support any time when you have problem.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
