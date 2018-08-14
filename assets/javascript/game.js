// GLOBAL VARIABLES
// ===============================================

// Crystal Variables
var crystal = {
  sapphire: {
    name: "sapphire",
    value: 0
  },
  ruby: {
    name: "ruby",
    value: 0
  },
  diamond: {
    name: "diamond",
    value: 0
  },
  emerald: {
    name: "emerald",
    value: 0
  }
};

// Scores (current and target)
var currentScore = 0;
var targetScore = 0;

// Wins and Losses
var winCount = 0;
var lossCount = 0;


// FUNCTIONS
// ===============================================

// Helper function for getting random numbers
var getRandom = function(min, max) {
return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Starts the game and restarts the game
var startGame = function() {
// reset current score
currentScore = 0;

// set new target score between 19 and 120
targetScore = getRandom(19, 120);

// set different values for each crystal between 1 and 12
crystal.sapphire.value = getRandom(1, 12);
crystal.ruby.value = getRandom(1, 12);
crystal.diamond.value = getRandom(1, 12);
crystal.emerald.value = getRandom(1, 12);

// set HTML to reflect all changes
$("#targetScore").html(targetScore);
$("#yourScore").html(currentScore);

// Testing Console
console.log("----------------------");
console.log("Target Score: " + targetScore);
console.log("sapphire: " + crystal.sapphire.value + "| Ruby: " + crystal.ruby.value + " | Diamond: " + crystal.diamond.value + "| emerald: " + crystal.emerald.value);
console.log("----------------------");
};

// Check if user won or lost game and reset game
var checkScore = function() {

// If current score is higher than target score, record loss, update HTML
if (currentScore > targetScore) {
  alert("Sorry - You Lost!");
  console.log("You Lost!");

  // Add loss to lossCount
  lossCount++;

  // Update HTML to reflect loss
  $("#losses").html(lossCount);

  // Restart game
  startGame();
}
// Check if target score equals current score, record win, update HTML
else if (currentScore === targetScore) {
  alert("Congratulations! You Won!");
  console.log("You Won!");

  // Add win to winCount
  winCount++;

  // Update HTML to reflect win
  $("#wins").html(winCount);

  // Restart game
  startGame();
}

}

// Response to clicks on the crystals
var addValues = function(crystal) {

// Change current score
currentScore = currentScore + crystal.value;

// Change the HTML to reflect changes in current score
$("#yourScore").html(currentScore);

// Call the checkScore() function
checkScore();

// Testing Console
console.log("Your Score: " + currentScore);

}


// MAIN PROCESS
// ===============================================

// Starts the game for the first time
startGame();

$("#sapphire").click(function() {
addValues(crystal.sapphire);
});

$("#ruby").click(function() {
addValues(crystal.ruby);
});

$("#diamond").click(function() {
addValues(crystal.diamond);
});

$("#emerald").click(function() {
addValues(crystal.emerald);
});