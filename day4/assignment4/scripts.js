// function allQuote() {
//     var randomNumber
//     var randomQuote
//     var randomAuthor

//     function generateQuote() {

//         var quote = ["najkonskonsklamnfklas", "aansklfnlasknfdkls", "ajsbnjkfnjkasfjk"

//         ];
//         randomNumber = Math.floor(Math.random() * quote.length);
//         randomQuote = quote[randomNumber];

//         document.getElementsByClassName('quote')[0].innerText = randomQuote
//     }

//     document.getElementById("newQuote").addEventListener("click", function () {
//         generateQuote();
//     });
// }

// allQuote()

// var quoteArray = ["This one has a generational shelf-life, as more and more young people sadly forget who Johnny Carson was, so we’re giving it a victory lap - The Shinning", "The final showdown with the murderous shark results in a great line from Martin Brody. - Jaws", "It’s impossible to choose just one line from this film, since so many are great, so here’s a whole boatload of them. - Army of Darkness", "When Ripley levels the playing field, all bets are off. And Mama Alien gets a scolding. - Aliens", "This is certainly rooting for the wrong person, but Freddy Krueger’s such a mouthy bastard that we had to include something from him. - A Nightmare on Elm Street"]
// console.log("Hello World!");
// var element = document.getElementById("test");
// element.innerHTML = "Foo";
/*setTimeout(runthis, 3000);
function runthis() {
    console.log("Running.");
    document.getElementById('test').innerHTML = 'Foo';
}*/

var getNewQuote = function () {
    var quotes = [{
        text: "This one has a generational shelf-life, as more and more young people sadly forget who Johnny Carson was, so we’re giving it a victory lap",
        movie: "The Shinning",
    },
    {
        text: "The final showdown with the murderous shark results in a great line from Martin Brody",
        movie: "jaws",
    },
    {
        text: "It’s impossible to choose just one line from this film, since so many are great, so here’s a whole boatload of them.",
        movie: "Army of Darkness",
    },
    {
        text: "The final showdown with the murderous shark results in a great line from Martin Brody",
        movie: "Aliens",
    },
    {
        text: "The final showdown with the murderous shark results in a great line from Martin Brody",
        movie: "A Nightmare on Elm Street",
    },
    ];

    var quote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("quote").innerHTML =
        '<h5>' + quote.text + '</h5>' +
        '<p>' + '-' + '<em>' + quote.source + '</em>' + '</p>';

    truncateQuote = quote.text;
    tweet = truncateQuote.substr(0, 5)


};

window.onload = getNewQuote;

// var getNewQuote = function () {
//     var quotes = [
//         {
//             text: "Woof woof woof.",
//             source: "Gabriel",

//         },
//         {
//             text: "This one has a generational shelf-life, as more and more young people sadly forget who Johnny Carson was, so we’re giving it a victory lap - The Shinning",
//             source: "Motoko Kusanagi",

//         },
//         {
//             text: "If you've got a problem with the world, change yourself. If that's a problem, close your eyes, shut your mouth, and live like a hermit. And if that's a problem…",
//             source: "Motoko Kusanagi",

//         },
//         {
//             text: "That's not true. What you and the others have gained makes you far from powerless.",
//             source: "Motoko Kusanagi",

//         },
//         {
//             text: "I have to admit, for a movie it wasn't bad- but diversionary entertainment is transitory, it just comes and goes at the viewers whim. It's the way it should be, but a film with no beginning or end that hooks an audience and won't let go of them is harmful no matter how wonderful you may have believed it was.",
//             source: "Motoko Kusanagi",

//         },

//     ];

//     var quote = quotes[Math.floor(Math.random() * quotes.length)];
//     document.getElementById("quote").innerHTML =
//         '<h5>' + quote.text + '</h5>' +
//         '<p>' + '-' + '<em>' + quote.source + '</em>' + '</p>';

//     truncateQuote = quote.text;
//     tweet = truncateQuote.substr(0, 70)
// };




// function tweetQuote() {
//     window.open('https://twitter.com/intent/tweet?text=' + '"' + encodeURIComponent(tweet) + '..." GITS Random Quote Machine https://codepen.io/AlcinaW/full/xZqdMG via @kaitou_al', "_blank");
// };


// window.onload = getNewQuote;