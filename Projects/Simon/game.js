var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
//create a new empty array with the name userClickedPattern.
var userClickedPattern = [];
var started = false;
var level = 0;


//1. Use jQuery to detect when any of the buttons are clicked and trigger a handler function.
$(".btn").click(function() {
  //use jQuery to add 'pressed' class to button.
  animatePress(this);
  //2. Inside the handler, create a new variable called userChosenColour to store the id of the button that got clicked.
  var userChosenColour = $(this).attr("id");
  //3. call function to play sound when player presses buttons
  playSound(userChosenColour);
  //4. Add the contents of the variable userChosenColour created in step 2 to the end of this new userClickedPattern
  userClickedPattern.push(userChosenColour);
  //console.log(userClickedPattern);
  //2. Call checkAnswer() after a user has clicked and chosen their answer, passing in the index of the last answer in the user's sequence.
  checkAnswer(userClickedPattern.length-1);
});

$(document).keypress(function() {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

//1. Create a new function called checkAnswer(), it should take one input with the name currentLevel
function checkAnswer(currentLevel) {
    //3. Write an if statement inside checkAnswer() to check if the most recent user answer is the same as the game pattern. If so then log "success", otherwise log "wrong".
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
      console.log("success");
      //4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
      if (userClickedPattern.length === gamePattern.length){
        //5. Call nextSequence() after a 1000 millisecond delay.
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }
    } else {
      var wrong = new Audio("sounds/wrong.mp3");
      wrong.play();
      $("body").addClass("game-over");
      setTimeout(function() {
        $("body").removeClass("game-over");
      }, 250);
      $("#level-title").text("Game Over, Press any key to Restart")
      startOver();
    }
}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}

function animatePress(currentColor) {
  $(currentColor).addClass("pressed");
  setTimeout(function(){
    $(currentColor).removeClass("pressed");
  }, 250);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}


function simon(pattern) {
    //1. Use jQuery to select the button with the same id as the randomChosenColour
    //2. Use Google/Stackoverflow to figure out how you can use jQuery to animate a flash to the button selected in step 1.
    pattern.forEach((item, i) => {
      setTimeout(function() {
        //set the button to flash at 1.5 seconds times its index. i[0] will flash imediately
        // i[1] should flash 1.5 seconds later, i[2] should flash 3 seconds later.
        $("#" + item).fadeOut(500).fadeIn(250);
        //3. Use Google/Stackoverflow to figure out how you can use Javascript to play the sound for the button colour selected in step 1.
        playSound(item);
      }, i * 1500); // <-- note the timeout, 1.5 seconds
    });



}

function nextSequence() {
  //empty the array each time the function is called. update the level
  level++;
  $("#level-title").text("Level " + level);
  userClickedPattern = [];
  //Generate a random number from 0 - 3,
  var randomNumber = getRandomInt(4);
  var randomChosenColour = buttonColors[randomNumber];
  gamePattern.push(randomChosenColour);
  simon(gamePattern);


  return randomNumber;
}

function getRandomInt(max) {
  //Returns a random integer up to but not including (max) i.e. max = 3, will return numbers from 0-2
  return Math.floor(Math.random() * Math.floor(max));
}
