/** @format */

import React from "react";
import "./songs.css";

export default function Songs() {
  let shark = new Audio("/Synth/sounds/songs/shark.mp3");
  const sharkPlay = () => {
    shark.play();
  };
  let happy = new Audio("/Synth/sounds/songs/happy.mp3");
  const happyPlay = () => {
    happy.play();
  };
  let wheels = new Audio("/Synth/sounds/songs/wheels.mp3");
  const wheelsPlay = () => {
    wheels.play();
  };
  let twinkle = new Audio("/Synth/sounds/songs/twinkle.mp3");
  const twinklePlay = () => {
    twinkle.play();
  };
  let farm = new Audio("/Synth/sounds/songs/farm.mp3");
  const farmPlay = () => {
    farm.play();
  };

  return (
    <div>
      <h2>Songs</h2>
      <button className="songs-btn" onClick={sharkPlay}>
        <img src="/Synth/img/songs/shark.png" alt="shark" />
        <br /> shark
      </button>
      <button className="songs-btn" onClick={happyPlay}>
        <img src="/Synth/img/songs/happy.png" alt="happy" />
        <br /> happy
      </button>
      <button className="songs-btn" onClick={wheelsPlay}>
        <img src="/Synth/img/songs/bus.png" alt="bus" />
        <br /> wheels
      </button>
      <button className="songs-btn" onClick={twinklePlay}>
        <img src="/Synth/img/songs/star.png" alt="star" />
        <br /> twinkle
      </button>
      <button className="songs-btn" onClick={farmPlay}>
        <img src="/Synth/img/songs/farm.png" alt="farm" />
        <br /> farm
      </button>
    </div>
  );
}
