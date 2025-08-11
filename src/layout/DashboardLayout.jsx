
import SunMoon from "../component/SunMoon";
import Header from "../component/Header";
import AirQuality from "../component/AirQuality";
import WeatherDatas from "../component/WeatherDatas";
import WeatherIndex from "../component/WeatherIndex";
import "../App.css";

export default function DashboardLayout() {
  return (
    <div className="dashboard">
        <Header/>
        <AirQuality/>
        <WeatherDatas/>
        <SunMoon/>
        <WeatherIndex/>
    </div>
  );
}