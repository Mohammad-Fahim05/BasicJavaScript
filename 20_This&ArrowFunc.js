//! ===== THIS KEYWORD IN JAVASCRIPT =====


//! ===== WHAT IS this =====

//* this = current context

//* Meaning:
//* "Right now I am inside which object?"


/* ===================================================== */


//! ===== EXAMPLE: OBJECT =====

const user = {
  username: "hitesh",
  price: 999,

  welcomeMessage: function() {
    console.log(`${this.username}, welcome to website`);
  }
};


//* Call
user.welcomeMessage();

//? Output:
// hitesh, welcome to website



//! ===== IMPORTANT POINT =====

//* Instead of:
// username ❌

//* We use:
// this.username ✅


//? Why:
//* We want value from current object



/* ===================================================== */


//! ===== CHANGING CONTEXT =====

user.username = "sam";

user.welcomeMessage();

//? Output:
// sam, welcome to website


//? Reason:
//* this always refers to current value
//* Context changed → output changed



/* ===================================================== */


//! ===== PRINTING this =====

console.log(this);


//? Core Idea:
//* this = who is calling the code right now



/* ===================================================== */


//! ===== GLOBAL SCOPE (BROWSER) =====

// console.log(this);

//? Output:
// window


//* In browser:
// this === window  // true


//* Example:
var a = 10;
// console.log(window.a); // 10


//? Because:
//* Global variables become part of window



/* ===================================================== */


//! ===== GLOBAL SCOPE (NODE.JS) =====

// console.log(this);

//? Output:
// {}


//? Why:
//* Node wraps code inside a function

/*
(function(exports, require, module, __filename, __dirname) {
   // your code
});
*/


//* So:
// this === module.exports



/* ===================================================== */


//! ===== REAL GLOBAL OBJECT IN NODE =====

// console.log(global);

//? This is actual global object (like window)



/* ===================================================== */


//! ===== KEY DIFFERENCE =====

//* Environment   → this value
//* --------------------------
//* Browser       → window
//* Node.js       → {} (module.exports)



/* ===================================================== */


//! ===== INTERVIEW QUESTION =====

//* Is this always global?

//? Answer:
//* ❌ No


//* Correct:
//* Browser → window
//* Node → module.exports
//* Function → depends on how called



/* ===================================================== */


//! ===== this INSIDE FUNCTION =====


//* Browser (non-strict)
function test1() {
  console.log(this);
}

test1(); // window



//* Node.js
function test2() {
  console.log(this);
}

test2(); // global (or undefined in strict mode)



/* ===================================================== */


//! ===== FINAL SUMMARY =====

//* this = current execution context
//* Depends on where code runs
//* Browser:
//*    Global → window
//* Node:
//*    Global → {}
//* Node uses module system
//* Functions → this depends on call



/* ===================================================== */


//! ===== MOST IMPORTANT LINE 🚀 =====

//* "this means → who is calling me right now"


//! ===== ARROW FUNCTIONS & this (DEEP UNDERSTANDING) =====


//! ===== this INSIDE NORMAL FUNCTION =====

function chai() {
  let username = "hitesh";
  console.log(this.username);
}

chai();

//? Output:
// undefined


//? Why:
//* this works properly inside objects
//* Not inside normal functions like this



/* ===================================================== */


//! ===== ARROW FUNCTION INTRODUCTION =====

//* Normal function
function add(a, b) {
  return a + b;
}


//* Arrow function
const add2 = (a, b) => {
  return a + b;
};


//? Rule:
//* Remove function keyword
//* Add =>



/* ===================================================== */


//! ===== ARROW FUNCTION & this =====

//* Common myth:
//* "Arrow function does not have this" ❌


//? Correct:
//* Arrow function does NOT have its own this
//* It takes this from surrounding scope



/* ===================================================== */


//! ===== BASIC ARROW FUNCTION =====

const addTwo = (num1, num2) => {
  return num1 + num2;
};

console.log(addTwo(3, 4)); // 7



/* ===================================================== */


//! ===== IMPLICIT RETURN (SHORTCUT) =====

//* Single line → no {} no return

const addThree = (num1, num2) => num1 + num2;


//* Alternative style
const addFour = (num1, num2) => (num1 + num2);


//? Rule:
//* () → implicit return
//* {} → need return



/* ===================================================== */


//! ===== RETURNING OBJECT (IMPORTANT) =====

//* ❌ Wrong
const wrongFunc = () => { username: "hitesh" };

//? Output: undefined


//* ✅ Correct
const correctFunc = () => ({ username: "hitesh" });

//? Output:
// { username: "hitesh" }


//? Rule:
//* Object return → wrap in ( )



/* ===================================================== */


//! ===== WHERE ARROW FUNCTIONS ARE USED =====

//* Common usage:
//* loops
//* array methods

const arr = [1, 2, 3];

arr.forEach((num) => {
  console.log(num);
});



/* ===================================================== */


//! ===== FINAL SUMMARY =====

//* this:
//* → current object
//* → works best inside objects
//* → Browser: window
//* → Node: {}


//* Arrow Function:
//* → short syntax of function
//* → no own this
//* → uses surrounding this


//* Rules:
//* {} → need return
//* () → no need return
//* Object return → wrap in ( )



/* ===================================================== */


//! ===== MEMORY TRICK 🚀 =====

//* this = current object
//* Arrow = short function + borrowed this