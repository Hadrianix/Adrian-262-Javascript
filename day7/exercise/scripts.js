// var profile = {
//     "firstName": "Adrian",
//     "lastName": "Taylor",
//     "games": ["Red Dead", "Metro"]
// }

// var p = document.createElement('p');
// p.innerHTML = 'My name is' + profile.firstName + ' ' + msWriteProfilerMark.lastName + '. ';
// p.innerHTML += 'My favourite games are' + profile.games.join(' and ') + '.';

// var body = document.getElementsByTagName('body')[0];
// body.appendChild(p);

// localStorage.setItem("user name", "Janesse");
// localStorage.userName = "Janessa";

// var name = localStorage.getItem("user name");
// var name = localStorage.userName;

// // Remove Date

// localStorage.removeItem('user name');

// localStorage.clear();
// console.log(name);

// var submit = document.getElementById(submit);
// submit.children[1].onClick = function () {
//     submit.style.backgroundColor = submit.children[0].nodeValue;
// }

// function changeBackground() {
//     var color = document.getElementById('color').value;
//     event.preventDefault();

//     document.bgColor = color;


// }

// document.getElementById("submit").addEventListener("click", changeBackground, false)

document.bgColor = localStorage.color;

function changeBackground() {
    event.preventDefault();
    var color2 = document.getElementById('colorTwo').value;


    document.bgColor = color2;

    localStorage.setItem("color", color2);


}

document.getElementById("submit2").addEventListener("click", changeBackground, false)

fetch('http://jsonplaceholder.typicode.com/users')
    .then(function (response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    })
    .catch(function (error) {
        console.log(error);
    })




// // Create content we are going to send

// var content = {
//     title: "whoa",
//     body: "testing",
//     userId: 1
// }

// //fetch URL

// fetch('http://jsonplaceholder.typicode.com/users', {
//     //set method
//     method: 'POST',
//     //set headers
//     headers: {
//         'content-type': 'application/json'
//     },

//     body: JSON.stringify(content)
// })
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         console.log(data);
//     })