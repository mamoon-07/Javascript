console.log("hello Everyone");

// This is a comment

/* This is a multi-line comment
   that spans multiple lines */

// Data Types and Variables in JavaScript

var name = "John"; // String
let age = 30; // Number
const isStudent = true; // Boolean  

// Assignment Operators
var a = 5; // age is now 35
var b = 35; 
var c = 33;
var d = 66;
var sum = a + b + c + d; // sum is now 139

// Increment and Decrement Operators
a++; // a is now 6
b--; // b is now 34

// Remainder Operator
var remainder = 10 % 3; // remainder is now 1
console.log(remainder);

// Augmented Assignment Operators
a += 5; // a is now 11
b -= 5; // b is now 29      

// compound assignment with multiplication and division
c *= 2; // c is now 66
d /= 2; // d is now 33  

// Decrealing a String Variable
var greeting = "Hello, World!";
console.log(greeting);

// Escape Sequences in Strings
var message = "He said, \"Hello!\""; // Using double quotes inside a string
console.log(message);   
var path = 'C:\\Users\\John'; // Using backslashes in a file path
console.log(path);
var multiline = "This is a multi-line string.\nIt spans multiple lines.";
console.log(multiline);

// String Concatenation
var firstName = "John";
var lastName = "Doe";
var fullName = firstName + " " + lastName; // fullName is now "John Doe"
console.log(fullName);

// Appending Variables to Strings
var ageMessage = "I am " + age + " years old."; // ageMessage is now "I am 30 years old."
console.log(ageMessage);

// Arrays in JavaScript
var fruits = ["Apple", "Banana", "Cherry"]; 
console.log(fruits[0]); // Output: Apple
console.log(fruits[1]); // Output: Banana
console.log(fruits[2]); // Output: Cherry   
var mixedArray = [1, "Hello", true, null];
console.log(mixedArray[0]); // Output: 1
console.log(mixedArray[1]); // Output: Hello
console.log(mixedArray[2]); // Output: true
console.log(mixedArray[3]); // Output: null 

//Nested Arrays
var nestedArray = [[1, 2], [3, 4], [5, 6]];
console.log(nestedArray[0][0]); // Output: 1
console.log(nestedArray[1][1]); // Output: 4
console.log(nestedArray[2][0]); // Output: 5    

// Multidimensional Arrays
var multiDimensionalArray = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
console.log(multiDimensionalArray[0][0][0]); // Output: 1
console.log(multiDimensionalArray[0][1][1]); // Output: 4
console.log(multiDimensionalArray[1][0][0]); // Output: 5
console.log(multiDimensionalArray[1][1][1]); // Output: 8

// Push() and Pop() Methods
var numbers = [1, 2, 3];
numbers.push(4); // numbers is now [1, 2, 3, 4]
console.log(numbers);
numbers.pop(); // numbers is now [1, 2, 3]
console.log(numbers);

// Shift() and Unshift() Methods
var colors = ["Red", "Green", "Blue"];
colors.shift(); // colors is now ["Green", "Blue"]
console.log(colors);
colors.unshift("Yellow"); // colors is now ["Yellow", "Green", "Blue"]
console.log(colors);

// Shopping List Example
var shoppingList = ["Milk", "Bread", "Eggs"];
shoppingList.push("Butter");    
console.log(shoppingList);
shoppingList.pop();    
console.log(shoppingList);
shoppingList.shift();    
console.log(shoppingList);
shoppingList.unshift("Cheese");    
console.log(shoppingList);

// Arguments Passed to Functions
function greet(name) {
    return "Hello, " + name + "!";
}
console.log(greet("Alice")); // Output: Hello, Alice!
console.log(greet("Bob")); // Output: Hello, Bob!
function add(a, b) {
    return a + b;
}
console.log(add(5, 3)); // Output: 8
console.log(add(10, 20)); // Output: 30

// Global Scope and Local Scope
var globalVariable = "I am a global variable"; // Global Scope

function myFunction() {
    var localVariable = "I am a local variable"; // Local Scope
    console.log(globalVariable); // Accessing global variable
    console.log(localVariable); // Accessing local variable
}

myFunction();
// console.log(localVariable); // This will cause an error because localVariable is not accessible outside the function

// Return a Value from a Function with Return
function square(num) {
    return num * num; // Returns the square of the number
}
console.log(square(5)); // Output: 25
console.log(square(10)); // Output: 100

// Understanding Undefined Value returned from a Function
function noReturn() {
    console.log("This function does not return anything.");
}
console.log(noReturn()); // Output: This function does not return anything. followed by undefined

// Assignment with a Returned Value
function multiply(a, b) {
    return a * b; // Returns the product of a and b
}
var result = multiply(4, 5); // result is now 20
console.log(result); // Output: 20

// Stand in Line Example
function nextInLine(arr, item) {
    arr.push(item); // Add the item to the end of the array
    return arr.shift(); // Remove and return the first item from the array
}   
var testArr = [1, 2, 3, 4, 5];
console.log("Before: " + JSON.stringify(testArr)); // Output: Before: [1,2,3,4,5]
console.log(nextInLine(testArr, 6)); // Output: 1
console.log("After: " + JSON.stringify(testArr)); // Output: After: [2,3,4,5,6]

// Boolean Values and Conditional Statements
function isEven(num) {
    if (num % 2 === 0) {    
        return true; // Returns true if the number is even
    } else {
        return false; // Returns false if the number is odd
    }
}
console.log(isEven(4)); // Output: true
console.log(isEven(7)); // Output: false

// Equality Operators
console.log(5 == "5"); // Output: true (loose equality)
console.log(5 === "5"); // Output: false (strict equality)
console.log(0 == false); // Output: true (loose equality)
console.log(0 === false); // Output: false (strict equality)
console.log(null == undefined); // Output: true (loose equality)
console.log(null === undefined); // Output: false (strict equality)

// Logical Operators
function canVote(age, isCitizen) {
    if (age >= 18 && isCitizen === true) {
        return true; // Returns true if the person is old enough and is a citizen
    } else {
        return false; // Returns false if the person is not old enough to vote
    }
}
console.log(canVote(20, true)); // Output: true
console.log(canVote(16, true)); // Output: false
console.log(canVote(20, false)); // Output: false