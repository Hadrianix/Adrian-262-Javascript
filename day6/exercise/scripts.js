$(document).ready(function () {



    $('a').html('Yahoo!');
    $('a').attr('href', 'http://www.yahoo.com');
    $('a').css({ 'color': 'purple' })

    console.log($('a').html());

    var links = $('a')

    links.each(function () {
        var link = $(this);
        link.text(link.text() + 'HELLO')
    });



});

$('button').on('click', function (event) {
    console.log('button');

    var red = $('body');
    red.css('background-color', "red");

    console.log(event.target);


})

$('#submit').on('click', function (event) {
    console.log(event);

})

$("form").on('submit', function (event) {

})




