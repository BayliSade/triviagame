var correctGuess = 0;
var inCorrectGuess = 0;
var unAnswered = 0;
var timeLeft = 30;
var decreaseTime;

$(document).ready(function() {
var questions = [
    {
        question: "Which is not a flying bird?",
        choices: ["Penguin", "Goose", "Seagul", "Turkey"],
        correctAnswer: "Penguin"
    },   
    {
        question: "How would you initialize jQuery in javascript?",
        choices: ["#", "&", "!", "@", "$"],
        correctAnswer: "$"
    },
    {
        question: "Which is not a color?",
        choices: ["Blue", "Black", "Red", "Purple", "Orange"],
        correctAnswer: "Black"
    }
]

$('#startButton').on('click', function(){
	$(this).hide();
	newGame();
});

$('#startOverButton').on('click', function(){
	$(this).hide();
    newGame();
});

function newGame() {
    $("#correctAnswers").empty();
    $("#inCorrectAnswers").empty();
    $("#unAnswered").empty();
    correctGuess = 0;
    inCorrectGuess = 0;
    unAnswered = 0;
}

var decreaseTime = setInterval(function() {
    $("#timeRemaining").text(timeLeft);
    timeLeft --;

    if (timeLeft === -1) {
        clearInterval(decreaseTime);
    }
},1000);
});


// if(timeLeft === 0) {
//     clearInterval(decreaseTime);
// // }
// method = function in an object

// fade Out method // fade In method hide method