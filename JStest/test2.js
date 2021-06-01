function sum(x, y) {
    var tong = x + y;
    return tong;
}
//1. VARIABLES
var name = "Lam";
var listBook = new Array(10);
var number = 10;
var x = sum(30, 40);


//2. CONSTANTS
const PI = 3.14;


//3. OBJECT
let person = {
    name: "Lam",
    age: 21
};
// Dot notation
person.name = "Thanh";
// console.log(person.name);

// Bracket notation
person['age'] = 22;
// console.log(person['age']);

let selection = 'name';
person[selection] = 'Grela ';

// console.log(person);


//4. ARRAY
let selectedColors = ['red', 'blue'];
selectedColors[1] = 'green';
selectedColors[2] = 'pink';
// console.log(selectedColors[0]);
// console.log(selectedColors);
// console.log(selectedColors.length);
// console.log(typeof selectedColors[0]);


//5.FUNCTION
function greet(name, lastName) {
    console.log('Hello world ' + name + ' ' + lastName);
}
// let fname = 'Lam';
// let lname = 'Vo';
// greet(fname, lname);

function square(number) {
    return number * number;
}
let number1 = square(4);
console.log('4^2 = ' + number1);
console.log(square(3));