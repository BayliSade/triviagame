var correctGuess = 0;
var inCorrectGuess = 0;
var unAnswered = 0;
var timeLeft = 30;

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
    $(".hidden").removeClass("hidden");
    newGame();
    var decreaseTime = setInterval(timer,1000);
    function timer() {
        $("#timeRemaining").text(timeLeft);
        timeLeft --;
        if (timeLeft === -1) {
            clearInterval(decreaseTime);
        }
    }
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
};
});

// fade Out method // fade In method hide method