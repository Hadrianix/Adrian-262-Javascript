
var submitButton = document.lyrics.submit

submitButton.addEventListener("click", function (event) {
    event.preventDefault();


    var songArtist = document.getElementById('songArtist').value;
    var songName = document.getElementById('songName').value;
    var songURL = "https://api.lyrics.ovh/v1/" + songArtist + "/" + songName
    var lyricArea = document.getElementById('lyricArea')

    fetch(songURL)
        .then(function (response) {
            if (!response.ok) {
                throw Error(response.status)
            }
            return response.json();
        })
        .then(function (data) {
            lyricArea.innerHTML = data.lyrics.replace(/\n/g, '<br>')

        });




})




// fetch('http://jsonplaceholder.typicode.com/users')
//     .then(function (response) {
//         if (!response.ok) {
//             throw Error(response.statusText);
//         }
//         return response.json();
//     })
//     .then(function (data) {
//         console.log(data);
//     })
//     .catch(function (error) {
//         console.log(error);
//     })
