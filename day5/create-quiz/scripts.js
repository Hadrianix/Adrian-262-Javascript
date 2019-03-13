var submitButton = document.playQuiz.submit;

submitButton.addEventListener("click", function (event) {
    event.preventDefault();

    var score = 0;

    var group = document.bearQuiz.group;
    var largeBear = document.bearQuiz.largeBear;
    var bearFur = document.bearQuiz.bearFur;
    var smallBear = document.bearQuiz.smallBear
    var biteForce = document.bearQuiz.biteForce

    if (group[3].checked) {
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

    document.getElementById('results').innerHTML = "Your score is " + score + "/5!"





    console.log(score);


})