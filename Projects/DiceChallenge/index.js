function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

// Generate a random number from 1 to 6.
  var randomNumber1 = getRandomInt(6) + 1;
  //check number, assign appropriate image.
  if (randomNumber1 === 1) {
    var dice = document.getElementById("p1Dice");
    dice.setAttribute("src", "images/dice1.png");
  } else if (randomNumber1 === 2){
    var dice = document.getElementById("p1Dice");
    dice.setAttribute("src", "images/dice2.png");
  } else if (randomNumber1 === 3) {
    var dice = document.getElementById("p1Dice");
    dice.setAttribute("src", "images/dice3.png");
  } else if (randomNumber1 === 4) {
    var dice = document.getElementById("p1Dice");
    dice.setAttribute("src", "images/dice4.png");
  } else if (randomNumber1 === 5) {
    var dice = document.getElementById("p1Dice");
    dice.setAttribute("src", "images/dice5.png");
  } else if (randomNumber1 === 6) {
    var dice = document.getElementById("p1Dice");
    dice.setAttribute("src", "images/dice6.png");
  }
  else{
    console.log("something went wrong with P1");
  }
  var randomNumber2 = getRandomInt(6) + 1;
  if (randomNumber2 === 1) {
    var dice = document.getElementById("p2Dice");
    dice.setAttribute("src", "images/dice1.png");
  } else if (randomNumber2 === 2){
    var dice = document.getElementById("p2Dice");
    dice.setAttribute("src", "images/dice2.png");
  } else if (randomNumber2 === 3) {
    var dice = document.getElementById("p2Dice");
    dice.setAttribute("src", "images/dice3.png");
  } else if (randomNumber2 === 4) {
    var dice = document.getElementById("p2Dice");
    dice.setAttribute("src", "images/dice4.png");
  } else if (randomNumber2 === 5) {
    var dice = document.getElementById("p2Dice");
    dice.setAttribute("src", "images/dice5.png");
  } else if (randomNumber2 === 6) {
    var dice = document.getElementById("p2Dice");
    dice.setAttribute("src", "images/dice6.png");
  }
  else{
    console.log("something went wrong with P2");
  }

  if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Draw 🚩";
  } else if (randomNumber1 > randomNumber2) {
      document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
  } else if (randomNumber1 < randomNumber2) {
      document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
  } else {
    console.log('something went wrong in winner calculation. refresh.')
  }
