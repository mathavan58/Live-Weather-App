import { createContext, useState } from "react";
import Axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const WeatherContext = createContext();
let key = "3f36d9bad6438df385c36208c897f624";

export default function WeatherProvider({ children }) {
  const [city, setCity] = useState("chennai");
  const [data, setData] = useState();

  const fetchData = async () => {
    try {
      let responce = await Axios.get(
        `https://api.weatherstack.com/current?access_key=${key}&query=${city}`
      );
      setData(responce.data);
      toast.success("Weather data fetched successfully!");
      setCity("")
    } catch (error) {
      toast.error("Please enter the city name");
    }
  };

  return (
    <WeatherContext.Provider value={{ data, setData, setCity, fetchData, city }}>
      {children}
      <ToastContainer position="top-center" autoClose={3000} />
    </WeatherContext.Provider>
  );
}
