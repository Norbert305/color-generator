/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const colors = ["green", "red", "pink", "blue", "yellow", "orange", "purple"];
  const btn = document.getElementById("btn");
  const color = document.querySelector(".color");

  btn.addEventListener("click", function() {
    const randomNumber = getRandomNumber();
    // console.log(randomNumber);

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
  });

  function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
  }
};
