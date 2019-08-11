//Create variable to hold the setInterval timer
var intervalID;

//Create variable equal to the start time
var time = 15;

//Create variable to track the number of questions answered correctly
var correct = 0;


//Create a function to hide the start button when it is clicked
$("#startButton").click(function () {
    $(".start").hide();
    $(".questions").show();
    intervalID = setInterval(count, 1000);
    function count(){
        $("#timeRemaining-text").text("You have " + time + " seconds left." );
        time--;

        if(time < 0){
            $(".questions").hide();
            clearInterval(intervalID);
            $("#timeRemaining-text").hide();
            $("#done-text").show();
            $("#done-text").text("You answered " + correct + " out of the three questions correctly." );
        }

    }

});

 //Create timer to countdown from 15 seconds once the start button is clicked


//Player cannot pick more than one answer per question
//Display screen saying "Game Over" and number of correct answers and # of incorrect answers