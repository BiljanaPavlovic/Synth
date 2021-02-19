/** @format */

import React from "react";
import "./piano.css";
import * as Tone from "tone";

export default function Piano() {
  const synth = new Tone.Synth().toDestination();
  synth.triggerAttackRelease("C4", "8n");
  return (
    <div>
      <button className="white">C</button>
      <button className="black">C#</button>
      <button className="white">D</button>
      <button className="black">D#</button>
      <button className="white">E</button>
      <button className="white">F</button>
      <button className="black">F#</button>
      <button className="white"> G</button>
      <button className="black">G#</button>
      <button className="white">A</button>
      <button className="black">A#</button>
      <button className="white">B</button>
    </div>
  );
}
