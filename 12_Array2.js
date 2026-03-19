//! ===== ARRAYS IN JAVASCRIPT (PART 2) =====



//! ===== PROBLEM WITH push() =====

//* push() does NOT merge arrays

const marvel = ["Thor", "Ironman", "Spiderman"];
const dc = ["Superman", "Flash", "Batman"];

marvel.push(dc);

console.log(marvel);

//? Output:
// ["Thor","Ironman","Spiderman", ["Superman","Flash","Batman"]]

//* Entire array becomes ONE element ❌



//! ===== CONCAT (MERGE ARRAYS) =====

//* concat() merges arrays properly

const allHeroes1 = marvel.concat(dc);

console.log(allHeroes1);

//? Returns new array
//* Does NOT modify original



//! ===== SPREAD OPERATOR (BEST WAY 🔥) =====

//* Clean + flexible

const allHeroes2 = [...marvel, ...dc];

console.log(allHeroes2);

//* Can merge multiple arrays
// const arr = [...a, ...b, ...c];



//! ===== NESTED ARRAYS PROBLEM =====

//* Arrays inside arrays

const arr = [1, 2, 3, [4, 5, 6], 7, [8, [9, 10]]];



//! ===== flat() SOLUTION =====

//* Removes nesting

const flatArr = arr.flat(Infinity);

console.log(flatArr);

//? Output:
// [1,2,3,4,5,6,7,8,9,10]

//* Infinity → fully flatten



//! ===== ARRAY CHECK =====

//* Check if value is array

console.log(Array.isArray("Fahim")); // false



//! ===== ARRAY.from() =====

//* Convert into array

const strArr = Array.from("Fahim");

console.log(strArr); 
// ['F','a','h','i','m']



//! ===== IMPORTANT INTERVIEW CASE =====

//* Object conversion problem

Array.from({ name: "Fahim" });

//? Output: []
//* Because keys/values not specified

//* Correct way:
let obj = { name: "Fahim" };

console.log(Object.keys(obj));
console.log(Object.values(obj));



//! ===== ARRAY.of() =====

//* Create array from values

let score1 = 100;
let score2 = 200;
let score3 = 300;

const scores = Array.of(score1, score2, score3);

console.log(scores); // [100, 200, 300]



//! ===== from() vs of() =====

//* Array.from() → convert iterable/object
//* Array.of() → create array from values



//! ===== KEY LEARNINGS =====

//* Arrays can contain anything
//* push() ≠ merge ❌
//* concat() works ✅
//* spread (...) is best 🔥
//* flat() removes nesting
//* Array.isArray() → validation
//* Array.from() → conversion
//* Array.of() → creation