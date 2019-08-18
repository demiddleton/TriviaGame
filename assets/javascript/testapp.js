$(document).ready(function () {

    //Declare variable to hold the setInterval timer
    var intervalID;

    //Declare variable equal to the start time
    var time = 10;

    //Declare variable to track the number of questions answered correctly
    var correct = 0;

    //Create a function to hide the start button when it is clicked
    $("#startButton").click(function () {
        $(".start").hide();
        $(".questions").show();
    });
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
            }

            var q2Value = $('.q2:checked').val();
            console.log(q2Value);
            if (q2Value === "option2") {
                correct++;
            }

            var q3Value = $('.q3:checked').val();
            console.log(q3Value);
            if (q3Value === "option2") {
                correct++;
            }

            $("#done-text").show();
            $("#done-text").text("You answered " + correct + " out of the 3 questions correctly.");
        }
    }


});

