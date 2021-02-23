/** @format */

import React from "react";
import "./vehicles.css";

export default function Vehicles() {
  let ambulance = new Audio("/Synth/sounds/vehicles/ambulance.mp3");
  const ambulancePlay = () => {
    ambulance.play();
  };
  let firetruck = new Audio("/Synth/sounds/vehicles/firetruck.mp3");
  const firetruckPlay = () => {
    firetruck.play();
  };
  let police = new Audio("/Synth/sounds/vehicles/police.mp3");
  const policePlay = () => {
    police.play();
  };
  let motorcucle = new Audio("/Synth/sounds/vehicles/motorcucle.mp3");
  const motorcuclePlay = () => {
    motorcucle.play();
  };
  let helicopter = new Audio("/Synth/sounds/vehicles/helicopter.mp3");
  const helicopterPlay = () => {
    helicopter.play();
  };
  let car = new Audio(" /Synth/sounds/vehicles/car.mp3");
  const carPlay = () => {
    car.play();
  };
  return (
    <div className="vehicles-div">
      <h2>Vehicles</h2>
      <button className="vehicles-btn" onClick={ambulancePlay}>
        {" "}
        <img src="/Synth/img/vehicles/ambulance.png" alt="ambulance car" />
      </button>
      <button className="vehicles-btn" onClick={firetruckPlay}>
        <img src="/Synth/img/vehicles/firetruck.png" alt="fire truck" />
      </button>
      <button className="vehicles-btn" onClick={policePlay}>
        <img src="/Synth/img/vehicles/police.png" alt="police car" />
      </button>
      <button className="vehicles-btn" onClick={motorcuclePlay}>
        <img src="/Synth/img/vehicles/motorcucle.png" alt="motorcucle" />
      </button>
      <button className="vehicles-btn" onClick={helicopterPlay}>
        <img src="/Synth/img/vehicles/helicopter.png" alt="helicopter" />
      </button>
      <button className="vehicles-btn" onClick={carPlay}>
        <img src="/Synth/img/vehicles/car.png" alt="car" />
      </button>
    </div>
  );
}
