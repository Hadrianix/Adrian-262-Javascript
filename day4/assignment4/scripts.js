function createQuote() {
    var quotes = [
        { quote: "Heeeere's Johnny!", movie: "The Shinning", img: "./images/the-shinning_1280x720.jpg" },
        { quote: "Is that $3,000 bounty on in cash or check?", movie: "Jaws", img: "./images/jaws.jpg" },
        { quote: "Well hello, Mr. Fancy Pants - Army of Darkness", movie: "Army of Darkness", img: "./images/army.jpg" },
        { quote: "Get away from her you bitch", movie: "Aliens", img: "./images/aliens.jpg" },
        { quote: "What looked like morning was the beginning of endless night", movie: "The Exorcist", img: "./images/exorcist.jpg" },
        { quote: "You cannot run from this-it will follow you. It may lay dormant for years. Something may trigger it to become more active and it may over time reach out and communicate with you", movie: "Paranormal Activity", img: "./images/para.jpg" },
        { quote: "They're coming from inside the house!", movie: "Black Christmas", img: "./images/Black-Christmas-Eye.jpg" },
        { quote: "Hi, I'm Chucky. Wanna play?", movie: "Child's Play", img: "./images/childs.jpg" },
        { quote: "Do you know what a graveyard is? It's when the dead speaks!", movie: "Pet Sematary", img: "./images/sematary.jpg" },
        { quote: "You know it's Halloween. I guess everyone's entitled to one good scare, huh?", movie: "Halloween", img: "./images/halloween.jpg" },

    ];

    var nextImages = [
        './images/the-shinning_1280x720.jpg',
        './images/jaws.jpg',
        './images/army.jpg',
        './images/aliens.jpg',
        './images/exorcist.jpg',
        './images/para.jpg',
        './images/Black-Christmas-Eye.jpg',
        './images/childs.jpg',
        './images/sematary.jpg',
        './images/halloween.jpg'
    ];




    var counter = 0;

    // document.getElementById('quoteBox').innerHTML = quotes;
    // document.getElementById('author').innerHTML = movie;
    // document.getElementById('images').scr = nextImages;










    function quoteShow() {
        var theQuote = quotes[counter];
        document.querySelector('#quotesBox').innerHTML = theQuote.quote + '<span class="quote">';
        document.querySelector('#quotesBox, #author, images').innerHTML = theQuote.movie;
        document.querySelector('#images').innerHTML = theQuote.img;



    }

    function theNextQuote() {
        if (counter < quotes.length - 1) {
            counter++;
        } else {
            counter = 0;
        }
        quoteShow();


    }

    function thePrevQuote() {
        if (counter > 0) {
            counter--;
        } else {
            counter = quotes.length - 1;
        }
        quoteShow();


    }


    document.getElementById('next').addEventListener("click", theNextQuote);
    document.getElementById('prev').addEventListener("click", thePrevQuote);


    quoteShow();

    var time = setInterval(theNextQuote, 30000);
}

createQuote();


