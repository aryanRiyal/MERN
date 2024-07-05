// /*
// Objects are collections of key-value pairs and are reference types in JavaScript.
let obj = {
    name: 'Aryan',
    age: 23,
    favColor: ['blue', 'green'],
    isAdult: true
};
console.log(obj.name); // "Aryan"
console.log(obj['favColor']); // ["blue", "green"]
obj.favPlace = 'Delhi'; // Add a new property
delete obj.favPlace; // Remove a property
console.log(obj);

const person = { name: 'Aryan', age: 23 };
const { name, age } = person;
console.log(name); // "Aryan"
console.log(age); // 23
// */
