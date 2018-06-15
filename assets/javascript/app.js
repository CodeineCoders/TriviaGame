$(document).ready(function() {

var questionsArr = ['Who ran over Snowball I?', 'How much did Bart sell his soul for?', "What is Ned Flanders wife's name?"];
var answersArr = [['Cletus', 'Clovis Quimby', 'Maggie', 'Mayor Quimby'], ['$5', '$10', '$20', 'Comic-Book'], ['Maude','Ruth', 'Edna', 'Mona']];
var correctAnswers = ['Clovis Quimby', '$5', 'Maude'];
var counter = 0;
var rightAnswers = 0;
var wrongAnswers = 0;
var count = 10;
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
        clearInterval(clock);
        newQuestion();
        questionChange();
    }
});

// Start Game;
$(".start").on("click", function() {
    newQuestion();
    countdown();
    $(".start").hide();
 
 });

function countdown() {
    clock = setInterval(thirty, 1000);
    function thirty() {
        if (count === 0) {
            clearInterval(clock);
            questionChange();
            newQuestion();
            wrongAnswers++;
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
        count = 10;
        countdown();
    } else {
        results();
        $("#time").hide();
    }
console.log(counter);
};


// New questions are added to the html using function;
function newQuestion() {
//question are changed over counter var;
    addQuestion = "<p class='questionMade'>" + questionsArr[counter] + 
    "</p><p id='answer'>" + answersArr[counter][0] + 
    "</p><p id='answer'>" + answersArr[counter][1] + 
    "<p id='answer'>" + answersArr[counter][2] +
    "<p id='answer'>" + answersArr[counter][3] + "</p>";
        $(".content").html(addQuestion);
    
};
//Displays results;
 function results() {
     addQuestion = "<p class='results'>" + 'Right Answers: ' + rightAnswers + 
     '</p><p>' + 'Wrong Answers: ' +  wrongAnswers + "</p>";
        $(".content").html(addQuestion);

}

});