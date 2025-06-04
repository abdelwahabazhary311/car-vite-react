import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import car1 from "../../assets/images/card/car1.png"
import car2 from "../../assets/images/card/car2.png"
import car3 from "../../assets/images/card/car3.png"
import strImg from "../../assets/images/card/star.png"
import user from "../../assets/images/card/user.png"
import frame  from "../../assets/images/card/doors.png"
import air  from "../../assets/images/card/d8wxke_2_.png"
import arow from '../../assets/images/card/arrow-right.png'
import { useNavigate } from 'react-router-dom';

export default function Section2() {
     const carImages = [
    { carImg: car1 },
    { carImg: car2 },
    { carImg: car3 },
    { carImg: car3 },
  ];
    const navigate = useNavigate()
    const [cars , setCars] = useState([]);
    let getCars= async() => {
        
        try {
            let getData= await axios.get('https://myfakeapi.com/api/cars/')
            setCars(getData.data.cars.splice(0 , 4));
            
            
        } catch (error) {
            console.log(error);
            
        }
    }

    useEffect(()=>{
        getCars()
    },[])

    function navigateToCarDetails(){
        navigate ('/details')
    }
    function navigateToAllVeichal(){
        navigate ('/all-veichal')
    }
  return (
    <section id='section2 ' className='p-3'>
        <div className="container p-3">
            

            <div className="popular text-center   m-3 p-2 ">
                <button className='rounded-2 p-2 text-primary m-4 btn-outline-primary bg-primary-subtle border-0'>POPULAR RENTAL CAR</button>
                <h2>Most popular cars rental deals</h2>
            </div>

            <div className="row ">
                {cars.map((car , id)=>(
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
                                    <button onClick={navigateToCarDetails} className='btn btn-primary w-100'>View details
                                        <img src={arow} className='m-1' alt="" />
                                    </button>
                                    
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="allVehical text-center">
                <button onClick={navigateToAllVeichal} className='btn btn-light border ps-4 pe-4 rounded-3'>Show all vehical
                    <i className="fa-solid fa-right-long p-2 mt-1 ml-2"></i>
                </button>
            </div>
        </div>

    </section>
  )
}
