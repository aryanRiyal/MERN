// /*
// Arrays in JavaScript are ordered collections of data stored in contiguous memory locations.
// They can hold heterogeneous data types.
// An ordered collection of data that we can traverse using indexes.

const [first, second] = [10, 20];
console.log(first); // 10
console.log(second); // 20

// Spread Operator
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]

const heteroArray = [1, 2.314, NaN, true, undefined, null, ['Orange', 'Mango'], 'apple'];
console.log(heteroArray);
console.log('\n');

let arr = ['grapes', 'pineapple', 'guava', 'kiwi', 'melon'];
console.log(`arr: ${arr}`);
// push - adds elements to the end
let ele = arr.push('banana');
console.log(`arr.push('banana'): ${arr}`); // ['grapes', 'pineapple', 'guava', 'kiwi', 'melon', 'banana']

// pop - removes and returns the elements from the end
ele = arr.pop();
console.log(`arr.pop(): ${ele}`); // ['grapes', 'pineapple', 'guava', 'kiwi', 'melon']

// shift - removes and returns elements from the front
ele = arr.shift();
console.log(`arr.shift(): ${ele}`); // ['pineapple', 'guava', 'kiwi', 'melon']

// unshift - adds elements to the front
ele = arr.unshift('apple');
console.log(`arr.unshift('apple'): ${arr}`); // ['apple', 'pineapple', 'guava', 'kiwi', 'melon']
console.log('\n');

// slice - returns a shallow copy of a portion of an array
arr = ['grapes', 'pineapple', 'guava', 'kiwi', 'melon'];
console.log(`arr: ${arr}`);
let newArr = arr.slice(0, 3);
console.log(`arr.slice(0, 3): ${newArr}`);
newArr = arr.slice(3);
console.log(`arr.slice(3): ${newArr}`);
newArr = arr.slice(1, 3);
console.log(`arr.slice(1, 3): ${newArr}`);
console.log('\n');

// splice - modifies an array by adding, removing, or replacing elements
arr = ['melon', 'pineapple', 'guava', 'kiwi', 'grapes'];
console.log(`arr: ${arr}`);
arr.splice(0, 0, 'strawberry', 'papaya');
console.log(`arr.splice(0, 0, 'strawberry', 'papaya'): ${arr}`);
arr.splice(1, 2, 'apple', 'mango');
console.log(`arr.splice(0, 2, 'apple', 'mango'): ${arr}`);
arr.splice(arr.length, 0, 'banana', 'cherry', 'orange');
console.log(`arr.splice(arr.length, 0, 'banana', 'cherry', 'orange'): ${arr}`);
// */
