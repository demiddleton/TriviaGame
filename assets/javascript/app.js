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

        //Create timer to countdown from 15 seconds once the start button is clicked
        intervalID = setInterval(count, 1000);
        function count() {
            $("#timeRemaining-text").text("You have " + time + " seconds left.");
            time--;

            if (time < 0) {
                $(".questions").hide();
                clearInterval(intervalID);
                $("#timeRemaining-text").hide();
                $("#done-text").show();
                $("#done-text").text("You answered " + correct + " out of the 3 questions correctly.");

            }
        }

        //Player cannot pick more than one answer per question    
        $('.q1').click(function () {
            $('.q1').not(this).prop('checked', false);
            console.log(this);
        });
        correct = q1Function(correct);

        $('.q2').click(function () {
            $('.q2').not(this).prop('checked', false);
            console.log(this);
        });
        correct = q2Function(correct);


        $('.q3').click(function () {
            $('.q3').not(this).prop('checked', false);
            console.log(this);
        });

        correct = q3Function(correct);
    });

});

function q1Function(correct) {
    if ($("#q1Checkbox4")) {
        correct++;
    }
    return correct;
}

function q2Function(correct) {
    if ($("#q2Checkbox2")) {
        correct++;
    }
    return correct;
}

function q3Function(correct) {
    if ($("#q3Checkbox2")) {
        correct++;
    }
    return correct;
}