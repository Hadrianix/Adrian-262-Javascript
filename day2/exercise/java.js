// var table = 1;

// while (table <= 12) {
//     console.log(table * 9);
//     table++;
// }

// var num = 1;

// while (num <= 12) {
//     var num2 = 1;
//     while (num2 <= 12) {
//         console.log(num * num2);
//         num2++;
//     }
//     num++;
// }

// for (var num = 1; num <= 12; num++) {
//     console.log(num * 9);
// }

// for (var num = 1; num <= 12; num++) {
//     for (var num2 = 1; num2 <= 12; num2++) {
//         console.log(num * num2);
//     }
// }
// for (var num = 0; num <= 20; num++) {
//     if (num % 2 == 0) {
//         console.log(num, "even");
//     }

//     if (num == 6) {
//         console.log("i hate this number");
//         break;
//     }
//     else {
//         console.log(num, "odd");
//     }
// }


// for (var num = 1; num <= 12; num++) {
//     if (num === 6) {
//         console.log("I hate this number");
//         BroadcastChannel;
//     }
//     else {
//         console.log(num * 9);
//     }
// }

// var favoriteFoods = ["pizza", 'streak', 'tacos', 'candy', 'hotdogs'];



// favoriteFoods[2] = "asparagus";

// favoriteFoods.push('bread');



// console.log(favoriteFoods);

// for (var i = 0; i < favoriteFoods; i++) {
//     console.log(favoriteFoods[i]);
// }

var pizzaRecipe = {
    recipeName: "Good Pizza",
    letsCook: function () {
        console.log("im hungry!" + pizzaRecipe.recipeName);
    },
    recipeDescription: "a bunch of stuuff that will create a better pizza",
    ingredeints: ['dough', 'flour', 'pepperoni'],
    directions: "do this, do that, add this, cook stuff",

    rating: 5,
    cookTime: 20
};

var recipe = pizzaRecipe.recipeDescription;


pizzaRecipe.servings = 3;

pizzaRecipe.rating = 8;

delete pizzaRecipe.cookTime;

function describeRecipe(pizzaRecipe) {
    console.log(pizzaRecipe.recipeName);
    console.log(pizzaRecipe.servings);
}


pizzaRecipe.letsCook();



// var movies = [
//     { name: 'hunter for the wilder people ', rating: 9 }
// ];

// for (var i = 0; i < movies.length; i++) {
//     var movie = movies[i];
//     console.log("i give", movie.name + movie.rating)
// }


