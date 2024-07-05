// /*
// For Loop
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

const arr = ['Mango', 'Banana', 'Oranges'];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// Break Example
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i); // Outputs 1 to 4
}

// Continue Example
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i); // Outputs 1 to 10, except 5
}

// While Loop
let i = 100;
while (i >= 0) {
    console.log(i);
    i -= 10;
}

// For-of Loop
const fruits = ['Mango', 'Apple', 'Oranges', 'Grapes'];
for (let fruit of fruits) {
    console.log(fruit);
}

// For-in Loop
const car = {
    name: 'Audi',
    price: 200000,
    color: ['Red', 'Black'],
    isDiscBrake: true
};
for (let key in car) {
    console.log(`${key} --> ${car[key]}`);
}
// */
