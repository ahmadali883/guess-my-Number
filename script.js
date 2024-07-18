"use strict";

// console.log(document.querySelector(".message").textContent);

// document.querySelector(".message").textContent =
//   "Congrats Correct Number mart work han😎";

// document.querySelector(".number").textContent = 14;

// document.querySelector(".guess").value = 12;

let secretNumber = Math.trunc(Math.random() * 20);
let score = 20;

//console.log(score);

document.querySelector(".check").addEventListener("click", function () {
  //console.log(document.querySelector(".guess").value);
  const guess = Number(document.querySelector(".guess").value);
  //console.log(guess, typeof guess);
  if (score > 1) {
    score--;
    console.log(score);
    document.querySelector(".score").textContent = score;
    if (!guess) {
      document.querySelector(".message").textContent = "no input 🤷‍♀️";
    } else if (guess > secretNumber) {
      document.querySelector(".message").textContent = "Guessed High 📈";
    } else if (guess < secretNumber) {
      document.querySelector(".message").textContent = "Guessed low 📉";
    } else if (guess == secretNumber) {
      document.querySelector(".message").textContent = "🎉 guessed correctly";
      document.querySelector(".number").style.width = "30rem";
      document.querySelector("body").style.backgroundColor = "#4444";
      document.querySelector(".number").textContent = Number(secretNumber);
    }
  } else {
    document.querySelector(".message").textContent = "💀 Your lose";
  }
});
document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".number").textContent = "?";
  score = 20;
  document.querySelector(".score").textContent = score;
  secretNumber = Math.trunc(Math.random() * 20);
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".guess").value = null;
  document.querySelector("body").style.backgroundColor = "#222";
});

/* 
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/
