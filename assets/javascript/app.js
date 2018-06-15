$(document).ready(function() {

var questionsArr = ['What is Javascript?', 'What is NaN?', 'What is Flanders first name?'];
var answersArr = [['Programming Language', 'Type of Coffee'], ['Not-A-Number', 'Grandmother'], ['Al','Ned']];
var correctAnswers = ['Programming Language', 'Not-A-Number', 'Ned'];
var counter = 0;
var rightAnswers = 0;
var wrongAnswers = 0;
var count = 30;
var clock;

$("body").on("click", "#answer", function() {
    choice = $(this).text();
    if(choice == correctAnswers[counter]){
        alert("correct");
        rightAnswers ++;
        clearInterval(clock);
        console.log(correctAnswers[counter]);
        newQuestion();
        questionChange();
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

function countdown() {
    clock = setInterval(thirty, 1000);
    function thirty() {
        if (count === 0) {
            clearInterval(clock);
            questionChange();
            newQuestion();
        }
        if (count > 0) {
            count--;
        } 
        $("#time").html(count);
        console.log(count);
    }
}

// Changes to new Question;
function questionChange() {
    if (counter < 2)  {
        counter++;
        newQuestion();
        count = 30;
        countdown();
    } else {
        results();
    }
console.log(counter);
};


// New questions are added to the html using function;
function newQuestion() {
//question are changed over counter var;
    addQuestion = "<p class='questionMade'>" + questionsArr[counter] + 
    "</p><p id='answer'>" + answersArr[counter][0] + 
    "</p> <p id='answer'>" + answersArr[counter][1] + "</p>";
        $(".content").html(addQuestion);
    
};
//Displays results;
 function results() {
     addQuestion = "<p class='results'>" + 'Right Answers: ' + rightAnswers + 
     '</p><p>' + 'Wrong Answers: ' +  wrongAnswers + "</p>";
        $(".content").html(addQuestion);

}

});