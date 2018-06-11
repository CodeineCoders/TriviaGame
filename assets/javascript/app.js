$(document).ready(function() {

var questionsArr = ['What is Javascript?', 'What is NaN?'];
var answersArr = [['Programming Language', 'Type of Coffee'], ['Not-A-Number', 'Grandmother']];
var correctAnswers = ['A. Programming Language', 'A. Not-A-Number'];
var counter = 0;



function questionChange() {
    if (counter < 2) {
        counter++;
        newQuestion();
    }
};

function newQuestion() {
    addQuestion = "<p class='question'>" + questionsArr[counter] + "</p>" + "<p class='choices'>" +'A. ' + answersArr[counter][0] + "</p>" + "<p>" + 'B. ' + answersArr[counter][1] + "</p>";
    $(".question").html(addQuestion);
};

$(".question").on("click", function() {
    newQuestion();
    setTimeout(questionChange, 5000);
});





});