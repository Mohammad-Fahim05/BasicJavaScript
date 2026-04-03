// First: What is this?

// 👉 this = “whose object is running this code?”

// 🟢 Step 1: Normal Function (easy case)
// const obj = {
//   name: "Rahul",
//   sayName: function () {
//     console.log(this.name);
//   }
// };

// obj.sayName();

// 👉 Output: Rahul

// Why?
// sayName is called using obj
// So 👉 this = obj
// 🔴 Step 2: Arrow Function (same code)
// const obj = {
//   name: "Rahul",
//   sayName: () => {
//     console.log(this.name);
//   }
// };

// obj.sayName();

// 👉 Output: undefined

// ❓ Why is it undefined?

// 👉 Because arrow function does NOT look at obj

// Instead it asks:

// “Where was I created?”

// 👉 It was created in global scope

// So:

// Browser → this = window
// Node → this = {}

// 👉 And window.name or {} has no name → undefined

// 🔥 The REAL Difference
// Normal Function:

// 👉 this = depends on who calls it

// Arrow Function:

// 👉 this = depends on where it was written

// 🎯 Step 3: Where Arrow Functions HELP
// const obj = {
//   name: "Rahul",

//   sayName: function () {
//     const inner = () => {
//       console.log(this.name);
//     };
//     inner();
//   }
// };

// obj.sayName();

// 👉 Output: Rahul

// Why this works?
// sayName() → this = obj

// Arrow function inner says:

// “I will use the same this as my parent”

// 👉 So this = obj ✅

// ❌ Same with Normal Function (breaks)
// const obj = {
//   name: "Rahul",

//   sayName: function () {
//     function inner() {
//       console.log(this.name);
//     }
//     inner();
//   }
// };

// obj.sayName();

// 👉 Output: undefined

// 👉 Because:

// inner() is called alone
// So this becomes global
// 🧩 Simple Analogy

// Think of this like a name tag 👇

// Normal function:
// Gets a new name tag when called
// Depends on who called it
// Arrow function:
// Does NOT get a new name tag
// Uses parent’s name tag
// ⚡ Final Simple Rule

// 👉 Normal function:
// “Who called me?” → decides this

// 👉 Arrow function:
// “Where was I created?” → decides this

// 💬 Super Short Version (for interviews)

// Arrow functions don’t have their own this.
// They inherit this from their surrounding scope.