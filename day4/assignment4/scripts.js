
var quotes = [
    "heeere's Johnny! - The Shinning",
    "Is that $3,000 bounty on in cash or check? - Jaws",
    "Well hello, Mr. Fancy Pants - Army of Darkness",
    "get away from her you bitch - Aliens",
    "Whatever you do, don't fall asleep. - A Nightmare on Elm Street"
]





function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quotes').innerHTML = quotes[randomNumber];
}




//      movie: "The Shinning",
//     },
//     {
//         text: "Is that $3,000 bounty on in cash or check?",
//         movie: "jaws",
//     },
//     {
//         text: "Well hello, Mr. Fancy Pants",
//         movie: "Army of Darkness",
//     },
//     {
//         text: "get away from her you bitch",
//         movie: "Aliens",
//     },
//     {
//         text: "Whatever you do, don't fall asleep.",
//         movie: "A Nightmare on Elm Street",
//     },