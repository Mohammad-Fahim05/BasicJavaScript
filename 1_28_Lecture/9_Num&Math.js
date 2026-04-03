//! ===== NUMBERS & MATH IN JAVASCRIPT =====



//! ===== CREATING NUMBERS =====

//* Primitive number (auto-detected)
let score = 400;

//* Number object (rarely used)
let balance = new Number(100);

//? Difference:
//* 400 → primitive
//* new Number(100) → object



//! ===== NUMBER METHODS =====

//* Convert to string
let num1 = 100;

console.log(num1.toString()); // "100"
console.log(num1.toString().length); // 3



//! ===== toFixed() =====

//* Controls decimal places
let num2 = 100.456;

console.log(num2.toFixed(2)); // 100.46

//? Used in:
//* e-commerce
//* price formatting



//! ===== toPrecision() =====

//* Controls total digits
let num3 = 123.8966;

console.log(num3.toPrecision(3)); // 124



//! ===== toLocaleString() =====

//* Format numbers with commas
let num4 = 1000000;

//* US format
console.log(num4.toLocaleString()); // 1,000,000

//* Indian format 🇮🇳
console.log(num4.toLocaleString('en-IN')); // 10,00,000



//! ===== IMPORTANT NUMBER PROPERTIES =====

//* Largest possible number
console.log(Number.MAX_VALUE);

//* Smallest possible number
console.log(Number.MIN_VALUE);

//* Max safe integer
console.log(Number.MAX_SAFE_INTEGER);

//* Min safe integer
console.log(Number.MIN_SAFE_INTEGER);

//? Used in:
//* DSA
//* large calculations



//! ===== MATH OBJECT (VERY POWERFUL 🚀) =====

//* Built-in library
console.log(Math);



//! ===== COMMON MATH METHODS =====

//* Absolute value
console.log(Math.abs(-4)); // 4

//* Round
console.log(Math.round(4.6)); // 5
console.log(Math.round(4.2)); // 4

//* Ceiling (top value)
console.log(Math.ceil(4.2)); // 5

//* Floor (lower value)
console.log(Math.floor(4.9)); // 4

//* Square root
console.log(Math.sqrt(25)); // 5

//* Power
console.log(Math.pow(2, 3)); // 8

//* Min & Max
console.log(Math.min(4, 3, 6)); // 3
console.log(Math.max(4, 3, 6)); // 6



//! ===== MATH.RANDOM() =====

//* Always gives value between 0 and 1
console.log(Math.random());



//! ===== RANDOM NUMBER (1 TO 10) =====

//* Correct way
console.log(Math.floor(Math.random() * 10) + 1);



//! ===== RANDOM NUMBER IN RANGE =====

//* General formula (VERY IMPORTANT 🔥)
Math.floor(Math.random() * (max - min + 1)) + min;

//* Example:
let min = 10;
let max = 20;

let result = Math.floor(Math.random() * (max - min + 1)) + min;

console.log(result); // always between 10 and 20



//! ===== HOW FORMULA WORKS =====

//* Math.random() → 0 to 1
//* Multiply → increase range
//* +1 → include max value
//* +min → shift range