/** @format */

import React from "react";
import "./animals.css";

export default function Animals() {
  let dog = new Audio("/Synth/sounds/animals/dog.mp3");
  const dogPlay = () => {
    dog.play();
  };

  let bear = new Audio("/Synth/sounds/animals/bear.mp3");
  const bearPlay = () => {
    bear.play();
  };

  let bee = new Audio("/Synth/sounds/animals/bee.mp3");
  const beePlay = () => {
    bee.play();
  };
  let cat = new Audio("/Synth/sounds/animals/cat.mp3");
  const catPlay = () => {
    cat.play();
  };
  let elephant = new Audio("/Synth/sounds/animals/elephant.mp3");
  const elephantPlay = () => {
    elephant.play();
  };
  let goat = new Audio("/Synth/sounds/animals/goat.mp3");
  const goatPlay = () => {
    goat.play();
  };
  let lion = new Audio("/Synth/sounds/animals/lion.mp3");
  const lionPlay = () => {
    lion.play();
  };
  let owl = new Audio("/Synth/sounds/animals/owl.mp3");
  const owlPlay = () => {
    owl.play();
  };
  let parot = new Audio("/Synth/sounds/animals/parot.mp3");
  const parotPlay = () => {
    parot.play();
  };
  let pig = new Audio("/Synth/sounds/animals/pig.mp3");
  const pigPlay = () => {
    pig.play();
  };
  let sheep = new Audio("/Synth/sounds/animals/sheep.mp3");
  const sheepPlay = () => {
    sheep.play();
  };

  return (
    <div>
      <h2>Animals</h2>

      <button className="animal" onClick={dogPlay}>
        <img src="/Synth/img/animals/dog.png" alt="dog" />
        dog
      </button>
      <button className="animal" onClick={bearPlay}>
        <img src="/Synth/img/animals/bear.png" alt="bear" /> bear
      </button>
      <button className="animal" onClick={beePlay}>
        <img src="/Synth/img/animals/bee.png" alt="bee" />
        bee
      </button>
      <button className="animal" onClick={catPlay}>
        <img src="/Synth/img/animals/cat.png" alt="cat" />
        cat
      </button>
      <button className="animal" onClick={elephantPlay}>
        <img src="/Synth/img/animals/elephant.png" alt="elephant" />
        elephant
      </button>
      <button className="animal" onClick={goatPlay}>
        <img src="/Synth/img/animals/goat.png" alt="goat" />
        goat
      </button>
      <button className="animal" onClick={lionPlay}>
        <img src="/Synth/img/animals/lion.png" alt="lion" />
        lion
      </button>
      <button className="animal" onClick={owlPlay}>
        <img src="/Synth/img/animals/owl.png" alt="owl" />
        owl
      </button>
      <button className="animal" onClick={parotPlay}>
        <img src="/Synth/img/animals/parrot.png" alt="parrot" />
        parot
      </button>
      <button className="animal" onClick={pigPlay}>
        <img src="/Synth/img/animals/pig.png" alt="pig" />
        pig
      </button>
      <button className="animal" onClick={sheepPlay}>
        <img src="/Synth/img/animals/sheep.png" alt="sheep" />
        sheep
      </button>
    </div>
  );
}
