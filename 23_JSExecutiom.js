// JavaScript Execution Context + Call Stack

// 🔷 1. What is Execution Context?

// 👉 Simple meaning:

// Execution Context = How JavaScript runs your code

// Whenever you run JS code:

// JavaScript creates an environment to execute it
// 🔥 Important Rule

// 👉 JavaScript ALWAYS runs code in:

// ➤ Execution Context
// 🔷 2. Types of Execution Context
// 1. Global Execution Context (GEC)

// 👉 Created automatically when program starts

// 👉 Important:

// Stored inside this
// In Browser:
// this === window
// 2. Function Execution Context (FEC)

// 👉 Created every time a function runs

// 3. Eval Execution Context (rare)

// 👉 Not important for now

// 🧠 Interview Tip

// 👉 Always say:

// “There are mainly two execution contexts:
// Global and Function execution context.”

// 🔷 3. JavaScript is Single Threaded

// 👉 Means:

// One task at a time
// One call stack
// 🔷 4. How Code Executes (VERY IMPORTANT)

// JavaScript runs code in 2 phases

// 🔹 Phase 1: Memory Creation Phase

// 👉 Only memory is allocated

// 👉 No execution happens

// What happens?
// Type	Value
// Variables	undefined
// Functions	full definition
// 🔹 Phase 2: Execution Phase

// 👉 Actual code runs

// 👉 Values are assigned

// 👉 Functions execute

// 🔷 5. Example (STEP-BY-STEP)
// let val1 = 10;
// let val2 = 5;

// function add(num1, num2) {
//   let total = num1 + num2;
//   return total;
// }

// let result1 = add(val1, val2);
// let result2 = add(10, 2);
// 🔶 STEP 1: Global Execution Context created
// 🔶 STEP 2: Memory Phase
// Variable	Value
// val1	undefined
// val2	undefined
// add	function definition
// result1	undefined
// result2	undefined
// 🔶 STEP 3: Execution Phase
// Line 1:
// val1 = 10
// Line 2:
// val2 = 5
// Line 3 (function):

// 👉 Already stored → nothing happens

// Line 4:
// result1 = add(val1, val2)

// 👉 Function is called → NEW execution context created

// 🔷 6. Function Execution Context

// Whenever function runs:

// 👉 New box (sandbox) is created

// Inside function (again 2 phases)
// 🔹 Memory Phase
// Variable	Value
// num1	undefined
// num2	undefined
// total	undefined
// 🔹 Execution Phase
// num1 = 10
// num2 = 5
// total = 15

// 👉 return 15

// 👉 Goes back to global

// result1 = 15

// 👉 Function context is deleted after execution

// 🔷 SAME PROCESS for result2

// 👉 New execution context again
// 👉 Repeat same steps

// 🔷 7. Very Important Concept

// 👉 Every function call creates:

// New execution context
// New memory
// New variables
// 🔷 8. Call Stack (SUPER IMPORTANT 🔥)

// 👉 Call Stack = where execution contexts are stored

// 📦 Think like stack (plate system)

// 👉 LIFO = Last In First Out

// 🔶 Example
// function one() {
//   two();
// }

// function two() {
//   three();
// }

// function three() {
//   console.log("done");
// }

// one();
// 🔥 Call Stack Flow
// Global added
// one() added
// two() added
// three() added
// 🔻 Removal (LIFO)
// three() removed
// two() removed
// one() removed
// 🔷 9. Visual Understanding
// Call Stack:

// [ three() ]   ← last added → removed first
// [ two()   ]
// [ one()   ]
// [ global  ]
// 🔷 10. Key Concepts (VERY IMPORTANT)
// ✅ 1. Global Execution Context always exists
// ✅ 2. Code runs in 2 phases
// Memory phase
// Execution phase
// ✅ 3. Functions create new context
// ✅ 4. Context is deleted after execution
// ✅ 5. Call Stack follows LIFO
// 🔷 11. Common Mistakes

// ❌ Thinking variables get values in memory phase
// 👉 NO → they get undefined

// ❌ Thinking function runs immediately
// 👉 NO → only stored in memory phase

// ❌ Confusing return vs console.log
// 👉 Return sends value
// 👉 console.log only prints

// 🔷 12. Extra (Added for clarity)
// 🔸 this keyword

// 👉 In browser:

// this = window
// 🔸 Why important?
// React issues
// Server vs browser difference
// 🧠 Final Easy Summary

// 👉 Remember this line:

// “JavaScript first creates memory, then executes code.”

// 🚀 Ultra Short Revision
// Global context created
// Memory phase → variables = undefined
// Execution phase → values assigned
// Function → new context
// Call stack → LIFO