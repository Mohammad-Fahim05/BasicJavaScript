//! ===== DATA TYPES IN JAVASCRIPT =====

//? Two Main Categories:
//* 1. Primitive (Call by Value)
//* 2. Non-Primitive / Reference (Call by Reference)



//! ===== PRIMITIVE TYPES =====

//* Stored as actual value (copy)
//* Changing one does NOT affect the other

//* String
let name = "Hitesh";

//* Number (no separate float/int in JS)
let price = 99.9;

//* Boolean
let isLoggedIn = false;

//* null (intentional empty value)
let temperature = null;

//* undefined (declared but no value)
let userEmail;

//* Symbol (unique value)
let id = Symbol("123");

//* BigInt (very large numbers)
let bigNumber    // undefined    //= 12345678901234567890n;
console.log(typeof bigNumber)


//! ===== NON-PRIMITIVE (REFERENCE TYPES) =====

//* Stored as reference (memory address)
//* Changing one WILL affect the other

//* Array
let heroes = ["shaktimaan", "naagraj"];

//* Object
let user = {
  name: "Hitesh",
  age: 22
};

//* Function
let myFunction = function() {
  console.log("Hello World");
};



//! ===== JAVASCRIPT NATURE =====

//* Dynamically Typed Language

//* You don’t define types manually
let value = 100;      // number
value = "hello";      // now string ✅ allowed









// Primitive → Copy
// let a = 10;
// let b = a;

// b = 20;

// console.log(a); // 10

// 👉 Original not affected

// 🔵 Reference → Same Memory
// let obj1 = {name: "Hitesh"};
// let obj2 = obj1;

// obj2.name = "Rahul";

// console.log(obj1.name); // Rahul 😵

// 👉 Both point to same memory