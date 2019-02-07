// var divAdvert = document.getElementById('divAdvert');
// divAdvert.style.position = "absolute";
// divAdvert.style.left = "100px";
// divAdvert.style.top = "100px";


// function doThisLater() {
//     alert("Time's up!");
// }

// setTimeout(doThisLater, 3000);

// var timerId = setTimeout(yourFunction, millisecondsDelay);

// clearTimeout(timerId);

// var myTimerID = setInterval(myFunction, 5000);

// clearTimeout(myTimerID);




// function time() {
//     console.log(new Date());
// }

// setInterval(time, 1000);

var cat = document.getElementById('cat');
var walkForward = true;
var catTimer = setInterval(catWalk, 5);

function catWalk() {
    if (cat.offsetLeft >= document.body.offsetWidth - cat.offsetWidth) {
        walkForward = false;
    }

    if (cat.offsetLeft <= 0) {
        walkForward = true;
    }

    if (walkForward) {

        cat.style.transform = "scaleX(1)";
        cat.style.left = cat.offsetLeft + 1 + "px";
    } else {

        cat.style.transform = "scaleX(-1)";

        cat.style.left = cat.offsetLeft - 1 + "px";
    }
}



// var header = document.getElementsByClassName('walk');
// var headerTimer = setInterval(headMove, 5);

// function headMove() {
//     header.style.left = header.offsetLeft + 1 + "px";
// }





