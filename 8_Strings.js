//! ===== STRINGS IN JAVASCRIPT =====



//! ===== CREATE STRINGS =====

//* Using quotes (both work)
let str1 = "Mohammad ";
let str2 = "Fahim";

//* Old way (concatenation)
console.log(str1 + str2);
console.log("My name is " + str1 + str2);

//* Modern way (Template Literals)
console.log(`My name is ${str1} ${str2}`);



//! ===== STRING OBJECT =====

//* Rarely used but important
let name1 = new String("Fahim");

//? Behind the scenes:
//* String behaves like an object
//* Has properties + methods



//! ===== ACCESS CHARACTERS =====

let name = "Fahim";

//* Access using index
console.log(name[2]); // h

//* Using method
console.log(name.charAt(2)); // h



//! ===== BASIC PROPERTIES =====

//* Length
console.log(name.length); // 5



//! ===== CASE METHODS =====

//* Uppercase
console.log(name.toUpperCase());

//* Lowercase
console.log(name.toLowerCase());



//! ===== SEARCH METHODS =====

//* Find index of character
console.log(name.indexOf('i')); // 3



//! ===== SUBSTRING METHODS =====

let str = "Fahim";

//* substring(start, end)
console.log(str.substring(0, 4)); // Fahi

//* slice (supports negative index)
let stry = "Hitesh";
console.log(stry.slice(-4)); // esh



//! ===== TRIM =====

//* Removes extra spaces
let str3 = "   hitesh   ";
console.log(str3.trim()); // "hitesh"



//! ===== REPLACE =====

//* Replace part of string
let url1 = "hitesh%20chaudhary";
console.log(url1.replace('%20', '-')); // hitesh-chaudhary



//! ===== INCLUDES =====

//* Check if value exists
let url2 = "hitesh-chaudhary";

console.log(url2.includes("hitesh")); // true
console.log(url2.includes("rahul"));  // false



//! ===== SPLIT =====

//* Convert string → array
let str4 = "hitesh-chaudhary-com";

console.log(str4.split('-'));
// ["hitesh", "chaudhary", "com"]



//! ===== KEY CONCEPT =====

//* Strings are IMMUTABLE
//* Original value does NOT change

let test = "hello";

test.toUpperCase();

console.log(test); // still "hello"