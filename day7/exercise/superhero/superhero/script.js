// Superhero JSON
var superheroes = {
    "squadName": "Super hero squad",
    "homeTown": "Metro City",
    "formed": 2016,
    "secretBase": "Super tower",
    "active": true,
    "members": [
        {
            "name": "Molecule Man",
            "age": 29,
            "secretIdentity": "Dan Jukes",
            "powers": [
                "Radiation resistance",
                "Turning tiny",
                "Radiation blast"
            ]
        },
        {
            "name": "Madame Uppercut",
            "age": 39,
            "secretIdentity": "Jane Wilson",
            "powers": [
                "Million tonne punch",
                "Damage resistance",
                "Superhuman reflexes"
            ]
        },
        {
            "name": "Eternal Flame",
            "age": 1000000,
            "secretIdentity": "Unknown",
            "powers": [
                "Immortality",
                "Heat Immunity",
                "Inferno",
                "Teleportation",
                "Interdimensional travel"
            ]
        }
    ]
};

// for (var i = 0; i < superheroes.members.length; i++) {
//     var name = superheroes.members[i].name;
//     console.log(name);
// }

// var h1 = document.querySelector('h1');
// h1.innerHTML = superheroes.squadName;

// var p = document.querySelector('p');
// p.innerHTML = "The " + superheroes.squadName + " is from";



// for (var i = 0; i < superheroes.members; i++) {
//     var members1 = document.createElement('p');
//     members1.innerHTML = 'Their names are ' + superheroes.members[0] + ', there age is' + superheroes.age + '. ';
//     members1.innerHTML += 'Their powers are' + superheroes.powers;

//     var body = document.getElementsByTagName('body')[0];
//     body.appendChild(members1);
// }

for (var i = 0; i < superheroes.members.length; i++) {
    var name = superheroes.members[i].name;
    console.log(name);
}
var div = document.querySelector('div');
//name output of molecule man
var name = superheroes.members[0].name;
console.log(name);

//changing h1 in html
var h1 = document.querySelector('h1');
h1.innerHTML = superheroes.squadName;

var p = document.querySelector('p');
p.innerHTML = "The " + superheroes.squadName + " is from " + superheroes.homeTown + ". the group was formed in " + superheroes.formed;

for (var i = 0; i < superheroes.members.length; i++) {
    var member = superheroes.members[i];
    var powers = "";

    for (var p = 0; p < member.powers.length; p++) {
        powers += member.powers[p];

        if (p < member.powers.length - 1) {
            powers += ", ";
        }
        if (p == member.powers.length - 2) {
            powers += "and ";
        }
        console.log(powers);
    }
    var paragraph = document.createElement('p');
    paragraph.innerHTML = member.name + "is " + member.age + " years old and has the following powers:" + powers + ".";
    div.appendChild(paragraph);
}

// Your code goes here

// 1. Replace the H1 heading in index.html with the name of the superhero squad.
// 2. Add some text with information about the squad to the paragraph in index.html. Information like hometown, when the squad was formed, etc.
// 3. Loop through the members and create and append a new paragraph to the div for each of member with information about their names and powers. But don't include their secret identity!!!
// 4. Create a new superhero. Maybe it's you? What would your powers be?