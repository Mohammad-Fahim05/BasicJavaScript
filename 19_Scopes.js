//! ===== NESTED SCOPE, CLOSURE & HOISTING =====


//? Rule:
//* Global variables → accessible inside ✅
//* Inside variables → NOT accessible outside ❌

//! ===== NESTED FUNCTIONS (MAIN CONCEPT) =====

function one() {
  const username = "hitesh";

  function two() {
    const website = "youtube";
    console.log(username); // ✅ access parent
  }

  two();
}

one();


//? Explanation:
//* two() is inside one()
//* So it can access parent variables



//! ===== REAL-LIFE ANALOGY =====

//* Child can ask from parent 
//* Parent cannot take from child

//* Inner → can access outer ✅
//* Outer → cannot access inner ❌



//! ===== ERROR EXAMPLE =====

function one() {
  function two() {
    const website = "youtube";
  }

  // console.log(website); ❌ error
}


//? Reason:
//* website exists only inside two()



//! ===== EXECUTION FLOW =====

//* Code runs line by line

//* If error happens:
//* ❌ Execution stops immediately



/* ===================================================== */


//! ===== SAME CONCEPT WITH IF-ELSE =====

if (true) {
  const username = "hitesh";

  if (username === "hitesh") {
    const website = "youtube";
    console.log(username + website); // ✅ works
  }

  // console.log(website); ❌ error
}

// console.log(username); ❌ error


//? Explanation:
//* website → inner block only
//* username → outer block only



//! ===== KEY LEARNING =====

//* Every {} creates new scope
//* Variables stay inside their block



/* ===================================================== */


//! ===== CLOSURE (BASIC INTRO) =====

function one() {
  let name = "hitesh";

  function two() {
    console.log(name); // using outer variable
  }

  two();
}


//? Concept:
//* Inner function using outer variables
//* → This leads to closure



/* ===================================================== */


//! ===== FUNCTION DECLARATION =====

addOne(5); // ✅ works

function addOne(num) {
  return num + 1;
}



/* ===================================================== */


//! ===== FUNCTION EXPRESSION =====

// addTwo(5); ❌ error

const addTwo = function(num) {
  return num + 2;
};


//? Reason:
//* Variable is not initialized yet



/* ===================================================== */


//! ===== HOISTING (SIMPLE) =====

//* JS moves declarations to top

//* Function declaration → fully hoisted ✅
//* Function expression → NOT same ❌



//! ===== SUMMARY TABLE =====

//* Type                  → Works before declaration?
//* -----------------------------------------------
//* Function declaration → ✅ Yes
//* Function expression  → ❌ No



/* ===================================================== */


//! ===== INTERVIEW POINT =====

//* Why error in function expression?

//? Because:
//* Function stored inside variable
//* Variable not initialized yet



/* ===================================================== */


//! ===== FINAL SUMMARY =====

//* {} = scope
//* Nested scope → parent-child relation
//* Inner → can access outer ✅
//* Outer → cannot access inner ❌
//* Errors stop execution
//* Closure → inner uses outer variables
//* Function declaration ≠ expression
//* Hoisting behaves differently



/* ===================================================== */


//! ===== MOST IMPORTANT LINE 🚀 =====

//* "Child can access parent,
//*  but parent cannot access child"