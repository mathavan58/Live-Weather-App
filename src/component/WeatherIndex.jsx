import React, { useContext } from "react";
// import { userContext } from "./header";
import { BsArrowsCollapseVertical } from "react-icons/bs";
import { PiEyeBold } from "react-icons/pi";
import { GiSunRadiations } from "react-icons/gi";
import { LuCloudSnow } from "react-icons/lu";
import { FaHandHoldingWater } from "react-icons/fa";
import { WeatherContext } from "../context/WeatherProvider";


const WeatherIndex = () => {
  const { data } = useContext(WeatherContext);
  return (
    <div className="container pe-4 mb-2" id="weather-index">
      <div className="row gap-1 p-2  rounded-1">
        {data?.current && (
          <>
            <div className="col bg-secondary text-white pt-3 ps-3 pe-3 pb-1  rounded-3 fs-5">
              <h6 className="mb-4">Humidity</h6>
              <div className="d-flex justify-content-between align-items-center">
                <FaHandHoldingWater />
                <p className="m-0">{data.current.humidity} %</p>
              </div>
            </div>

            <div className="col bg-secondary text-white pt-3 ps-3 pe-3 pb-1  rounded-3 fs-5">
              <h6 className="mb-4">UV Index</h6>
              <div className="d-flex justify-content-between align-items-center">
                <GiSunRadiations />
                <p className="m-0">{data.current.uv_index} </p>
              </div>
            </div>

            <div className="col bg-secondary text-white pt-3 ps-3 pe-3 pb-1  rounded-3 fs-5">
              <h6 className="mb-4">Visibility</h6>
              <div className="d-flex justify-content-between align-items-center">
                <PiEyeBold />
                <p className="m-0">{data.current.visibility} Km</p>
              </div>
            </div>

            <div className="col bg-secondary text-white pt-3 ps-3 pe-3 pb-1  rounded-3">
              <h6 className="mb-4">Pressure</h6>
              <div className="d-flex justify-content-between align-items-center fs-5">
                <BsArrowsCollapseVertical />
                <p className="m-0">{data.current.pressure} hPa</p>
              </div>
            </div>

            <div className="col bg-secondary text-white pt-3 ps-3 pe-3 pb-1  rounded-3 fs-5">
              <h6 className="mb-4">Precipitation</h6>
              <div className="d-flex justify-content-between align-items-center">
                <LuCloudSnow />
                <p className="m-0">{data.current.precip} mm</p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default WeatherIndex