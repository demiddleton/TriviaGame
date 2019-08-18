$(document).ready(function () {

    //Declare variable to hold the setInterval timer
    var intervalID;

    //Declare variable equal to the start time
    var time = 10;

    //Declare variables to track the number of questions answered correctly & incorrectly
    var correct = 0;
    var incorrect = 0;

    //Create a function to hide the start button when it is clicked
    $("#startButton").click(function () {
        $(".start").hide();
        $(".questions").show();
   

        //Create timer to countdown from 15 seconds once the start button is clicked
    intervalID = setInterval(count, 1000);
    function count() {
        $("#timeRemaining-text").text("You have " + time + " seconds left.");
        time--;

        if (time < 0) {
            $(".questions").hide();
            clearInterval(intervalID);
            $("#timeRemaining-text").hide();

            var q1Value = $('.q1:checked').val();
            console.log(q1Value);
            if (q1Value === "option4") {
                correct++;
            } else {
                incorrect++;
            }

            var q2Value = $('.q2:checked').val();
            console.log(q2Value);
            if (q2Value === "option2") {
                correct++;
            } else {
                incorrect++;
            }

            var q3Value = $('.q3:checked').val();
            console.log(q3Value);
            if (q3Value === "option2") {
                correct++;
            } else {
                incorrect++;
            }

            $("#done-text").show();
            $("#done-text").text("All Done!");

            $("#correct-text").show();
            $("#correct-text").text("Correct Answers: " + correct);

            $("#incorrect-text").show();
            $("#incorrect-text").text("Incorrect Answers: " + incorrect);
        }
    }

});

});

