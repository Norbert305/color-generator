/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const colors = ["green", "red", "pink", "blue", "yellow", "orange", "purple"]; //my array of colors
  const btn = document.getElementById("btn"); //id button from my index.html page
  const color = document.querySelector(".color"); // class color from my index.html page

  btn.addEventListener("click", function() {
    const randomNumber = getRandomNumber();
    // applying getRandomNumber() to the randomNumber variable

    document.body.style.backgroundColor = colors[randomNumber]; //colors[random length of my colors array];
    color.textContent = colors[randomNumber];
    //decorating the background of the entire body web-page to the random colors of the array.
    //also applying the random colors of the text to change when clicking the button.
  });

  function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
    //Math.floor rounds the number down to a whole number
    //Math.random creates a random decimal number between 0 and 1.
    //Basically using this function to generate random numbers equal to the length of my colors array.
  }
};
