var player1 = prompt("Name of the Player-1 :")
var player2 = prompt("Name of the Player-2 :")

document.querySelector(".p1").innerHTML = player1;
document.querySelector(".p2").innerHTML = player2;

var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomDice1 = "images/dice" + randomNumber1 + ".png";

document.querySelector(".img1").setAttribute("src", randomDice1);

var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomDice2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".img2").setAttribute("src", randomDice2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 " + player1 + " Wins!";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = player2 + " Wins! 🚩";
} else if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw!";
}