var songURL = "https://api.lyrics.ovh/v1/Coldplay/Adventure of a Lifetime" + authorName + "/" + songTitle;

fetch(songURL)
    .then(function (response) {
        if (!response.ok) {
            throw Error(response.status);
        }
    })

console.log(songURL);