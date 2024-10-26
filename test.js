const accountId = 123

// accountId = 1234 (we cant chANGE THE CONSTANT VARIABLE )

console.log(accountId);

const password = "sushant@0178"

// password = "kokate " (we cant chANGE THE CONSTANT VARIABLE )


console.table([password,accountId])

// 1. Data Types and Type Conversion

// Data types
let num = 42; // number
let str = "42"; // string
let isTrue = true; // boolean

// Type conversion
let convertedNum = Number(str); // Convert string to number
console.log(convertedNum + num); // 84

// 2. Variable Scope (let, const, var)

var globalVar = "I'm global";
let blockVar = "I'm limited to this block";
const constantVar = "I cannot be changed";

if (true) {
    let blockVar = "New block scope";
    console.log(blockVar); // New block scope
}

console.log(globalVar); // I'm global
console.log(blockVar); // I'm limited to this block

// 3. Operators and Expressions

let x = 10, y = 5;

// Arithmetic
console.log(x + y); // 15

// Comparison
console.log(x === y); // false

// Logical
console.log(x > 5 && y < 10); // true

// 4. Control Structures (if, else, switch)

let age = 20;

// if-else
if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Not an adult");
}

// switch
switch (age) {
    case 18:
        console.log("Just became an adult");
        break;
    case 20:
        console.log("20 years old");
        break;
    default:
        console.log("Age is unknown");
}

// 5. Loops and Iteration


// for loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// while loop
let j = 0;
while (j < 5) {
    console.log(j);
    j++;
}

// do...while loop
let k = 0;
do {
    console.log(k);
    k++;
} while (k < 5);

// 6. Functions

// Traditional function
function greet(name) {
    return `Hello, ${name}`;
}
console.log(greet("Sushant"));

// Arrow function
const add = (a, b) => a + b;
console.log(add(5, 3));

// 7. Error Handling (try, catch)
try {
    let result = 10 / 0; // No error, just infinity
    console.log(result);
    throw new Error("This is a custom error!"); // Throwing a custom error
} catch (error) {
    console.error("An error occurred:", error.message);
}
// 8. Arrays and Objects

// Arrays
let fruits = ["apple", "banana", "cherry"];
fruits.push("orange"); // Add item
console.log(fruits); // ["apple", "banana", "cherry", "orange"]

// Objects
let person = {
    name: "Sushant",
    age: 25,
    greet: function () {
        console.log("Hello, " + this.name);
    }
};
person.greet(); // Hello, Sushant
console.log(person.age); // 25