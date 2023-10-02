var wins = 0;
var ties = 0;
var losses = 0;

var options = ["R", "P", "S"];

var playGame = function () {
  var userChoice = window.prompt("Enter R, P, or S:");

  if (!userChoice) {
    return;
  }

  userChoice = userChoice.toUpperCase().trim();

  var index = Math.floor(Math.random() * options.length);
  var computerChoice = options[index];

  window.alert("Computer's choice was " + computerChoice);

  if (userChoice === computerChoice) {
    ties++;
    window.alert("It's a tie!");

  } else if (
    (userChoice === "R" && computerChoice === "S") ||
    (userChoice === "S" && computerChoice === "P") ||
    (userChoice === "P" && computerChoice === "R")
  ) {
    wins++;
    window.alert("You are the big winner!!!");

  } else {
    losses++;
    window.alert("You are the big loser!!!");
  }

  window.alert(
    "Stats:\nWins: " + wins + "\nLosses: " + losses + "\nTies: " + ties
  );

  var playAgain = window.confirm("Play Again?");

  if (playAgain) {
    playGame();
  }
};

playGame();