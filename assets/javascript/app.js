
// Variables
// var questions = ["'q1'" , "'q2'" , "'q3'" , "'q4'" , "'q5'"]
var numCorrect = 0;
var numIncorrect = 0;
var numUnanswered = 5;
var x;


// Timer
var timeRemaining = 90;

function countdown(){
    timeRemaining--;
    // display countdown
    $("#timeRemaining").html("<h2>Time Remaining: " + timeRemaining + "</h2>");
    
    // When timer reaches 0
    if (timeRemaining === 0) {
        // Stop timer
        clearInterval(timer);
        showResultsPage();
        
    };
};


//Functions

// Start game > Hide Start Button > Show Questions
$("#startButton").on("click", function() {
    // Hide Start Button
    $("#start").hide();
    // Show Questions
    $("#questions").css("display", "flex");

    // Start Timer
    timer = setInterval(countdown, 1000);
});

// Score Me bottom > Results page
$("#SubmitButton").on("click", function() {
    clearInterval(timer);
    showResultsPage();
});

// Display results page
function showResultsPage() {
    // Hide Questions
    $("#questions").hide();
    // Show Results Page
    $("#results").css("display", "flex");
    // show evaluated results
    evaluateResults();
};



// Evaluate results from loop
// function evaluateResults() {
//     for (var i = 0; 0<questions.length; i++){
//         x = '$( "input[name='+questions[i]+']:checked" ).val()'
//         if (x === "correct") {
//             numCorrect++;
//             numUnanswered--;
//         } else if (x === "incorrect") {
//             numIncorrect++;
//             numUnanswered--;
//         }
//         console.log(numCorrect, numIncorrect, numUnanswered);
//     };
// }; 

// Evaluate each question individually
function evaluateResults() {

    // Evaluate q1
    if ($("input[name='q1']:checked").val() === "correct") {
        numCorrect++;
        numUnanswered--;
    } else if ($("input[name='q1']:checked").val() === "incorrect") {
        numIncorrect++;
        numUnanswered--;
    }

    // Evaluate q2
    if ($("input[name='q2']:checked").val() === "correct") {
        numCorrect++;
        numUnanswered--;
    } else if ($("input[name='q2']:checked").val() === "incorrect") {
        numIncorrect++;
        numUnanswered--;
    }

    // Evaluate q3
    if ($("input[name='q3']:checked").val() === "correct") {
        numCorrect++;
        numUnanswered--;
    } else if ($("input[name='q3']:checked").val() === "incorrect") {
        numIncorrect++;
        numUnanswered--;
    }

    // Evaluate q4
    if ($("input[name='q4']:checked").val() === "correct") {
        numCorrect++;
        numUnanswered--;
    } else if ($("input[name='q4']:checked").val() === "incorrect") {
        numIncorrect++;
        numUnanswered--;
    }

    // Evaluate q5
    if ($("input[name='q5']:checked").val() === "correct") {
        numCorrect++;
        numUnanswered--;
    } else if ($("input[name='q5']:checked").val() === "incorrect") {
        numIncorrect++;
        numUnanswered--;
    }


    // display results text
    $("#resultsText").html(
        "<h3>Correct: " + numCorrect + "</h3>" +
        "<h3>Incorrect: " + numIncorrect + "</h3>" +
        "<h3>Unanswered: " + numUnanswered + "</h3>"
    );
    
}; 



