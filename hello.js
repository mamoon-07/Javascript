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

// If Statements and Else Statements
function checkNumber(num) {
    if (num > 0) {
        return "Positive"; // Returns "Positive" if the number is greater than 0
    } else if (num < 0) {
        return "Negative"; // Returns "Negative" if the number is less than 0
    } else {
        return "Zero"; // Returns "Zero" if the number is equal to 0
    }   
}
console.log(checkNumber(5)); // Output: Positive
console.log(checkNumber(-3)); // Output: Negative
console.log(checkNumber(0)); // Output: Zero

// Chaining If Else Statements
function grade(score) {
    if (score >= 90) {
        return "A"; // Returns "A" for scores 90 and above
    } else if (score >= 80) {
        return "B"; // Returns "B" for scores 80-89
    } else if (score >= 70) {
        return "C"; // Returns "C" for scores 70-79
    } else if (score >= 60) {
        return "D"; // Returns "D" for scores 60-69
    } else {
        return "F"; // Returns "F" for scores below 60
    }   
}
console.log(grade(95)); // Output: A
console.log(grade(85)); // Output: B
console.log(grade(75)); // Output: C
console.log(grade(65)); // Output: D
console.log(grade(55)); // Output: F    

// Golf Code Example
function golfScore(par, strokes) {
    if (strokes === 1) {
        return "Hole-in-one!"; // Returns "Hole-in-one!" if the player gets a hole-in-one
    } else if (strokes <= par - 2) {
        return "Eagle"; // Returns "Eagle" if the player scores two or more under par
    } else if (strokes === par - 1) {
        return "Birdie"; // Returns "Birdie" if the player scores one under par
    } else if (strokes === par) {
        return "Par"; // Returns "Par" if the player scores exactly par
    } else if (strokes === par + 1) {
        return "Bogey"; // Returns "Bogey" if the player scores one over par
    } else if (strokes === par + 2) {
        return "Double Bogey"; // Returns "Double Bogey" if the player scores two over par
    } else {
        return "Go Home!"; // Returns "Go Home!" if the player scores three or more over par
    }   
}
console.log(golfScore(5, 1)); // Output: Hole-in-one!
console.log(golfScore(5, 3)); // Output: Eagle
console.log(golfScore(5, 4)); // Output: Birdie
console.log(golfScore(5, 5)); // Output: Par
console.log(golfScore(5, 6)); // Output: Bogey
console.log(golfScore(5, 7)); // Output: Double Bogey
console.log(golfScore(5, 8)); // Output: Go Home!   


// Switch Statements
function caseInSwitch(val) {
    var answer = "";
    switch (val) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
    }
    return answer;
}
console.log(caseInSwitch(1)); // Output: alpha
console.log(caseInSwitch(2)); // Output: beta
console.log(caseInSwitch(3)); // Output: gamma
console.log(caseInSwitch(4)); // Output: delta

// Returning Boolean Values from Functions
function isGreater(a, b) {
    return a > b; // Returns true if a is greater than b, otherwise returns false
}
console.log(isGreater(5, 3)); // Output: true
console.log(isGreater(2, 4)); // Output: false

// Return Early Pattern for Functions
function myFunction(a, b) {
    if (a < 0 || b < 0) {
        return "Negative numbers are not allowed"; // Returns an error message if either a or b is negative
    }
    return a + b; // Returns the sum of a and b if both are non-negative
}
console.log(myFunction(5, 3)); // Output: 8
console.log(myFunction(-1, 3)); // Output: Negative numbers are not allowed
console.log(myFunction(5, -2)); // Output: Negative numbers are not allowed

// Counting Cards Example
var count = 0;
function cc(card) {
    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
            break;
    }       
    if (count > 0) {
        return count + " Bet"; // Returns the current count and "Bet" if the count is positive
    } else {
        return count + " Hold"; // Returns the current count and "Hold" if the count is zero or negative
    }
}
console.log(cc(2)); // Output: 1 Bet
console.log(cc(3)); // Output: 2 Bet
console.log(cc(7)); // Output: 2 Bet
console.log(cc("K")); // Output: 1 Bet
console.log(cc("A")); // Output: 0 Hold

// Objects in JavaScript
var person = {
    name: "John",
    age: 30,
    isStudent: true
};
console.log(person.name); // Output: John
console.log(person.age); // Output: 30
console.log(person.isStudent); // Output: true
var car = {
    make: "Toyota",
    model: "Camry",
    year: 2020
};
console.log(car.make); // Output: Toyota
console.log(car.model); // Output: Camry
console.log(car.year); // Output: 2020  

// Nested Objects
var company = {
    name: "Tech Co",
    employees: {    
        employee1: {
            name: "Alice",
            position: "Developer"
        },
        employee2: {
            name: "Bob",
            position: "Designer"
        }
    }
};
console.log(company.employees.employee1.name); // Output: Alice
console.log(company.employees.employee1.position); // Output: Developer
console.log(company.employees.employee2.name); // Output: Bob
console.log(company.employees.employee2.position); // Output: Designer

// Updating Object Properties
person.age = 31; // Updates the age property of the person object to 31
console.log(person.age); // Output: 31
car.year = 2021; // Updates the year property of the car object to 2021
console.log(car.year); // Output: 2021      

