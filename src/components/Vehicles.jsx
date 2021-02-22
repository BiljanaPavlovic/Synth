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
    <div>
      <h2>Vehicles</h2>
      <button className="vehicles-btn" onClick={ambulancePlay}>
        ambulance
      </button>
      <button className="vehicles-btn" onClick={firetruckPlay}>
        firetruck
      </button>
      <button className="vehicles-btn" onClick={policePlay}>
        police
      </button>
      <button className="vehicles-btn" onClick={motorcuclePlay}>
        motorcucle
      </button>
      <button className="vehicles-btn" onClick={helicopterPlay}>
        helicopter
      </button>
      <button className="vehicles-btn" onClick={carPlay}>
        car
      </button>
    </div>
  );
}
