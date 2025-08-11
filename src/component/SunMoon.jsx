import React, { useContext } from 'react'
import { IoSunny } from "react-icons/io5";
import { FaCloudMoon } from "react-icons/fa6";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { IoMoon } from "react-icons/io5";
// import { userContext } from './header';
import { WeatherContext } from '../context/WeatherProvider';


const SunMoon = () => {
       let {data}= useContext(WeatherContext)
    
  return (
    <>
         <div className="container mt-4 me-4 p-3 w-auto" id='sun-moon'>
          <div className="col pb-2 mt-3">
            {data && (
              <div className="row justify-content-center  text-white border rounded p-2 shadow-sm">
                <div className="col-12 text-start p-3 mb-3">
                  <h5 className="text-white">Sunrise & Sunset</h5>
                </div>
                <div className="col-6 d-flex flex-column align-items-center">
                  <IoSunny size={40} className="mb-3 text-warning" />
                  <p>{data.current.astro.sunrise}</p>
                </div>
                <div className="col-6 d-flex flex-column align-items-center">
                  <TiWeatherPartlySunny size={40} className="mb-2 text-warning" />
                  <p>{data.current.astro.sunset}</p>
                </div>
              </div>
            )}
          </div>
          <div className="col">
            {data && (
              <div className="row justify-content-center  text-white border rounded p-2 shadow-sm">
                <div className="col-12 text-start p-3 mb-3">
                  <h5 className="text-white">Moonrise & Moonset</h5>
                </div>
                <div className="col-6 d-flex flex-column align-items-center">
                  <IoMoon size={40} className="mb-3 text-light" />

                  <p>{data.current.astro.moonrise}</p>
                </div>
                <div className="col-6 d-flex flex-column align-items-center">
                  <FaCloudMoon size={40} className="mb-2 text-light" />
                  <p>{data.current.astro.moonset}</p>
                </div>
              </div>
            )}
          </div>
        </div>
    </>
  )
}

export default SunMoon