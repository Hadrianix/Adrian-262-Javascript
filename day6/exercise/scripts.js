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

