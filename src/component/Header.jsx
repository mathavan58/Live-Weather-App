import React, { createContext, useContext, useState } from "react";
import Axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import AirQuality from "./AirQuality";
import WeatherDatas from "./WeatherDatas";
import SunMoon from "./SunMoon";
import { IoMdCloudy } from "react-icons/io";
import WeatherIndex from "./WeatherIndex";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { WeatherContext } from "../context/WeatherProvider";


// let key="3ccc39744772c589a3a6b60cec955adf"
// let key = "e59a6d2f25bccd963c4e86abe6c898b0";
// export let userContext=createContext()

const Header = () => {
  let {data,setdata,city,setCity,fetchData}=useContext(WeatherContext)
  // let [city, setCity] = useState("chennai");
  // let [data, setData] = useState();

  // let fetchData = async () => {
  //   try {
  //     // let responce= await Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
  //     let responce = await Axios.get(
  //       `https://api.weatherstack.com/current?access_key=${key}&query=${city}`
  //       // `https://api.weatherapi.com/v1/current.json?key=${key}&q=${city}`
  //     );
  //     setData(responce.data);
  //     console.log(responce);
  //     toast.success("Weather data fetched successfully!");
  //   } catch (error) {
  //     toast.error("Please enter the city name");
  //   }
  // };

  return (
    <>
   <div className="col" id="Weather-Image-Add">
       <nav className="navbar  p-0" >
        <div className="container-fluid ">
          <h2 className="ps-3 text-white"><span className="text-white"><IoMdCloudy /></span> Weather App</h2>
          <form
            className="d-flex justify-content-between"
            role="search"
            onSubmit={(e) => {
              e.preventDefault();
              fetchData();
            }}
          >
            <input
              className="form-control m-2 "
              onChange={(e) => {
                setCity(e.target.value);
              }}
              value={city}
              type="search"
              placeholder=" Search City Name.."
              aria-label="Search"
              required
            />
            <button
              className="btn btn-outline-info m-2"
              onClick={(e) => {
                e.preventDefault();
                fetchData();
              }}
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
      {/* <userContext.Provider value={{data,setData,setCity}}>
      <WeatherDatas/>
      <WeatherIndex/>
      <AirQuality/>
      </userContext.Provider> */}
      
   </div>

      {/* <ToastContainer position="top-center" autoClose={3000} /> */}

    </>
  );
};

export default Header;
