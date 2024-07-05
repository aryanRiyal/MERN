// /*
// Functions are like mini-programs encapsulated within names, which can be invoked as needed.
// 1.Function Declaration -
// Function definition
function say() {
    console.log('Hello, World!!');
}
// Function call
say(); // Outputs: "Hello, World!!"

// Function with default parameter
function add(x, y, z = 5) {
    return x + y + z;
}
let res = add(4, 5); // res is 14
console.log(res);

// Arrow Function
const add = (a, b) => a + b;
console.log(add(5, 3)); // 8

// 2.Function Expression -
// Named function expression
const a = function fun() {
    console.log('Inside Fun');
};
a(); // Outputs: "Inside Fun"
// Anonymous function expression
const greet = function (name) {
    console.log(`Hello ${name}`);
};
greet('Aryan'); // Outputs: "Hello Aryan"

// 3.Variable and Function Hoisting -
console.log(x); // Outputs: undefined
fun(); // Outputs: "inside fun"
function fun() {
    console.log('inside fun');
}
var x = 100;
// Function call before declaration due to hoisting
sayHello(); // Outputs: "Hello, world!"
function sayHello() {
    console.log('Hello, world!');
}
// In this example, the sayHello() function is called before it's declared, but it still works because of function hoisting. During the compilation phase, the function declaration is moved to the top of the scope, allowing it to be called from anywhere within that scope.
// However, it's important to note that function expressions are not hoisted in the same way as function declarations. Function expressions are assigned to variables, and only the variable declaration is hoisted, not the function itself.
// Function expression is not hoisted
// /*
sayHi(); // Error: sayHi is not a function
var sayHi = function () {
    console.log('Hi!');
};
// */
// In this example, calling sayHi() before its assignment results in an error because only the variable declaration var sayHi is hoisted, not the function expression function() { console.log("Hi!"); }.

// Summary: Function declarations are hoisted to the top of their scope during the compilation phase, meaning you can call them before they are defined. However, function expressions are not hoisted; only the variable declaration is hoisted.
// */
