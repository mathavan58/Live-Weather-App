import React from 'react'
import Header from './component/Header'
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css";
import WeatherProvider from "./context/WeatherProvider";
import DashboardLayout from "./layout/DashboardLayout";


const App = () => {
  
  return (
    <>
    
    <WeatherProvider>
      <DashboardLayout />
    </WeatherProvider>
     {/* <Header/> */}

    </>
  )
}
export default App