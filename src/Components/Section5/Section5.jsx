import React from 'react';
import boyImg from '../../assets/images/landing-page/Rectangle 8 (1).png';
import girlImg from '../../assets/images/landing-page/girl.png';
import strImg from '../../assets/images/card/star.png';

export default function Section5() {
  const strCount = 5;

  const testimonials = [
    {
      imgSrc: boyImg,
      name: 'Charlie Johnson',
      feedback:
        "I feel very secure when using caretall's services. Your customer care team is very enthusiastic and the driver is always on time.",
    },
    {
      imgSrc: girlImg,
      name: 'Anna Smith',
      feedback:
        "The whole rental process was smooth. The support team was always ready to help. Highly recommended!",
    },
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container text-center">
        <button className="rounded-2 px-3 py-2 text-primary mb-4 btn-outline-primary bg-primary-subtle border-0">
          TESTIMONIALS
        </button>
        <h2 className="mb-5 fw-bold">Most popular cars rental deals</h2>

        <div className="row g-4">
          {testimonials.map((item, index) => (
            <div key={index} className="col-md-6 text-start">
              <div className="cap d-flex flex-md-row flex-column align-items-start shadow-sm border-0 rounded-3 p-3 h-100 bg-white">
                <div
                  className="capImg mb-3 mb-md-0 me-md-3"
                  
                >
                  <img src={item.imgSrc}  alt="testimonial" />
                </div>
                <div className="capContent">
                  <h5 className="fw-bold">5.5 stars</h5>
                  <div className="mb-2">
                    {Array.from({ length: strCount }).map((_, i) => (
                      <img
                        key={i}
                        src={strImg}
                        alt="star"
                        style={{ width: '16px', marginRight: '2px' }}
                      />
                    ))}
                  </div>
                  <p
                    className="text-muted"
                    style={{ fontSize: '14px', lineHeight: '1.6' }}
                  >
                    “{item.feedback}”
                  </p>
                  <h6 className="fw-semibold">{item.name}</h6>
                  <p className="text-muted mb-0" style={{ fontSize: '12px' }}>
                    Last updated 3 mins ago
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
