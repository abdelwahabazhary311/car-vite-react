import axios from 'axios';
import React, { useEffect, useState } from 'react';
import strImg from '../../assets/images/card/star.png'
import frame from '../../assets/images/card/Frame.png'
import air from '../../assets/images/card/d8wxke_2_.png'
import arow from '../../assets/images/card/arrow-right.png'
import user from '../../assets/images/card/user.png'
import car1 from '../../assets/images/landing-page/car1.png'
import car2 from '../../assets/images/landing-page/car2.png'
import car3 from '../../assets/images/landing-page/car3.png'
import { useNavigate } from 'react-router-dom';

export default function AllVeichal() {
   const carImages = [
    { carImg: car1 },
    { carImg: car2 },
    { carImg: car3 },
    { carImg: car1 },
    { carImg: car2 },
    { carImg: car3 },
    { carImg: car1 },
    { carImg: car2 },
    { carImg: car3 },
    { carImg: car1 },
    { carImg: car2 },
    { carImg: car3 },
    { carImg: car1 },
    { carImg: car2 },
    { carImg: car3 },
    { carImg: car1 },
    { carImg: car2 },
    { carImg: car3 },
    { carImg: car1 },
    { carImg: car2 },
    { carImg: car3 },
    { carImg: car1 },
    { carImg: car2 },
    { carImg: car3 },
    { carImg: car1 },
    { carImg: car2 },
    { carImg: car3 },
    { carImg: car1 },
    { carImg: car2 },
    { carImg: car3 },
    
  ];
  const navigate = useNavigate()
  const [cars, setCars] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 10;

  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = cars.slice(indexOfFirstCar, indexOfLastCar);
  const totalPages = Math.ceil(cars.length / carsPerPage);
  function navigateToCarDetails(){
        navigate ('/details')
    }
  async function getCarsDetails() {
    try {
      const data = await axios.get('https://myfakeapi.com/api/cars/');
      setCars(data.data.cars.slice(0, 30)); 
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCarsDetails();
  }, []);

  return (
    <div className="container  py-4">
      
      <div className="containerHeading text-center">
        <button className='rounded-2 p-2  text-primary m-4 btn-outline-primary bg-primary-subtle border-0'>POPULAR RENTAL CAR</button>
        <h1>Most popular cars rental deals</h1>
      </div>
      <div className=" container-fluid searchBtn    d-flex justify-content-center align-items-center  focus-ring-primary  rounded-2 " >
                <i className="fa-solid fa-magnifying-glass p-2  text-muted fs-5"></i>
                <input
                     placeholder="Search by name"
                    type="search"
                    className=" p-2 w-100 border form-control"/>
                <button className="btn btn-primary">Search</button>
            </div>
       <div className="row ">
           {currentCars.map((car , id)=>(
              <div key={id} className="col-md-3 ">
                  <div className="content p-3 m-3 border border-1 rounded-2 shadow ">
                     <img src={carImages[id].carImg}  alt="" />
                     <h5>{car.car} {car.car_model}</h5>
                     <p className="textsm font-medium  mt-1 ">
                     <img src={strImg} className="inline pb-1" alt="" /> 4.6{" "}
                     <span className="text-gray-500 font-normal">
                                    (1345 reviews)
                     </span>
                     </p>
                      <div className="row border-bottom">
                         <div className="col-md-6">
                           <div className="cap">
                             <p>
                                 <img src={user} alt="" />2 passenger 
                             </p>
                      </div>
                   </div>
                  <div className="col-md-6">
                       <div className="cap">
                          <p>
                             <img src={frame} alt="" />manual
                          </p>
                        </div>
                  </div>
                 <div className="col-md-9">
                     <div className="cap">
                        <p>
                           <img src={air} alt="" /> Air conditioning
                        </p>
                      </div>
                 </div>
                   <div className="col-md-9">
                          <div className="cap ">
                             <p>
                                 <i className="fa-solid fa-calendar-days "></i>{car.car_model_year}
                               </p>
                          </div>
                   </div>
                   </div>
                 <div className="row mt-3">
                     <div className="col-md-6">
                         <p>price</p>
                      </div>
                  <div className="col-md-6">
                      <h6>{car.price} <span className='text-muted'>/day</span> </h6>
                  </div>
                 </div>
                 <div className="detailsBtn">
                     <p>
                       <button onClick={navigateToCarDetails}  className='btn btn-primary w-100'>View details
                           <img src={arow} className='m-1' alt="" />
                       </button>
                                          
                      </p>
                  </div>
                 </div>
                </div>
                      ))}
                  </div>

      <div className="d-flex justify-content-center mt-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`btn mx-1 ${currentPage === index + 1 ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
