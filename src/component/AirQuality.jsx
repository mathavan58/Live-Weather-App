import React, { useContext } from "react";
// import { userContext } from "./header";
import { MdOutlineAir } from "react-icons/md";
import { FaCloudversify } from "react-icons/fa";
import { WeatherContext } from "../context/WeatherProvider";



const AirQuality = () => {
  const { data } = useContext(WeatherContext);


  return (
    <div className="container pe-4 mt-3 w-auto mb-2" id="air-quality">
          <div className="row gap-1 p-2  rounded-1">
            {data?.current && (
              <div className="col d-flex flex-column gap-2  w-auto">
               <h5 className="text-white">Air Quality Index <span className="fs-4 text-info"><MdOutlineAir /></span></h5>       
                <div className="col bg-secondary text-white pt-2 ps-3 pe-3 pb-1 w-auto rounded-3 fs-5 ">
                  <h6 className="mb-4"><span className="fs-3 text-dark"><FaCloudversify /></span> CO</h6>
                    <p className="m-0">{data?.current.air_quality.co} (µg/m³)</p>
                </div>
                 <div className="col bg-secondary text-white pt-2 ps-3 pe-3 pb-1  rounded-3 fs-5">
                  <h6 className="mb-4"><span className="fs-3 text-dark"><FaCloudversify /></span> NO₂</h6>
                  <p className="m-0">{data?.current.air_quality.no2} (µg/m³)</p>
                </div>
                 <div className="col bg-secondary text-white pt-2 ps-3 pe-3 pb-1  rounded-3 fs-5">
                   <h6 className="mb-4"><span className="fs-3 text-dark"><FaCloudversify /></span> O₃</h6>
                   <p className="m-0">{data?.current.air_quality.o3} (µg/m³)</p>
                </div>
                 <div className="col bg-secondary text-white pt-2 ps-3 pe-3 pb-1  rounded-3 fs-5">
                  <h6 className="mb-4"><span className="fs-3 text-dark"><FaCloudversify /></span> SO₂</h6>
                   <p className="m-0">{data?.current.air_quality.so2} (µg/m³)</p>
                </div>
                 <div className="col bg-secondary text-white pt-2 ps-3 pe-3 pb-1  rounded-3 fs-5">
                  <h6 className="mb-4"><span className="fs-3 text-dark"><FaCloudversify /></span> US EPA Index</h6>
                   <p className="m-0">{data?.current.air_quality["us-epa-index"]}</p>
                </div>
              </div>
            )}
          </div>
        </div>
  );
};

export default AirQuality;
