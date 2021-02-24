/** @format */

import React, { useState } from "react";
import "./piano.css";
import * as Tone from "tone";

export default function Piano() {
  const [instrument, setInstrument] = useState(true);
  function stop() {
    window.location.reload(false);
  }
  //piano functions
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

  //synth functions
  function toneCSynth() {
    const c = new Tone.FMSynth(Tone.Synth).toDestination();
    c.triggerAttack("C4", Tone.context.currentTime);
    c.triggerRelease(Tone.context.currentTime + 0.25);
    Tone.start();
  }
  function toneCsSynth() {
    const c = new Tone.FMSynth(Tone.Synth).toDestination();
    c.triggerAttack("C#4", Tone.context.currentTime);
    c.triggerRelease(Tone.context.currentTime + 0.25);
    Tone.start();
  }
  function toneDSynth() {
    const c = new Tone.FMSynth(Tone.Synth).toDestination();
    c.triggerAttack("D4", Tone.context.currentTime);
    c.triggerRelease(Tone.context.currentTime + 0.25);
    Tone.start();
  }
  function toneDsSynth() {
    const c = new Tone.FMSynth(Tone.Synth).toDestination();
    c.triggerAttack("D#4", Tone.context.currentTime);
    c.triggerRelease(Tone.context.currentTime + 0.25);
    Tone.start();
  }
  function toneESynth() {
    const c = new Tone.FMSynth(Tone.Synth).toDestination();
    c.triggerAttack("E4", Tone.context.currentTime);
    c.triggerRelease(Tone.context.currentTime + 0.25);
    Tone.start();
  }
  function toneFSynth() {
    const c = new Tone.FMSynth(Tone.Synth).toDestination();
    c.triggerAttack("F4", Tone.context.currentTime);
    c.triggerRelease(Tone.context.currentTime + 0.25);
    Tone.start();
  }
  function toneFsSynth() {
    const c = new Tone.FMSynth(Tone.Synth).toDestination();
    c.triggerAttack("F#4", Tone.context.currentTime);
    c.triggerRelease(Tone.context.currentTime + 0.25);
    Tone.start();
  }
  function toneGSynth() {
    const c = new Tone.FMSynth(Tone.Synth).toDestination();
    c.triggerAttack("G4", Tone.context.currentTime);
    c.triggerRelease(Tone.context.currentTime + 0.25);
    Tone.start();
  }
  function toneGsSynth() {
    const c = new Tone.FMSynth(Tone.Synth).toDestination();
    c.triggerAttack("G#4", Tone.context.currentTime);
    c.triggerRelease(Tone.context.currentTime + 0.25);
    Tone.start();
  }
  function toneASynth() {
    const c = new Tone.FMSynth(Tone.Synth).toDestination();
    c.triggerAttack("A4", Tone.context.currentTime);
    c.triggerRelease(Tone.context.currentTime + 0.25);
    Tone.start();
  }
  function toneAsSynth() {
    const c = new Tone.FMSynth(Tone.Synth).toDestination();
    c.triggerAttack("A#4", Tone.context.currentTime);
    c.triggerRelease(Tone.context.currentTime + 0.25);
    Tone.start();
  }
  function toneBSynth() {
    const c = new Tone.FMSynth(Tone.Synth).toDestination();
    c.triggerAttack("B4", Tone.context.currentTime);
    c.triggerRelease(Tone.context.currentTime + 0.25);
    Tone.start();
  }
  return (
    <div>
      <h2>Piano</h2>
      <div className="piano-btn-div">
        <button className="piano-btn" onClick={stop}>
          <img src="/Synth/img/stop.png" alt="silent emoji" />
        </button>
        <button
          className="piano-btn"
          onClick={() => {
            setInstrument(true);
          }}
        >
          <img
            className="piano-img"
            src="/Synth/img/betoven.png"
            alt="Betoven"
          />
        </button>
        <button
          className="piano-btn"
          onClick={() => {
            setInstrument(false);
          }}
        >
          <img
            className="piano-img"
            src="/Synth/img/mocartDj.png"
            alt="Mocart"
          />
        </button>
      </div>
      <div className="piano">
        <button className="white" onClick={instrument ? toneC : toneCSynth}>
          C
        </button>
        <button className="black" onClick={instrument ? toneCs : toneCsSynth}>
          C#
        </button>
        <button className="white" onClick={instrument ? toneD : toneDSynth}>
          D
        </button>
        <button className="black" onClick={instrument ? toneDs : toneDsSynth}>
          D#
        </button>
        <button className="white" onClick={instrument ? toneE : toneESynth}>
          E
        </button>
        <button className="white" onClick={instrument ? toneF : toneFSynth}>
          F
        </button>
        <button className="black" onClick={instrument ? toneFs : toneFsSynth}>
          F#
        </button>
        <button className="white" onClick={instrument ? toneG : toneGSynth}>
          {" "}
          G
        </button>
        <button className="black" onClick={instrument ? toneGs : toneGsSynth}>
          G#
        </button>
        <button className="white" onClick={instrument ? toneA : toneASynth}>
          A
        </button>
        <button className="black" onClick={instrument ? toneAs : toneAsSynth}>
          A#
        </button>
        <button className="white" onClick={instrument ? toneB : toneBSynth}>
          B
        </button>
      </div>
    </div>
  );
}
