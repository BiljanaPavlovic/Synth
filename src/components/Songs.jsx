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
        shark
      </button>
      <button className="songs-btn" onClick={happyPlay}>
        happy
      </button>
      <button className="songs-btn" onClick={wheelsPlay}>
        wheels
      </button>
      <button className="songs-btn" onClick={twinklePlay}>
        twinkle
      </button>
      <button className="songs-btn" onClick={farmPlay}>
        farm
      </button>
    </div>
  );
}
