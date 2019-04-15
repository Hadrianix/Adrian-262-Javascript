

var quiz = document.bearQuiz;
var nextButtons = document.querySelectorAll(".nextButton");
for (let i = 0; i < nextButtons.length; i++) {
  nextButtons[i].addEventListener("click", function (event) {
    event.currentTarget.parentNode.style.display = "none";
    event.currentTarget.parentNode.nextElementSibling.style.display = "block";
  })
}

quiz.submit.addEventListener("click", function (event) {

  if (quiz.checkValidity()) {
    event.preventDefault();

    var score = 0;

    if (quiz.bearGroup[0].checked) {
      score++
    }


    if (quiz.largeBear.value.toLowerCase() === "kodiak") {
      score++;
    }

    if (quiz.biteForce[0].checked) {
      score++;
    }

    if (quiz.bearFur1.checked || !quiz.bearFur2.checked || !quiz.bearFur3.checked || quiz.bearFur4) {
      score++;
    }

    if (quiz.smallBear.value.toLowerCase() === "sunbear" || smallBear.value.toLowerCase() == "sun bear") {
      score++;
    }

    if (quiz.biteForce[0].checked) {
      score++
    }

    if (quiz.sense[2].checked) {
      score++
    }

    if (quiz.common[0].checked) {
      score++

    }

    if (quiz.sense[0].checked) {
      score++;
    }

    if (quiz.food3.checked) {
      score++;
    }

    if (quiz.carnivores.value === "false") {
      score++;
    }

    if (quiz.feed.value === "false") {
      score++;
    }


    document.getElementById('score').style.display = "block";
    document.getElementById('results').innerHTML = "Your score is " + score + "/10!"
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





