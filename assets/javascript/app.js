$(document).ready(function() {

var questionsArr = ['What is Javascript?', 'What is NaN?'];
var answersArr = [['Programming Language', 'Type of Coffee'], ['Not-A-Number', 'Grandmother']];
var correctAnswers = ['Programming Language', 'Not-A-Number'];
var counter = 0;
var correctedAnswers = 0;
var wrongAnswers = 0;

$("body").on("click", "#answer", function() {
    choice = $(this).text();
    if(choice == correctAnswers[counter]){
        alert("correct");
        correctAnswers ++;
        console.log(correctAnswers[counter]);
    }   
    else {
        alert("wrong");
        wrongAnswers ++;
        
    }
});

// Start Game;
$(".timer").on("click", function() {
    newQuestion();
    countdown();
    $(".timer").hide();
 
 });
 //30 sec timer;
function countdown() {
    var count = 30;
    var timerId = setInterval(function() {
        count--;
        console.log(count);

        if (count === 0) {
            questionChange();
            newQuestion();
            count = 30;
            
        }
    }, 1000);
}


function questionChange() {
    if (counter <= 2) {
        counter++;
        newQuestion();
        count = 30;
    }else {
        results();
    }
};
// New questions are added to the html using function;
function newQuestion() {
//question are changed over counter var;
    addQuestion = "<p class='questionMade'>" + questionsArr[counter] + 
    "</p><p id='answer'>" + answersArr[counter][0] + 
    "</p> <p id='answer'>" + answersArr[counter][1] + "</p>";
        $(".content").html(addQuestion);
    
};
 function results() {
     addQuestion = "<p class='results'>" + correctAnswers + wrongAnswers + "</p>";
        $(".content").html(addQuestion);
 }



});