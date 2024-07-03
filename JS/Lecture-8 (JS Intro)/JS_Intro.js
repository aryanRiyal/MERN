// Javascript is a single threaded (single call stack) and sync language (execute code line by line first executes the code current function completely before moving on to the next one)

//This is a comment
/* Also a comment  */

// /*
// String template literals
let firstName = 'Aryan';
let lastName = 'Riyal';
// let fullName = "Mr." + lastName + "," + firstName;
// Better way - using string template literals
let fullName = `Mr.${lastName},${firstName}`;
console.log(fullName);

console.log(`parseInt(3.14159265): ${parseInt(3.14159265)}`);
console.log(`parseFloat('567.89abcde'): ${parseFloat('567.89abcde')} \n`);

//String Methods
//Non-Destructive methods
let str = '     Hello World     ';
console.log(`str: ${str}`);

console.log(`str.toUpperCase: ${str.toUpperCase()}`);
console.log(`str.toLowerCase: ${str.toLowerCase()}`);
console.log(`str.length:  ${str.length}`);

console.log(
    `str.substring(startingIndex, endingIndex): ${str.substring(
        (startingIndex = 9),
        (endingIndex = str.length - 7)
    )}`
); //if startingIndex > endingIndex then it will automatically swap starting and ending

// Function Chaining
console.log(`str.trim().toUpperCase: ${str.trim().toUpperCase()}`);

// str.repeat()
console.log('hello '.repeat(3));
console.log(str.trim().repeat(2) + '\n');

// str.indexOf();
const paragraph = "I think Ruth's dog is cuter than your dog, but so is every dog!";
console.log(`paragraph: ${paragraph}`);
const searchTerm = 'dog';
const indexOfFirst = paragraph.indexOf(searchTerm);
console.log(`First Index - paragraph.indexOf("${searchTerm}"): ${indexOfFirst}`);
const indexOfSecond = paragraph.indexOf(searchTerm, indexOfFirst + 1);
console.log(
    `Third Index - paragraph.indexOf("${searchTerm}", indexOfSecond + 1): ${paragraph.indexOf(
        searchTerm,
        indexOfSecond + 1
    )}`
);

// str.replace()
console.log(`str.replace('l', 'x'): ${str.replace('l', 'x')}`);
console.log(paragraph.replace("Ruth's", 'my'));
const regex = /Dog/i;
console.log(paragraph.replace(regex, 'ferret'));

// str.replaceAll()
console.log(`str.replaceAll('l', 'y'): ${str.replaceAll('l', 'y')}`);
console.log(paragraph.replaceAll('dog', 'monkey'));
const globalRegex = /Dog/gi;
console.log(paragraph.replaceAll(globalRegex, 'ferret') + '\n');
// */

// /*
// Math
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

// To generate random numbers
startingNumber = 10;
endingNumber = 999;
const randomNum = Math.floor(Math.random() * (endingNumber - startingNumber + 1)) + startingNumber;
console.log(`Random Number form ${startingNumber} to ${endingNumber}: ${randomNum}`);
// */
