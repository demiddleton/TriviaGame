$(document).ready(function () {

    //Declare variable to hold the setInterval timer
    var intervalID;

    //Declare variable equal to the start time
    var time = 30;

    //Declare variables to track the number of questions answered correctly, incorrectly & unanswered
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;

    //Create a function to hide the start button when it is clicked
    $("#startButton").click(function () {
        $(".start").hide();
        $(".questions").show();

        //Create a function to stop timer and display stats once the done button is clicked
        $("#doneButton").click(function () {
            $(".questions").hide();
                clearInterval(intervalID);
                $("#timeRemaining-text").hide();

                q1IsChecked();
                q2IsChecked();
                q3IsChecked();


                $("#done-text").show();
                $("#done-text").text("All Done!");

                $("#correct-text").show();
                $("#correct-text").text("Correct Answers: " + correct);

                $("#incorrect-text").show();
                $("#incorrect-text").text("Incorrect Answers: " + incorrect);

                $("#unanswered-text").show();
                $("#unanswered-text").text("Unanswered: " + unanswered);
            
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

                q1IsChecked();
                q2IsChecked();
                q3IsChecked();


                $("#done-text").show();
                $("#done-text").text("All Done!");

                $("#correct-text").show();
                $("#correct-text").text("Correct Answers: " + correct);

                $("#incorrect-text").show();
                $("#incorrect-text").text("Incorrect Answers: " + incorrect);

                $("#unanswered-text").show();
                $("#unanswered-text").text("Unanswered: " + unanswered);
            }
        }

    });
    function q1IsChecked() {
        var q1Value = $('.q1:checked').val();
        console.log(q1Value);      

        if (q1Value != "option4") {
            incorrect++;
        } else {
            correct++;
        }
        if (!$("input[name='inlineRadioOptions1']:checked").val())  {
            unanswered++;
        }
    }

    function q2IsChecked() {
        var q2Value = $('.q2:checked').val();
        console.log(q2Value);      

        if (q2Value != "option6") {
            incorrect++;
        } else {
            correct++;
        }
        if (!$("input[name='inlineRadioOptions2']:checked").val())  {
            unanswered++;
        }
    }
    function q3IsChecked() {
        var q3Value = $('.q3:checked').val();
        console.log(q3Value);
                 
        if (q3Value != "option10") {
            incorrect++;
        } else {
            correct++;
        }
        if (!$("input[name='inlineRadioOptions3']:checked").val())  {
            unanswered++;
        }
    }
});

