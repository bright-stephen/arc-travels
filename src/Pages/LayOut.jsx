import React from 'react'
import Navbar from "../Components/Navbar/Navbar";
import {Outlet} from "react-router-dom";
import Footer from '../Components/Footer/Footer';
import PopUp from '../Components/PopUp/PopUp';
import { useState } from "react";

function LayOut() {
  const [orderPopup, setOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup)
  }
  return (
    <>
        <Navbar handleOrderPopup={handleOrderPopup}/>
        <Outlet/>
        <Footer/>
        <PopUp orderPopup={orderPopup} setOrderPopup={setOrderPopup}/>
    </>
  )
}

export default LayOut