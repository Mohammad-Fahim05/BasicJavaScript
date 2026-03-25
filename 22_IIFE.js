//! ===== IIFE (IMMEDIATELY INVOKED FUNCTION EXPRESSION) =====


//! ===== WHAT IS IIFE =====

//* Full form:
//* Immediately Invoked Function Expression


//* Meaning:
//* Function that runs immediately after writing



/* ===================================================== */


//! ===== NORMAL FUNCTION vs IIFE =====

//* ❌ Normal function

function chai1() {
  console.log("DB CONNECTED");
}

chai1(); // manual call


//* ✅ IIFE

(function chai2() {
  console.log("DB CONNECTED");
})();


//? Difference:
//* Normal → define then call
//* IIFE → define + execute instantly



/* ===================================================== */


//! ===== IIFE STRUCTURE =====

// (function() {
//   // code
// })();


//? Breakdown:
//* (function(){}) → definition
//* () → execution



/* ===================================================== */


//! ===== WHY USE IIFE =====


//* ✅ 1. Run immediately

(function() {
  console.log("DB Connected");
})();


//* ✅ 2. Avoid global scope pollution

let name = "global";

(function() {
  let name = "local";
  console.log(name); // local
})();


//? Global variable does not interfere



/* ===================================================== */


//! ===== SYNTAX TRICK (IMPORTANT) =====

//* ❌ Wrong
// function chai() {
//   console.log("Hi");
// }()


//* ✅ Correct
(function chai3() {
  console.log("Hi");
})();


//? Rule:
//* Wrap function inside ( )



/* ===================================================== */


//! ===== ARROW FUNCTION IIFE =====

(() => {
  console.log("DB Connected");
})();



/* ===================================================== */


//! ===== PASSING PARAMETERS =====

(function(name) {
  console.log(`Hello ${name}`);
})("Hitesh");


//? Output:
// Hello Hitesh



/* ===================================================== */


//! ===== NAMED vs UNNAMED IIFE =====


//* 🔹 Named IIFE
(function chai4() {
  console.log("Named IIFE");
})();


//* 🔹 Unnamed IIFE
(function() {
  console.log("Unnamed IIFE");
})();



/* ===================================================== */


//! ===== MULTIPLE IIFE (IMPORTANT ERROR) =====


//* ❌ Problem

(function() {
  console.log("First");
})()

(function() {
  console.log("Second");
})()


//* ✅ Fix (use semicolon)

(function() {
  console.log("First");
})();

(function() {
  console.log("Second");
})();


//? Why:
//* JS may not know where first ends
//* ; tells → stop here



/* ===================================================== */


//! ===== INTERVIEW LINE =====

//* ❌ Wrong:
//* "IIFE runs immediately"


//* ✅ Correct:
//* "IIFE executes immediately and avoids global scope pollution"



/* ===================================================== */


//! ===== FINAL SUMMARY =====

//* IIFE → runs instantly
//* Syntax → (function(){})()
//* Uses:
//*   → immediate execution
//*   → avoid global variables
//* Types:
//*   → Named
//*   → Arrow
//* Important:
//*   → always use semicolon when chaining



/* ===================================================== */


//! ===== MEMORY TRICK 🚀 =====

//* IIFE = Write → Wrap → Run immediately