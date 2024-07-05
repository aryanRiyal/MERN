// /*
// Console Methods
console.log('Hello World!!');
console.warn('This is your last warning');
console.error('This is a JS Error');

// Arithmetic Operators
let result = 2 ** 3; // 8
result = 5 * 3; // 15
result = 10 + 5; // 15
result = 10 - 5; // 5

// Logical Operators
let a = 30;
let b = 20;
let c = 10;
let isTrue = a > b && a > c;
isTrue = a > b || a > c;
isTrue = !a;

// Comparison Operators
let isEqual = a == b; // non-strict equality
isEqual = a === b; // strict equality

// Example: Decision Making
if (a > b && a > c) {
    console.log('a is the largest');
} else if (b > a && b > c) {
    console.log('b is the largest');
} else {
    console.log('c is the largest');
}
const age = parseInt(prompt('Enter your Age'));
if (age < 18) {
    alert('You cannot enter the club');
} else if (age >= 18 && age < 25) {
    alert('You can enter but cannot drink');
} else if (age >= 25 && age < 125) {
    alert('You can enter and drink');
} else {
    alert('Invalid Age');
}
// */
