import React from 'react';
import locImg from '../../assets/images/landing-page/location.png';
import carIcon from '../../assets/images/landing-page/car-icon.png';
import audiImg from '../../assets/images/landing-page/audi.png';
import jaguarImg from '../../assets/images/landing-page/jaguar.png';
import nissanImg from '../../assets/images/landing-page/nissan.png';
import volvoImg from '../../assets/images/landing-page/volvo.png';

export default function Section3() {
  const steps = [
    {
      img: locImg,
      title: 'Choose location',
      desc: 'Choose your and find your best car',
    },
    {
      img: carIcon,
      title: 'Pick-up date',
      desc: 'Select your pick up date and time to book your car',
    },
    {
      img: carIcon,
      title: 'Book your car',
      desc: 'Book your car and we will deliver it directly to you',
    },
  ];

  const carLogos = [audiImg, jaguarImg, volvoImg, nissanImg];

  return (
    <section className="py-5 px-3">
      <div className="container text-center py-4">
        <button className="rounded-2 p-2 text-primary mb-3 btn-outline-primary bg-primary-subtle border-0">
          HOW IT WORK
        </button>
        <h1 className="h3 mb-4">Most popular cars rental deals</h1>

        <div className="row gy-4">
          {steps.map((step, index) => (
            <div key={index} className="col-12 col-md-4">
              <div className="content px-3">
                <img src={step.img} alt={step.title} className="mb-3" />
                <h4>{step.title}</h4>
                <p className="text-muted">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="row mt-4 gy-3 justify-content-center">
          {carLogos.map((logo, index) => (
            <div key={index} className="col-6 col-sm-3 text-center">
              <div className="cap">
                <img src={logo} alt={`car-${index}`} className="img-fluid" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
