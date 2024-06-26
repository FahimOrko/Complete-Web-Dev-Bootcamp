
var gamePattern = [];

var userClickedPattern = [];

var buttonColors = ["red", "blue", "green", "yellow"];

var randomChosenColor = "";

var level = 0;

var started = false;

alert("This is the simon game. To start the game you have to press the start key. To go to the next level on this game, you have to click on the box that was higlited after pressing a key on keybord and you have to remember the sequnece on the previous level. Try it out and you'll understand the game in a bit or google it for better understaing. Enjoy.");

// game pattern

function nextSequence() {

    level++;
    $("#level-title").text("Level " + level);

    var randomNum = Math.floor(Math.random()*4);
    randomChosenColor = buttonColors[randomNum];
    gamePattern.push(randomChosenColor);

    $("#"+randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

    var audio = new Audio("sounds/"+ randomChosenColor + ".mp3");
    audio.play();


}


// user clicked buttons


$(".btn").on("click", function(event) {
    var userChosenColor = event.currentTarget.id;
    userClickedPattern.push(userChosenColor);

    $("#"+userChosenColor).fadeOut(10).fadeIn(10);

    var audio = new Audio("sounds/"+ userChosenColor + ".mp3");
    audio.play();

    checkAnswer(userClickedPattern.length-1);

    // console.log(userChosenColor);
    // alert("Hellow");
})


// key pressed to start the game


$("#level-title").on("click", function() {
    $("#level-title").fadeOut(10).fadeIn(10)
    if (started == false) {
      nextSequence();
      started = true;
    }
});


// check the answer and run next level


function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        
        if (userClickedPattern.length === gamePattern.length){
            
            setTimeout(function() {
            
                userClickedPattern = [];
                nextSequence();

            }, 1000);

        }

    // when game over

    } else {
        
        var audio = new Audio("sounds/"+ "wrong" + ".mp3");
        audio.play();
        $("body").addClass("game-over");

        setTimeout( function () {
            $("body").removeClass("game-over");
        }, 200);


        level = 0;
        started = false;
        userClickedPattern = [];
        gamePattern = [];

        $("#level-title").text("Restart");

    }

}