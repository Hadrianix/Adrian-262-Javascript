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

    return numbers.reduce((currentProduct, number) => currentProduct * number, 1);
}
console.log(product(3, 4, 5));
console.log(product(3, 4, 5, 6));
console.log(product(1, 2, 3, 4, 5, 6));