// console.log(navigator.userAgent);

// console.log(navigator.vendor);


// function success(position) {
//     var latitude = position.coords.latitude;
//     var longitude = position.coords.longitude;
//     var altitude = position.coords.altitude;
//     var speed = position.coords.speed;
//     console.log(latitude, longitude);

// }


// function geoError(errorObj) {
//     alert("Oh no, something went terribly wrong");
// }

// if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(success, geoError);
// } else {
//     alert("soorry not gonna happen");

// }




// console.log(screen.height);
// console.log(screen.width);
// console.log(screen.colorDepth);
// console.log(screen.orientation);



console.log(document.body.style.background = "pink");

// var header = document.getElementById("header");

// console.log(header);

// var listItems = document.getElementsByClassName('yup');


// listItems = document.querySelectorAll(".yup")

// console.log(listItems);

// console.log(document.getElementsByTagName('p')[1]);

// var header = document.getElementsByTagName('h1')[0]

// header.style.color = 'blue';
// header.style.padding = '20px';

// var mainP = document.getElementById('main')

// mainP.style.backgroundColor = 'white';
// mainP.style.padding = '20px';

var divTag = document.getElementById('header')

var newPara = document.createElement('p');
var paraText = document.createTextNode('Dogg!!');

newPara.appendChild(paraText)
divTag.appendChild(newPara)







