$(document).ready(function() {

var questionsArr = ['What is Javascript?', 'What is NaN?'];
var answersArr = [['Programming Language', 'Type of Coffee'], ['Not-A-Number', 'Grandmother']];
var correctAnswers = ['A. Programming Language', 'A. Not-A-Number'];
var counter = 0;
var timeLeft = 3;
var timerId = setInterval(countdown, 1000);

function countdown() {
    if (timeLeft == 0) {
        clearTimeout(timerId);
        questionChange();
    }else {
        timeLeft--;
    }
}


function questionChange() {
    if (counter < 2) {
        counter++;
        newQuestion();
    }
};
// New questions are added to the html using function;
function newQuestion() {
//question are changed over counter function;
    addQuestion = "<p class='question'>" + questionsArr[counter] + "</p>" + 
//muiltiple choices are charged over counter function as well;
        "<p class='choices'><p id=choiceA'> " +'A. ' + answersArr[counter][0] + "</p>" + 
        "<p id='choiceB'>" + 'B. ' + answersArr[counter][1] + "</p>";


    $(".question").html(addQuestion);
};

$(".question").on("click", function() {
    newQuestion();
    countdown();
    // setTimeout(questionChange, 50000000);
});





});