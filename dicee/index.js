function getRandomDice() {
  return Math.floor(Math.random() * 6) + 1;
}

var dice1 = getRandomDice();
var dice2 = getRandomDice();

console.log("hi ross");
console.log("hi${dice1}");
console.log("hi ross 2");

document
  .querySelector(".img1")
  .setAttribute("src", "images/dice" + dice1 + ".png");

document
  .querySelector(".img2")
  .setAttribute("src", "images/dice" + dice2 + ".png");

if (dice1 > dice2) {
  document.querySelector("h1").textContent = "🚩 Player 1 Won";
} else if (dice2 > dice1) {
  document.querySelector("h1").textContent = "Player 2 Won 🚩";
} else {
  document.querySelector("h1").textContent = "Draw";
}
