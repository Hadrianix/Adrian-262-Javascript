var myImg = new Image(400, 400);
myImg.src = "http://placekitten.com/g/200/300";
document.body.appendChild(myImg);

myImg.style.alignItems = 'center';

document.body.style.background = "pink";

var header = document.getElementById('head');

header.style.color = '#008080';
header.style.padding = '25px'
header.style.size = '25px;'
header.style.textAlign = 'center'
header.style.fontFamily = 'Mukta';

var links = document.getElementsByClassName('links')[0];

links.style.textAlign = 'center';
links.style.padding = '0';
links.style.textDecoration = 'none';
links.style.color = 'white';
links.style.paddingTop = '15px';
links.style.paddingRight = '15px';

var aTags = document.getElementsByTagName('a')[4];

aTags.style.textDecoration = 'none';
aTags.style.color = 'white';
aTags.style.paddingRight = '15px';


var para = document.getElementsByClassName('main')[1];

para.style.padding = '25px';






// var hero = document.getElementsByClassName('images')[0];
// console.log(hero)
// var myImage = new Image(500, 500);
// myImage.src = "http://www.placepuppy.net/400/250";
// hero.appendChild(myImage);

// var hero = document.getElementByClassName('images');
// console.log(hero)
// var myImage = new Image(400, 400);
// myImage.src = "http://placekitten.com/g/200/300";
// hero.appendChild(myImage);


