var submitButton = document.bearQuiz.submit;

submitButton.addEventListener("click", function (event) {
    event.preventDefault();

    var score = 0;

    var group = document.bearQuiz.group;
    var largeBear = document.bearQuiz.largeBear;
    var bearFur = document.bearQuiz.bearFur;
    var smallBear = document.bearQuiz.smallBear
    var biteForce = document.bearQuiz.biteForce

    if (group[0].checked) {
        score++
    }

    if (largeBear.value == "Polar Bear" || largeBear.value == "polar bear") {
        score++
    }

    if (bearQuiz.bearfur4.checked) {
        score++
    }

    // if (!bearfur1.checked || !bearfur2.checked || !bearfur3.checked) {
    //     score++;
    // }

    if (smallBear.value == "sunbear" || smallBear.value == "Sun Bear" || smallBear.value == "sun bear" || smallBear.value == "Sun bear") {
        score++
    }

    if (biteForce[0].checked) {
        score++
    }

    document.getElementById('score').innerHTML = "Your Score is " + score + "/5!";





    console.log(score);


})

var bearQuiz = document.bearQuiz;
var next = document.querySelectorAll(".nextButton");
for (let i = 0; i < nextButtons.length; i++) {
    nextButtons[i].addEventListener("click", function(event) {
        event.currentTarget.parentNode.style.display = "none";
        event.currentTarget.parentNode.nextElementsSibling.style.display = "block";
    })
}


bearQuiz.submit.addEventListener("click", function(event){
    if(bearQuiz.checkValidity()) {
        event.preventDefault();

    var group = document.bearQuiz.group;
    var largeBear = document.bearQuiz.largeBear;
    var bearFur = document.bearQuiz.bearFur;
    var smallBear = document.bearQuiz.smallBear
    var biteForce = document.bearQuiz.biteForce

        var score = 0;

        if (group[0].checked) {
            score++
        }

        if (largeBear.value == "Polar Bear" || largeBear.value == "polar bear") {
            score++
        }
    
        if (bearQuiz.bearfur4.checked) {
            score++
        }
    
        // if (!bearfur1.checked || !bearfur2.checked || !bearfur3.checked) {
        //     score++;
        // }
    
        if (smallBear.value == "sunbear" || smallBear.value == "Sun Bear" || smallBear.value == "sun bear" || smallBear.value == "Sun bear") {
            score++
        }
    
        if (biteForce[0].checked) {
            score++
        }

        
    }
})

// var quiz = document.quizForm;
// var nextButtons = document.querySelectorAll(".next-button");
// for (let i = 0; i < nextButtons.length; i++) {
//   nextButtons[i].addEventListener("click", function(event) {
//     event.currentTarget.parentNode.style.display = "none";
//     event.currentTarget.parentNode.nextElementSibling.style.display = "block";
//   })
// }

// quiz.submit.addEventListener("click", function(event) {
  
//   if(quiz.checkValidity()) {
//     event.preventDefault();
  
//     var score = 0;

//     if (quiz.catTalk.value === "false") {
//       score++;
//     }

//     if (quiz.catGroup.value.toLowerCase() === "clowder") {
//       score++;
//     }

//     if (quiz.catMyth1.checked && quiz.catMyth2.checked && !quiz.catMyth3.checked) {
//       score++;
//     }

//     if (quiz.catSqueeze.value === "true") {
//       score++;
//     }

//     if (quiz.catEyelid.value === "true") {
//       score++;
//     }
//     document.getElementById('score').style.display = "flex";
//     document.getElementById('results').innerHTML = "Your score is " + score + "/5!"
//   } else {
//     for (var x = 0; x < nextButtons.length; x++) {
//       nextButtons[x].style.display = "none";
//     }
//     var fieldsets = document.querySelectorAll("fieldset");
//     for (var y = 0; y < fieldsets.length; y++) {
//       fieldsets[y].style.display = "block";
//     }
    
//   }
  
  
// })