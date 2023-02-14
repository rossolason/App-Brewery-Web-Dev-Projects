var gamePattern = [];
var userClickedPattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];
var gameStarted = false;
var level = 0;

function nextSequence() {
  var randomChosenColor = buttonColors[Math.floor(Math.random() * 4)];
  gamePattern.push(randomChosenColor);
  $("h1").text("Level " + level);
  level++;
  $("#" + randomChosenColor)
    .fadeOut(100)
    .fadeIn(100);
  playSound(randomChosenColor);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

function checkAnswer(currentLevel) {
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    // The user picked the correct button.
    console.log("success");
  } else {
    // Incorrect button was selected.
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    });
    $("h1").text("Game Over, Press Any Key To Restart");
    startOver();
    console.log("wrong");
  }
  if (userClickedPattern.length === gamePattern.length && gameStarted) {
    setTimeout(function () {
      nextSequence();
    }, 1000);
    userClickedPattern = [];
  }
}

function startOver() {
  // Start the game over.
  level = 0;
  gamePattern = [];
  userClickedPattern = [];
  gameStarted = false;
}

// Look for user button clicks.
$(".btn").click(function (event) {
  var userChosenColor = event.target.id;
  userClickedPattern.push(userChosenColor);
  animatePress(userChosenColor);
  playSound(userChosenColor);
  checkAnswer(userClickedPattern.length - 1);
});

// Look for key presses.
$(document).keypress(function () {
  if (!gameStarted) {
    nextSequence();
    gameStarted = true;
  }
});
