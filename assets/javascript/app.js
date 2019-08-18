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
                      
            if ($(this).val() === "option4") {
                correct++;
                console.log(correct);
            }
            
        });

        $('.q2').click(function () {
            $('.q2').not(this).prop('checked', false);
                       
            if ($(this).val() === "option6") {
                correct++;
                console.log(correct);
            }
        });

        $('.q3').click(function () {
            $('.q3').not(this).prop('checked', false);
                        
            if ($(this).val() === "option10") {
                correct++;
                console.log(correct);
            }
        });

    });
});