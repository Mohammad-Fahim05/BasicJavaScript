//! ===== CONTROL FLOW IN JAVASCRIPT =====


//! ===== WHAT IS CONTROL FLOW =====

//* Control Flow = deciding which code runs and which does not


//* Before:
//* All code runs automatically

//* Now:
//* Code runs based on conditions



//? Example:
//* If user logged in → show dashboard
//* Else → show login page



/* ===================================================== */


//! ===== IF STATEMENT =====

if (condition) {
  // code
}


//? Rule:
//* If true → runs
//* If false → does NOT run


//* Example:
if (true) {
  console.log("This will run");
}



/* ===================================================== */


//! ===== COMPARISON OPERATORS =====

//* <   → less than
//* >   → greater than
//* <=  → less than or equal
//* >=  → greater than or equal
//* ==  → equal (type ignored)
//* === → equal (type checked)
//* !=  → not equal


//* Example:
2 == "2";   // true
2 === "2";  // false



/* ===================================================== */


//! ===== IF - ELSE =====

if (condition) {
  // true block
} else {
  // false block
}


//* Example:
let temp = 41;

if (temp < 50) {
  console.log("Less than 50");
} else {
  console.log("Greater than 50");
}



/* ===================================================== */


//! ===== SCOPE (VERY IMPORTANT) =====

//* {} creates block scope

if (true) {
  let power = "fly";
}

// console.log(power); ❌ error


//* var breaks scope ❌ (avoid)



/* ===================================================== */


//! ===== SHORT IF =====

//* One-line if
if (true) console.log("Hello");


//? Only for single line
//* Avoid for multiple lines



/* ===================================================== */


//! ===== ELSE IF (MULTIPLE CONDITIONS) =====

if (balance < 500) {
  // ...
} else if (balance < 750) {
  // ...
} else {
  // ...
}


//? Runs first true condition only



/* ===================================================== */


//! ===== LOGICAL OPERATORS =====


//* AND (&&)
//* All conditions must be true

if (loggedIn && hasCard) {
  console.log("Buy course");
}


//* OR (||)
//* Any one condition must be true

if (googleLogin || emailLogin) {
  console.log("Login allowed");
}



/* ===================================================== */


//! ===== SWITCH STATEMENT =====

switch (value) {
  case 1:
    console.log("Jan");
    break;

  case 2:
    console.log("Feb");
    break;

  default:
    console.log("Not found");
}


//? Important:
//* Always use break
//* Without break → next cases also run ❌



/* ===================================================== */


//! ===== TRUTHY & FALSY VALUES =====


//* ❌ Falsy values:
//* false
//* 0, -0, 0n
//* ""
//* null
//* undefined
//* NaN


//* ✅ Truthy values:
//* Everything else


//* Examples:
"0";      // true
"false";  // true
[];       // true
{};       // true



/* ===================================================== */


//! ===== CHECK EMPTY ARRAY / OBJECT =====


//* Array
if (arr.length === 0) {
  // empty array
}


//* Object
if (Object.keys(obj).length === 0) {
  // empty object
}



/* ===================================================== */


//! ===== NULLISH COALESCING (??) =====

//* Works for null / undefined

let val = null ?? 10;

console.log(val); // 10


//? Meaning:
//* If left is null/undefined → take right



/* ===================================================== */


//! ===== FINAL SUMMARY =====

//* if → decision
//* else → second option
//* && → ALL must be true
//* || → ANY one true
//* === → safest comparison
//* {} → block scope
//* falsy → 0, "", null, undefined



/* ===================================================== */


//! ===== ONE-LINE UNDERSTANDING 🎯 =====

//* "Code runs only when condition is true"