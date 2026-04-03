//! ===== MEMORY IN JAVASCRIPT (STACK vs HEAP) =====

//? JavaScript uses two types of memory:
//* 1. Stack Memory (Primitive Types)
//* 2. Heap Memory (Reference Types)



//! ===== STACK MEMORY (PRIMITIVE) =====

//* Stores COPY of value
//* Each variable has its own separate data

let name1 = "Hitesh";
let name2 = name1;

name2 = "ChaiAurCode";

console.log(name1); // Hitesh
console.log(name2); // ChaiAurCode

//? What happened?
//* name2 got a COPY
//* Changing name2 does NOT affect name1



//! ===== HEAP MEMORY (REFERENCE TYPES) =====

//* Stores reference (memory address)
//* Variables point to SAME object

let user1 = {
  email: "user@gmail.com",
  upi: "user@ybl"
};

let user2 = user1;

user2.email = "hitesh@gmail.com";

console.log(user1.email); // hitesh@gmail.com
console.log(user2.email); // hitesh@gmail.com

//? What happened?
//* user2 got REFERENCE (not copy)
//* Both point to SAME object
//* Change in one → affects both



//! ===== SIMPLE VISUALIZATION =====

//* Stack (Primitive)
// name1 → "Hitesh"
// name2 → "ChaiAurCode"

//? 👉 Separate values (independent)



//* Heap (Reference)
// user1 ──► { email: "...", upi: "..." }
// user2 ──► same object

//? 👉 Same memory (shared)



//! ===== QUICK SUMMARY =====

//* Primitive → Stack → Copy → Safe (independent)
//* Reference → Heap → Shared → Changes affect all