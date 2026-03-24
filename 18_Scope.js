//! ===== SCOPE IN JAVASCRIPT =====

//* In this part we are learning → Scope in JavaScript

//* Now we go deeper → where variables live (scope)



//! ===== WHAT IS SCOPE =====

//* Scope means:
//* "Till where this variable exists and can be used"


//? Important Questions:
//* Where is variable created?
//* Where can I use it?
//* When does it stop working?



/* ===================================================== */


//! ===== STEP 1: VARIABLES =====

let a = 10;
const b = 20;
var c = 30;

//* All working fine
//* Accessible everywhere (global)



/* ===================================================== */


//! ===== STEP 2: {} → BLOCK / SCOPE =====

//* Curly braces {} define scope

//* Used in:
//* if
//* functions
//* loops



/* ===================================================== */


//! ===== STEP 3: VARIABLES INSIDE BLOCK =====

if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
}


//! ===== CHECK OUTSIDE =====

// console.log(a); ❌ error
// console.log(b); ❌ error
console.log(c); // ✅ 30



//? Problem:
//* c should NOT come outside
//* But var allows it ❌



//! ===== CONCLUSION =====

//* var breaks scope ❌
//* let and const follow scope ✅



/* ===================================================== */


//! ===== REAL BUG EXAMPLE =====

var c = 30;

if (true) {
  var c = 100;
}

console.log(c); // 100 ❌


//? Explanation:
//* Someone already used c = 30
//* Your block changed it to 100

//* 💥 Whole app can break



/* ===================================================== */


//! ===== GLOBAL vs BLOCK SCOPE =====


//* 🌍 Global Scope
let x = 300;


//* 📦 Block Scope
if (true) {
  let x = 10;
  console.log(x); // 10
}

console.log(x); // 300



//? Concept:
//* Same variable name allowed
//* But different scopes



/* ===================================================== */


//! ===== IMPORTANT RULES =====


//* Rule 1 → Inner can access outer

let y = 10;

if (true) {
  console.log(y); // ✅ works
}



//* Rule 2 → Outer cannot access inner

if (true) {
  let z = 10;
}

// console.log(z); ❌ error



/* ===================================================== */


//! ===== WHY SCOPE IS IMPORTANT =====

//* Imagine:
//* 10 developers working together

//* Everyone using:
//* i, a, data

//* Without scope:
//* 💥 Variable clashes
//* 💥 Bugs everywhere



/* ===================================================== */


//! ===== {} CONFUSION =====

//* {} can mean 2 things:

//* 1. Object → data structure
const obj = { name: "Hitesh" };


//* 2. Block → scope
if (true) {
  let a = 10;
}


//* ⚠️ Don't confuse them



/* ===================================================== */


//! ===== KEY RULE (VERY IMPORTANT) =====

//* Inside block → stays inside
//* Outside → cannot access inside



/* ===================================================== */


//! ===== FINAL SUMMARY =====

//* Scope = where variable lives
//* {} creates scope
//* let / const → follow scope ✅
//* var → breaks scope ❌
//* Block variables stay inside
//* Global variables available everywhere