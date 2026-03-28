//! ===== ADVANCED LOOPS (for...of, for...in, forEach) =====


//! ===== BIG IDEA =====

//* All loops do SAME work:
//* Repeat values one by one

//* Difference → only syntax



/* ===================================================== */


//! ===== for...of LOOP =====

//* Best for arrays, strings, maps

let arr = [1, 2, 3, 4];

for (let value of arr) {
  console.log(value);
}


//? Output:
// 1 2 3 4


//? Why easy:
//* No index needed
//* No length needed
//* Direct values



//! ===== WORKS ON =====

//* Arrays ✅
//* Strings ✅
//* Maps ✅



/* ===================================================== */


//! ===== STRING EXAMPLE =====

let str = "hello";

for (let ch of str) {
  console.log(ch);
}


//? Output:
// h e l l o



/* ===================================================== */


//! ===== MAP (SPECIAL DATA TYPE) =====

let map = new Map();

map.set("IN", "India");
map.set("US", "America");
// if we store india many times it shows only time


//* Loop on map
for (let [key, value] of map) {
  console.log(key, value);
}


//? Output:
// IN India
// US America



/* ===================================================== */


//! ===== PROBLEM: OBJECT ❌ =====

let obj1 = { a: 1, b: 2 };

// for (let val of obj1) ❌ error


//? Reason:
//* Object is NOT iterable



/* ===================================================== */


//! ===== for...in LOOP =====

//* Used for objects

let obj2 = {
  js: "JavaScript",
  cpp: "C++"
};

for (let key in obj2) {
  console.log(key);
}


//? Output:
// js
// cpp


//* Get values
for (let key in obj2) {
  console.log(obj2[key]);
}


//? Output:
// JavaScript
// C++



/* ===================================================== */


//! ===== for...in ON ARRAY =====

let arr2 = ["js", "python"];

for (let key in arr2) {
  console.log(key);
}


//? Output:
// 0 1


//? Because:
//* Array keys = index numbers



/* ===================================================== */


//! ===== DIFFERENCE =====

//* for...of → values
//* for...in → keys



/* ===================================================== */


//! ===== forEach LOOP =====

//* Most used in real projects 🔥

let arr3 = ["js", "python", "java"];

arr3.forEach(function(item) {
  console.log(item);
});
// How it works

// 👉 It takes a function

// 👉 Runs function for each value


/* ===================================================== */


//! ===== ARROW FUNCTION =====

arr3.forEach((item) => {
  console.log(item);
});  
 //Same result
  // Cleaner code



/* ===================================================== */


//! ===== EXTRA VALUES =====

arr3.forEach((item, index, arr) => {
  console.log(item, index);
});


//? Gives:
//* item → value
//* index → position
//* arr → full array



/* ===================================================== */


//! ===== REAL-LIFE EXAMPLE =====

//* Array of objects

let users = [
  { name: "A", age: 20 },
  { name: "B", age: 25 }
];

users.forEach((item) => {
  console.log(item.name);
});


//? Output:
// A
// B


//? Used in:
//* APIs
//* Databases
//* Real projects



/* ===================================================== */


//! ===== PASS FUNCTION DIRECTLY =====

function print(item) {
  console.log(item);
}

arr3.forEach(print);


//? Rule:
//* Pass function reference



//* ❌ Wrong
// arr3.forEach(print())

//? Runs immediately (wrong)



/* ===================================================== */


//! ===== FINAL SUMMARY =====

//* for → basic loop
//* while → condition loop
//* do-while → run first
//* for...of → values
//* for...in → keys
//* forEach → function loop



/* ===================================================== */


//! ===== ONE-LINE UNDERSTANDING 🎯 =====

//* "Loop = take each value and do something"



/* ===================================================== */


//! ===== MEMORY TRICK 🧠 =====

//* for...of → "give me values"
//* for...in → "give me keys"
//* forEach → "do something on each"