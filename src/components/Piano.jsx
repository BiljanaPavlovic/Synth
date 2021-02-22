/** @format */

import React from "react";
import "./piano.css";
import * as Tone from "tone";

export default function Piano() {
  function toneC() {
    const c = new Tone.Synth().toDestination();
    c.triggerAttack("C4", Tone.context.currentTime);
    c.triggerRelease(Tone.context.currentTime + 0.25);
    Tone.start();
  }
  function toneCs() {
    const c = new Tone.Synth().toDestination();
    c.triggerAttack("C#4", Tone.context.currentTime);
    c.triggerRelease(Tone.context.currentTime + 0.25);
    Tone.start();
  }
  function toneD() {
    const c = new Tone.Synth().toDestination();
    c.triggerAttack("D4", Tone.context.currentTime);
    c.triggerRelease(Tone.context.currentTime + 0.25);
    Tone.start();
  }
  function toneDs() {
    const c = new Tone.Synth().toDestination();
    c.triggerAttack("D#4", Tone.context.currentTime);
    c.triggerRelease(Tone.context.currentTime + 0.25);
    Tone.start();
  }
  function toneE() {
    const c = new Tone.Synth().toDestination();
    c.triggerAttack("E4", Tone.context.currentTime);
    c.triggerRelease(Tone.context.currentTime + 0.25);
    Tone.start();
  }
  function toneF() {
    const c = new Tone.Synth().toDestination();
    c.triggerAttack("F4", Tone.context.currentTime);
    c.triggerRelease(Tone.context.currentTime + 0.25);
    Tone.start();
  }
  function toneFs() {
    const c = new Tone.Synth().toDestination();

    c.triggerAttack("F#4", Tone.context.currentTime);
    c.triggerRelease(Tone.context.currentTime + 0.25);
    Tone.start();
  }
  function toneG() {
    const c = new Tone.Synth().toDestination();
    c.triggerAttack("G4", Tone.context.currentTime);
    c.triggerRelease(Tone.context.currentTime + 0.25);
    Tone.start();
  }
  function toneGs() {
    const c = new Tone.Synth().toDestination();
    c.triggerAttack("G#4", Tone.context.currentTime);
    c.triggerRelease(Tone.context.currentTime + 0.25);
    Tone.start();
  }
  function toneA() {
    const c = new Tone.Synth().toDestination();
    c.triggerAttack("A4", Tone.context.currentTime);
    c.triggerRelease(Tone.context.currentTime + 0.25);
    Tone.start();
  }
  function toneAs() {
    const c = new Tone.Synth().toDestination();
    c.triggerAttack("A#4", Tone.context.currentTime);
    c.triggerRelease(Tone.context.currentTime + 0.25);
    Tone.start();
  }
  function toneB() {
    const c = new Tone.Synth().toDestination();
    c.triggerAttack("B4", Tone.context.currentTime);
    c.triggerRelease(Tone.context.currentTime + 0.25);
    Tone.start();
  }

  return (
    <div>
      <button className="white" onClick={toneC}>
        C
      </button>
      <button className="black" onClick={toneCs}>
        C#
      </button>
      <button className="white" onClick={toneD}>
        D
      </button>
      <button className="black" onClick={toneDs}>
        D#
      </button>
      <button className="white" onClick={toneE}>
        E
      </button>
      <button className="white" onClick={toneF}>
        F
      </button>
      <button className="black" onClick={toneFs}>
        F#
      </button>
      <button className="white" onClick={toneG}>
        {" "}
        G
      </button>
      <button className="black" onClick={toneGs}>
        G#
      </button>
      <button className="white" onClick={toneA}>
        A
      </button>
      <button className="black" onClick={toneAs}>
        A#
      </button>
      <button className="white" onClick={toneB}>
        B
      </button>
    </div>
  );
}
