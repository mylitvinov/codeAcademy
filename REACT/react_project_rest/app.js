import { animals } from "./animals";
import React from "react";
import ReactDOM from "react-dom";

const title = "";

const showBackground = true;

const background = (
  <img className="background" src="/images/ocean.jpg" alt="ocean" />
);
const images = [];

for (const animal in animals) {
  images.push(
    <img
      key={animal}
      className="animal"
      alt={animal}
      src={animals[animal].image}
      ariaLabel={animal}
      role="button"
      onClick={displayFact}
    />
  );
}

function displayFact(e) {
  const selectedAnimal = e.target.alt
  const animalInfo = animals[selectedAnimal]
  const optionIndex = Math.floor(Math.random()*animalInfo.facts.length)

  const funFact = animalInfo.facts[optionIndex]
  document.getElementById('fact').innerHTML = funFact
  
}

const animalFacts = (
  <div>
    <h1>
      {title === "" ? "Щелкните животное, чтобы узнать интересный факт" : title}{" "}
    </h1>
    
    { showBackground && background}
<p id='fact'></p>
    <div className="animals">{images}</div>
  </div>
);

// Аналог тернарного оператора ИЛИ ||
//   <h1>{title || "Щелкните животное, чтобы узнать интересный факт" </h1>

ReactDOM.render(animalFacts, document.getElementById("root"));
