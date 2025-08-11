import React, { useContext } from 'react';
import SunMoon from './SunMoon';
import { MdLocationOn } from "react-icons/md";
import { FcCalendar } from "react-icons/fc";
import { WeatherContext } from '../context/WeatherProvider';
import { MdOutlineAutoFixHigh } from "react-icons/md";

// Import images statically
import cloud from "../assets/images/cloud.png";
import drizzle from "../assets/images/drizzle.png";
import mist from "../assets/images/mist.png";
import rain from "../assets/images/rain.png";
import snow from "../assets/images/snow.png";
import sun from "../assets/images/sun.png";
import storm from "../assets/images/storm.png";
import defaultImg from "../assets/images/default.png";

// Map descriptions to images
const weatherIcons = {
  sun,
  cloud,
  rain,
  storm,
  snow,
  drizzle,
  mist,
  default: defaultImg
};

const WeatherDatas = () => {
  let { data, setData, setCity } = useContext(WeatherContext);

  const clearData = () => {
    setData(null);
    setCity("");
  };

  const getWeatherImage = (description) => {
    const desc = description.toLowerCase();

    if (desc.includes("sunny") || desc.includes("clear")) return weatherIcons.sun;
    if (desc.includes("cloud")) return weatherIcons.cloud;
    if (desc.includes("rain")) return weatherIcons.rain;
    if (desc.includes("storm")) return weatherIcons.storm;
    if (desc.includes("snow")) return weatherIcons.snow;
    if (desc.includes("drizzle")) return weatherIcons.drizzle;
    if (desc.includes("fog") || desc.includes("mist")) return weatherIcons.mist;

    return weatherIcons.default;
  };

  return (
    <div className="col w-auto h-auto" id='weather-datas'>
      {data && (
        <h3 className='ms-5 pt-2 mb-0 text-white'>
          <span className='ms-3'><MdOutlineAutoFixHigh /></span> Today's Highlights
        </h3>
      )}

      <div className='col me-0   d-flex w-auto h-auto'>
        <div className="container mt-2  row p-2 justify-content-center w-100 h-75 flex-wrap">
          {data && (
            <div className="col col-md-10 text-center text-white border rounded pt-2 ps-4 pe-4 shadow-sm">
              <div className="col d-flex justify-content-center gap-3 mb-1">
                <div className=" d-flex justify-content-center flex-column fs-5">
                  <img class="img-fluid "
                  src={getWeatherImage(data?.current?.weather_descriptions[0])}
                  alt="weather-mood"
                  style={{ width: "150px", height: "120px" }}
                /> 
                <p className=''>🌥️ Weather: {data?.current?.weather_descriptions[0]}</p>
                </div>
                <p className="fs-2 ps-1 mt-5">🌡️ {data?.current?.temperature}°C</p>
              </div>

              <h5 className="mb-3 ms-3 me-3 mt-1 fs-3 d-flex justify-content-center">
                <span className='fs-4'><MdLocationOn /></span>
                {data?.location?.name},{data?.location?.country}
              </h5>

              <div className="col d-flex justify-content-center m-2">
                <p className="me-5"><span className='me-1 fs-5'><FcCalendar /></span>{data?.location?.localtime}</p>
                <p className="ms-5 me-5">
                  {data?.current?.is_day === "yes" ? "🌞 Day-time" : "🌙 Night-time"}
                </p>
              </div>

              <div className="col d-flex justify-content-center m-2">
                <p className="btn btn-primary me-5">
                  Wind speed : {data?.current?.wind_speed} (km/h)
                </p>
                <p className="btn btn-success me-5">
                  wind_degree : {data?.current?.wind_degree} ({data?.current?.wind_dir})
                </p>
              </div>

              <div className="col">
                <p className="d-flex m-1" id="heat-index">
                  Heat-Index: <span>{data?.current?.feelslike}°C</span>
                </p>
              </div>

              <div className="col">
                <hr className="m-0" />
              </div>

              <button
                type="button"
                onClick={clearData}
                className="btn btn-white text-white m-2"
              >
                Clear
              </button>
            </div>
          )}
        </div>
        {/* <SunMoon /> */}
      </div>
    </div>
  );
};

export default WeatherDatas;
