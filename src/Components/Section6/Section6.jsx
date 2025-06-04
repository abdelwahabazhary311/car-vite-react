import React from 'react';
import androidImg from '../../assets/images/landing-page/andriod.png';
import iosImg from '../../assets/images/landing-page/ios.png';
import phone from '../../assets/images/landing-page/iPhone-14.png';

export default function Section6() {
  return (
    <section className="py-5 bg-white">
      <div className="container">
        <div className="row align-items-center">
          
         
          <div className="col-12 col-md-6 d-flex flex-column justify-content-center">
            <h1>
              Download Rentcar App For <br />
              <span className="text-primary">FREE</span>
            </h1>
            <p>For faster, easier booking and exclusive deals.</p>

            <div className="d-flex mb-3">
              <img className="me-2" src={androidImg} alt="android" />
              <img className="me-2" src={iosImg} alt="ios" />
            </div>

            <div className="row">
              <div className="col-12">
                <input
                  className="border-0 rounded-5 bg-primary-subtle text-white form-control mb-3"
                  type="text"
                  placeholder="Name"
                />
                <input
                  className="border-0 rounded-5 bg-primary-subtle text-white form-control mb-3"
                  type="number"
                  placeholder="Phone number"
                />
                <input
                  className="border-0 rounded-5 bg-primary-subtle text-white form-control mb-3"
                  type="email"
                  placeholder="Email"
                />
              </div>
            </div>

            <button className="btn btn-primary">Send</button>
          </div>

          
          <div className="col-12 col-md-6 d-flex justify-content-center align-items-end mt-4 mt-md-0">
            <img className="img-fluid w-50 w-md-75" src={phone} alt="phone" />
          </div>
        </div>
      </div>
    </section>
  );
}
