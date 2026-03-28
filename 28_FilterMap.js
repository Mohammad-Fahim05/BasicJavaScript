//! ===== ARRAY METHODS (forEach, filter, map, reduce) =====


//! ===== BIG IDEA =====

//* Modern loops for arrays:

//* forEach → do something
//* filter  → select values
//* map     → change values
//* reduce  → combine into one



/* ===================================================== */


//! ===== forEach =====

//* Runs function for each value

let arr = [1, 2, 3];

arr.forEach((item) => {
  console.log(item);
});


//! ===== IMPORTANT RULE =====

//* forEach does NOT return value ❌

let val = arr.forEach((item) => item);

console.log(val); // undefined



/* ===================================================== */


//! ===== filter =====

//* Select values based on condition

let nums = [1, 2, 3, 4, 5, 6];

let result1 = nums.filter((n) => {
  return n > 4;
});


//? Output:
// [5, 6]


//! ===== RULE =====

//* Must return true / false
//* true → keep
//* false → remove



//! ===== COMMON MISTAKE =====

//* ❌ No return
// nums.filter((n) => {
//   n > 4;
// });


//* ✅ Correct
nums.filter((n) => n > 4);



/* ===================================================== */


//! ===== REAL EXAMPLE =====

let books = [
  { genre: "history", year: 2005 },
  { genre: "science", year: 1999 }
];

let result2 = books.filter((b) => {
  return b.genre === "history";
});


//? Output:
// Only history books



//! ===== MULTIPLE CONDITIONS =====

books.filter((b) => {
  return b.year > 2000 && b.genre === "history";
});



/* ===================================================== */


//! ===== map =====

//* Modify / transform values

let nums2 = [1, 2, 3];

let result3 = nums2.map((n) => {
  return n + 10;
});


//? Output:
// [11, 12, 13]


//! ===== RULE =====

//* map always returns same number of items



/* ===================================================== */


//! ===== CHAINING (VERY POWERFUL) =====

let result4 = nums2
  .map((n) => n * 10)
  .map((n) => n + 1)
  .filter((n) => n > 20);


//? Steps:
//* multiply → add → filter



/* ===================================================== */


//! ===== reduce =====

//* Combine all values into ONE

let nums3 = [1, 2, 3];

let total1 = nums3.reduce((acc, curr) => {
  return acc + curr;
}, 0);


//? Output:
// 6



//! ===== HOW IT WORKS =====

//* acc → accumulator (stores result)
//* curr → current value



/* ===================================================== */


//! ===== SHOPPING CART EXAMPLE =====

let cart = [
  { price: 100 },
  { price: 200 }
];

let total2 = cart.reduce((acc, item) => {
  return acc + item.price;
}, 0);


//? Output:
// 300



/* ===================================================== */


//! ===== SHORT SYNTAX =====

let total3 = nums3.reduce((acc, curr) => acc + curr, 0);



/* ===================================================== */


//! ===== FINAL SUMMARY =====

//* forEach → run only (no return)
//* filter  → select values
//* map     → change values
//* reduce  → combine into one



/* ===================================================== */


//! ===== ONE-LINE MEMORY 🎯 =====

//* "filter selects, map changes, reduce combines"



/* ===================================================== */


//! ===== MEMORY TRICK 🧠 =====

//* filter → sieve (छानना)
//* map → modify
//* reduce → total