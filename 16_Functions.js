//! ===== FUNCTIONS IN JAVASCRIPT (PART 1) =====


//! ===== WHAT IS A FUNCTION =====

//* Function = reusable block of code

//* Without function ❌
console.log("H");
console.log("I");
console.log("T");

//* With function ✅
function sayName() {
  console.log("H");
  console.log("I");
  console.log("T");
}

//* Execution
sayName();


//? Important:
//* sayName → reference
//* sayName() → execution ✅



//! ===== PARAMETERS =====

//* Function with parameters
function addTwoNumbers(num1, num2) {
  console.log(num1 + num2);
}

//* Call with arguments
addTwoNumbers(3, 4); // 7



//! ===== JS TYPE PROBLEM ⚠️ =====

addTwoNumbers("3", 4);

//? Output: "34"
//* JS does type coercion



//! ===== PARAMETERS vs ARGUMENTS =====

//* Parameters → function definition
function add(num1, num2) {}

//* Arguments → function call
add(3, 4);



//! ===== BIG MISTAKE ❌ =====

//* Using only console.log

function add1(num1, num2) {
  console.log(num1 + num2);
}

const result1 = add1(3, 5);

console.log(result1); // undefined ❌


//? Why:
//* console.log() prints
//* but does NOT return value



//! ===== CORRECT WAY → RETURN ✅ =====

function add2(num1, num2) {
  return num1 + num2;
}

const result2 = add2(3, 5);

console.log(result2); // 8 ✅


//? Golden Rule:
//* console.log → print
//* return → give value back



//! ===== RETURN RULE =====

function test() {
  return 5;

  console.log("Hello"); // ❌ never runs
}

//* Nothing executes after return



//! ===== CLEANER SYNTAX =====

//* Direct return
function add3(num1, num2) {
  return num1 + num2;
}



//! ===== STORE RESULT =====

const result3 = add3(3, 5);



//! ===== REAL EXAMPLE =====

function loginUserMessage(username) {
  return `${username} just logged in`;
}

loginUserMessage("Hitesh");



//! ===== PROBLEM (UNDEFINED) ❌ =====

loginUserMessage();

//? Output: undefined just logged in



//! ===== FIX → VALIDATION ✅ =====

function loginUserMessage2(username) {
  if (!username) {
    console.log("Please enter username");
    return;
  }

  return `${username} just logged in`;
}



//! ===== DEFAULT PARAMETER =====

function loginUserMessage3(username = "Sam") {
  return `${username} just logged in`;
}

//* Now safe
loginUserMessage3();



//! ===== KEY CONCEPTS =====

//* Function = reusable code
//* () → execution
//* Parameters vs Arguments
//* return vs console.log
//* default values
//* input validation



//! ===== FINAL SUMMARY =====

//* Avoid repetition using functions
//* Always use return for values
//* JS auto type conversion ⚠️
//* Always validate inputs in real apps