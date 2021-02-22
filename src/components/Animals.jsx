/** @format */

import React from "react";
import "./animals.css";

export default function Animals() {
  let dog = new Audio("sounds/animals/dog.mp3");
  const dogPlay = () => {
    dog.play();
  };

  let bear = new Audio("sounds/animals/bear.mp3");
  const bearPlay = () => {
    bear.play();
  };

  let bee = new Audio("sounds/animals/bee.mp3");
  const beePlay = () => {
    bee.play();
  };
  let cat = new Audio("sounds/animals/cat.mp3");
  const catPlay = () => {
    cat.play();
  };
  let elephant = new Audio("sounds/animals/elephant.mp3");
  const elephantPlay = () => {
    elephant.play();
  };
  let goat = new Audio("sounds/animals/goat.mp3");
  const goatPlay = () => {
    goat.play();
  };
  let lion = new Audio("sounds/animals/lion.mp3");
  const lionPlay = () => {
    lion.play();
  };
  let owl = new Audio("sounds/animals/owl.mp3");
  const owlPlay = () => {
    owl.play();
  };
  let parot = new Audio("sounds/animals/parot.mp3");
  const parotPlay = () => {
    parot.play();
  };
  let pig = new Audio("sounds/animals/pig.mp3");
  const pigPlay = () => {
    pig.play();
  };
  let sheep = new Audio("sounds/animals/sheep.mp3");
  const sheepPlay = () => {
    sheep.play();
  };

  return (
    <div>
      <h2>Animals</h2>

      <button className="animal" onClick={dogPlay}>
        dog
      </button>
      <button className="animal" onClick={bearPlay}>
        bear
      </button>
      <button className="animal" onClick={beePlay}>
        bee
      </button>
      <button className="animal" onClick={catPlay}>
        cat
      </button>
      <button className="animal" onClick={elephantPlay}>
        elephant
      </button>
      <button className="animal" onClick={goatPlay}>
        goat
      </button>
      <button className="animal" onClick={lionPlay}>
        lion
      </button>
      <button className="animal" onClick={owlPlay}>
        owl
      </button>
      <button className="animal" onClick={parotPlay}>
        parot
      </button>
      <button className="animal" onClick={pigPlay}>
        pig
      </button>
      <button className="animal" onClick={sheepPlay}>
        sheep
      </button>
    </div>
  );
}
