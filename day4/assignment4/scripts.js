
// var quotes = [
//     "heeere's Johnny! - The Shinning",
//     "Is that $3,000 bounty on in cash or check? - Jaws",
//     "Well hello, Mr. Fancy Pants - Army of Darkness",
//     "Get away from her you bitch - Aliens",
//     "Whatever you do, don't fall asleep. - A Nightmare on Elm Street"
// ]





// function newQuote() {
//     var randomNumber = Math.floor(Math.random() * (quotes.length));
//     document.getElementById('quotes').innerHTML = quotes[randomNumber];
// }

function createQuote () {
    var quotes = [
        {quote: "Heeeere's Johnny!", movie: "The Shinning"}, 
        {quote: "Is that $3,000 bounty on in cash or check?", movie: "Jaws"},
        {quote: "Well hello, Mr. Fancy Pants - Army of Darkness", movie: "Army of Darkness"},
        {quote: "Get away from her you bitch", movie: "Aliens"},
        {quote: "What looked like morning was the beginning of endless night", movie: "The Exorcist"},
        {quote: "You cannot run from this-it will follow you. It may lay dormant for years. Something may trigger it to become more active and it may over time reach out and communicate with you", movie: "Paranormal Activity"},
        {quote: "They're coming from inside the house!", movie: "Black Christmas"},
        {quote: "Hi, I'm Chucky. Wanna play?", movie: "Child's Play"},
        {quote: "Do you know what a graveyard is? It's when the dead speaks!", movie: "Pet Sematary"},
        {quote: "You know it's Halloween. I guess everyone's entitled to one good scare, huh?", movie: "Halloween"},
    
    ];

    var counter = 0;

    function quoteShow() {
        var theQuote = quotes[counter];
        document.querySelector('#quotesBox').innerHTML = theQuote.quote;
        document.querySelector('#quotesBox, #author').innerHTML = theQuote.movie;
        newTweet();
    }

    function theNextQuote() {
        if (counter < quotes.length -1) {
            counter++;
        }else {
            counter = 0;
        }
        quoteShow();
    }

    function thePrevQuote() {
        if (counter > 0) {
            counter--;
        }else {
            counter = quotes.length-1;
        }
        quoteShow();
    }

    function newTweet() {
        var text = quotes[counter].quote.split(" ").join("%20") + "-" + quotes[counter].source.split(" ").join("%20");
        var url = "https://twitter.com/intent/tweet?text=" + text;
        document.querySelector("#tweet-span").innerHTML = '<a class="twitter-share-button" href="' + url + ' " data-size="large">Tweet</a>';
        twttr.widgets.load();
    }

    document.getElementById('next').addEventListener("click", theNextQuote);
    document.getElementById('prev').addEventListener("click", thePrevQuote);
    quoteShow();
    var timer = setInterval(theNextQuote, 30000);
}

createQuote();

///document.querySelector('#quotesBox').innerHTML = theQuote.quote + '<span class="quote-author"> &mdash; <a id="tweet" class="chosen-link" href="' + theQuote.link + '">' + theQuote.movie + '</a></span>';