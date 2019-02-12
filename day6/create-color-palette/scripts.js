var color = randomColor();
var hue = randomColor({ hue: "red", hue: "orange", hue: "blue" })
var luminosity = randomColor({ luminosity: "light", luminosity: "dark", luminosity: "random" })

$('.bottomTriangleColor').css("background", hue)
$('.triangleColor').css("background", color)

// var hue = randomColor();

