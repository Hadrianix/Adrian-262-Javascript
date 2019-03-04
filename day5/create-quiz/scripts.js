var bearQuiz = document.bearQuiz;
var next = document.querySelectorAll(".nextButton");
for (let i = 0; i < next.length; i++) {
    next[i].addEventListener("click", function(event) {
        event.currentTarget.parentNode.style.display = "none";
        event.currentTarget.parentNode.nextElementSibling.style.display = "block";
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
        var sense = document.bearQuiz.sense
        var common = document.bearQuiz.common

        var score = 0;

        if (group[0].checked) {
            score++
        }

        if (largeBear.value == "Polar Bear" || largeBear.value == "polar bear") {
            score++
        }
    
        if (bearQuiz.bearFur.checked) {
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

        if (sense[2].checked) {
            score++
        }

        if (common[0].checked) {
            score++
        }
        
        document.getElementById('score').innerHTML = "Your score is " + score + "/6!"
        
    } else {
        for (var x = 0; x < next.length; x++) {
            next[x].style.display= "none";
        }

        var fields = document.querySelectorAll("fieldset");
        for (var y = 0; y < fields.length; y++) {
            fields[y].style.display = "block";
        }
    }

    
})

