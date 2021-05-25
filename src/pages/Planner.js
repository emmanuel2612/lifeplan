import "./Planner.scss";
import logo from "../images/logo2.png";
import AsideButton from "../components/AsideButton";
import { useState } from "react";
import Aside from "../components/Aside";




const Planner = () => {


  return (
    <div className="Planner">
      <nav><h1>LOGO</h1></nav>
      <main>
        <input
          type="text"
          placeholder="Name your life plan"
          maxLength="50"
        ></input>

        <div className='box'></div>

      </main>

      <Aside />
     
    </div>
  );
};

export default Planner;
