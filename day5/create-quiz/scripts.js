

var quiz = document.bearQuiz;
var nextButtons = document.querySelectorAll(".nextButton");
for (let i = 0; i < nextButtons.length; i++) {
  nextButtons[i].addEventListener("click", function(event) {
    event.currentTarget.parentNode.style.display = "none";
    event.currentTarget.parentNode.nextElementSibling.style.display = "block";
  })
}

quiz.submit.addEventListener("click", function(event) {
  
  if(quiz.checkValidity()) {
    event.preventDefault();
  
    var score = 0;

    if (quiz.bearGroup[0].checked) {
        score++
    }


    if (quiz.largeBear.value.toLowerCase() === "kodiak") {
      score++;
    }

    if (quiz.bearFur4.checked) {
      score++;
    }

    if (quiz.smallBear.value.toLowerCase() === "sun bear") {
      score++;
    }

    if (quiz.biteForce[0].checked) {
      score++;
    }

    if (quiz.sense[0].checked) {
        score++;
    }

    if (quiz.sense[1].checked) {
        score++;
    }

    if (quiz.sense[1].checked) {
        score++;
    }

    if (quiz.food3.checked) {
        score++;
    }

    if (quiz.carnivores.value === "false") {
        score++;
    }


    document.getElementById('score').style.display = "flex";
    document.getElementById('results').innerHTML = "Your score is " + score + "/9!"
  } else {
    for (var x = 0; x < nextButtons.length; x++) {
      nextButtons[x].style.display = "none";
    }
    var fieldsets = document.querySelectorAll("fieldset");
    for (var y = 0; y < fieldsets.length; y++) {
      fieldsets[y].style.display = "block";
    }
    
  }
  
  
})