// Adding New Properties to an Object
person.gender = "Male"; // Adds a new property called gender to the person object with the value "Male"
console.log(person.gender); // Output: Male
car.color = "Red"; // Adds a new property called color to the car object with the value "Red"
console.log(car.color); // Output: Red

// Deleting Properties from an Object
delete person.isStudent; // Deletes the isStudent property from the person object
console.log(person.isStudent); // Output: undefined
delete car.model; // Deletes the model property from the car object
console.log(car.model); // Output: undefined    

// Dot Notation vs Bracket Notation
console.log(person.name); // Output: John (using dot notation)
console.log(person["name"]); // Output: John (using bracket notation)
var property = "age";
console.log(person[property]); // Output: 31 (using bracket notation with a variable)   

// Objects for Lookups
function phoneticLookup(val) {
    var result = "";
    var lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank"
    };
    result = lookup[val]; // Looks up the value in the lookup object and assigns it to result
    return result; // Returns the result of the lookup
}
console.log(phoneticLookup("alpha")); // Output: Adams
console.log(phoneticLookup("charlie")); // Output: Chicago
console.log(phoneticLookup("foxtrot")); // Output: Frank

// Testing Objects for Properties
var myObj = {
    name: "John",
    age: 30
};
console.log(myObj.hasOwnProperty("name")); // Output: true (checks if the name property exists in myObj)
console.log(myObj.hasOwnProperty("age")); // Output: true (checks if the age property exists in myObj)
console.log(myObj.hasOwnProperty("gender")); // Output: false (checks if the genderproperty exists in myObj)

// Manipulating Complex Objects
var myMusic = [
    {
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats": [    
            "CD",
            "8T",
            "LP"
        ]
    }
];
console.log(myMusic[0].artist); // Output: Billy Joel
console.log(myMusic[0].title); // Output: Piano Man
console.log(myMusic[0].release_year); // Output: 1973
console.log(myMusic[0].formats); // Output: ["CD", "8T", "LP"]
myMusic.push({  
    "artist": "The Beatles",
    "title": "Let It Be",
    "release_year": 1970,
    "formats": [
        "CD",
        "8T",       
        "LP"
    ]
});
console.log(myMusic[1].artist); // Output: The Beatles
console.log(myMusic[1].title); // Output: Let It Be
console.log(myMusic[1].release_year); // Output: 1970
console.log(myMusic[1].formats); // Output: ["CD", "8T", "LP"]

// Record Collection Example
var recordCollection = {
    2548: { 
        albumTitle: "Slippery When Wet",
        artist: "Bon Jovi",
        tracks: [   
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    2468: {
        albumTitle: "1999",
        artist: "Prince",
        tracks: [
            "1999", 
            "Little Red Corvette"
        ]
    },
    1245: {
        artist: "Robert Palmer",
        tracks: []
    },
    5439: {
        albumTitle: "ABBA Gold"
    }
};
function updateRecords(id, prop, value) {
    if (value === "") {
        delete recordCollection[id][prop]; // Deletes the property from the record collection if the value is an empty string
    } else if (prop === "tracks") {
        recordCollection[id][prop] = recordCollection[id][prop] || []; // Initializes the tracks property as an empty array if it doesn't exist
        recordCollection[id][prop].push(value); // Adds the value to the tracks array
    } else {
        recordCollection[id][prop] = value; // Updates or adds the property with the new value
    }
    return recordCollection; // Returns the updated record collection
}
console.log(updateRecords(5439, "artist", "ABBA")); // Output: { 2548: { albumTitle: 'Slippery When Wet', artist: 'Bon Jovi', tracks: [ 'Let It Rock', 'You Give Love a Bad Name' ] }, 2468: { albumTitle: '1999', artist: 'Prince', tracks: [ '1999', 'Little Red Corvette' ] }, 1245: { artist: 'Robert Palmer', tracks: [] }, 5439: { albumTitle: 'ABBA Gold', artist: 'ABBA' } }
console.log(updateRecords(5439, "tracks", "Take a Chance on Me")); // Output: { 2548: { albumTitle: 'Slippery When Wet', artist: 'Bon Jovi', tracks: [ 'Let It Rock', 'You Give Love a Bad Name' ] }, 2468: { albumTitle: '1999', artist: 'Prince', tracks: [ '1999', 'Little Red Corvette' ] }, 1245: { artist: 'Robert Palmer', tracks: [] }, 5439: { albumTitle: 'ABBA Gold', artist: 'ABBA', tracks: [ 'Take a Chance on Me' ] } }
console.log(updateRecords(2548, "artist", "")); // Output: { 2548: { albumTitle: 'Slippery When Wet', tracks: [ 'Let It Rock', 'You Give Love a Bad Name' ] }, 2468: { albumTitle: '1999', artist: 'Prince', tracks: [ '1999', 'Little Red Corvette' ] }, 1245: { artist: 'Robert Palmer', tracks: [] }, 5439: { albumTitle: 'ABBA Gold', artist: 'ABBA', tracks: [ 'Take a Chance on Me' ] } }

// Loops in JavaScript
for (var i = 0; i < 5; i++) {
    console.log(i); // Output: 0, 1, 2, 3, 4
}
var j = 0;
while (j < 5) {
    console.log(j); // Output: 0, 1, 2, 3, 4
    j++;
}
