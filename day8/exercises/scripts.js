// var condition = true;

// if (condition) {
//     let a = 'Zeta';
//     console.log(a);
// }

// console.log(a);

const arr = [2, 1, 4];

arr.push(4);
arr[0] = 0;
console.log(arr);

const obj = { id: 0, name: 'Alpha' };

obj, id = 3;
obj.favorties = "sunshine";
console.log(obj);

let funce = [];

for (let i = 0; i < 3; i++) {
    funce.push(function () {
        console.log(i);
    })
}

for (let j = 0; j < funce.length; j++) {
    funce[j]();
}



// let getMessage = (name) => {
//     return 'Hello' + name + '!';
// }


//get rid or brackets
// let getMessage = name => {
//     return 'Hello' + name + '!';
// }

/// if there is only one expression get rid of curly brackets and curly brackets

// let getMessage = name =>
//     'Hello' + name + '!';


const sum = (num1, num2) => num1 + num2

console.log(sum(3, 4));

const fibonacci = n => {
    if (n < 3) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}


console.log(fibonacci(9));

let multiply = (a, b = 1) => {
    return a * b;

}

console.log(multiply(5, 4));
// console.log(multiply(4));
// console.log(multiply());

let array = [2, 3, 4, 1];

for (let value of array) {

    console.log(value);
}

function product(...numbers) {
    numbers = [3, 4, 5];
    numbers = [3, 4, 5, 6];
    return numbers.reduce((currentProduct, number) => currentProduct * number, 1);
}
console.log(product(3, 4, 5));
console.log(product(3, 4, 5, 6));
console.log(product(1, 2, 3, 4, 5, 6));

const arra = ["cat", "dog", "mouse"];
const newArra = ["tiger", ...arra];
console.log(newArra);

function join(array1, array2) {
    return [...array1, ...array2];
}

console.log(join([1, 2, 3], [4, 5, 6]));

// const user = {
//     name: 'Cody',
//     loginCount: 1,
//     goldStatus: true
// };

// const className = 'container';
// const html = 'div class=' + ${ className }">'
//     + '<p>Welcome' + (user.goldSatus ? ' to our gold status member, ' : ', ') ${ user.name } '!'  '</h2>'
//         + '<p>Today is ' + ${ new Date() } + '</p>'
//             + '<p>You have logged in ' + ++user.loginCount + ' times.</p>'
//             + '</div>';
// document.getElementById('target').innerHTML = html; 

// const myEmployee = {
//     active: true,
//     department: "Engineering"
// };

// function isActiveEngineer(employes) {
//     const active = employee.active;
//     const department = employee.department;
//     return department === 'Engineering' && active;

// }

// console.log("Is myEmployee active?" ${ isActiveEngineer(myEmployee) });


// const myEmployee = {
//     active: true,
//     department: 'Engineering'
// };

// function isActiveEngineer(employee) {
//     const { active, department } = employee;
//     const active = employee.active;
//     const department = employee.department;
//     return department === 'Engineering' && active;
// }

// console.log(`Is myEmployee active? ${isActiveEngineer(myEmployee)}`);

///new kind of loop

// const names = ['adrian', 'taylor'];

// names.forEach(name, index, array) => {
//     console.log(name);
// }

// const trips = [
//     { mph: 10, hours: 3 },
//     { mph: 30, hours: 2 },
//     { mph: 25, hours: 4 }
// ];


// trips.forEach(trip => {
//     console.log(trip.mph * trip.hours);
// });

// const availableLaptops = [
//     { name: 'MacBook', RAM: 8 },
//     { name: 'Asus', RAM: 32 },
//     { name: 'Lenovo', RAM: 16 },
//     { name: 'HP', RAM: 4 }
// ];

// // var everyMethod = 

// let allHave16 = availableLaptops.every(laptop => laptop.RAM >= 16);
// console.log(allHave16);

// let someHave16 = availableLaptops.some(laptop => laptop.RAM >= 16);
// console.log(someHave16);

// Create an array of groceries
// const groceries = [
//     { name: 'bananas', aisle: 'produce', price: 2 },
//     { name: 'flour', aisle: 'baking', price: 5 },
//     { name: 'avocados', aisle: 'produce', price: 4 },
//     { name: 'lettuce', aisle: 'produce', price: 5 },
//     { name: 'olive oil', aisle: 'baking', price: 10 },
//     { name: 'shampoo', aisle: 'beauty', price: 12 }
// ];

// const produceLessThan5 = groceries.filter(produce => produce.price <= 5); // your code here

// Output the produce

// console.log(produceLessThan5);

// Create an array of groceries
// const groceries = [
//     { name: 'bananas', aisle: 'produce', price: 2 },
//     { name: 'flour', aisle: 'baking', price: 5 },
//     { name: 'avocados', aisle: 'produce', price: 4 },
//     { name: 'lettuce', aisle: 'produce', price: 5 },
//     { name: 'olive oil', aisle: 'baking', price: 10 },
//     { name: 'shampoo', aisle: 'beauty', price: 12 }
// ];

// const produceLessThan5 = groceries.filter(grocery => grocery.aisle === "produce").filter(grocery => grocery.price < 5);

// Output the produce
// console.log(produceLessThan5);

const trips = [
    { miles: 5, hours: 1 },
    { miles: 6, hours: 0.5 },
    { miles: 4, hours: 2 }
];

const speeds = trips.map(trips => trips.miles / trips.hours); // your code here

// Output the speeds
console.log(speeds);





