//! ===== OBJECTS IN JAVASCRIPT =====

//* Object = collection of key-value pairs
//* Key → label
//* Value → actual data



//! ===== WAYS TO CREATE OBJECT =====

//* 1. Object Literal (most common)
const user = {};

//* 2. Constructor
// Object.create();

//? Interview Point:
//* Literal → not singleton ❌
//* Constructor → singleton ✅



//! ===== CREATE OBJECT =====

const user1 = {
  name: "Mohammad Fahim",
  "Full Name": "Mohammad Fahim Sheikh",   // not access by dot notation
  age: 21,
  location: "Ghaziabad",
  email: "fahim@gmail.com"
};



//! ===== ACCESS VALUES =====

//* Dot notation
console.log(user1.name);        //  Mohammad Fahim

//* Bracket notation
console.log(user1["name"]);       // Mohammad Fahim
console.log(user1["Full Name"]); // Mohammad Fahim Sheikh



//! ===== UPDATE VALUES =====

user1.email = "mohammad@gmail.com";
console.log(user1.email);



//! ===== FREEZE OBJECT =====

//* Prevent changes
Object.freeze(user1);

user1.email = "change@email.com"; //❌ no effect



//! ===== SYMBOL IN OBJECT (IMPORTANT 🔥) =====

//* Correct way
const mySym = Symbol("key1");

const obj = {
  [mySym]: "value"    
};

//* Access
console.log(obj[mySym]);     // value
console.log(typeof[mySym])    // Object



//! ===== OBJECT WITH DATA =====

const jsUser = {
  name: "Hitesh",
  "full name": "Hitesh Choudhary",
  age: 25,
  location: "Jaipur",
  email: "hitesh@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"]
};



//! ===== ADD FUNCTION (METHOD) =====

//* Add function
jsUser.greeting = function() {
  console.log("Hello user");
};

console.log(jsUser.greeting);
//* Call function
console.log(jsUser.greeting());



//! ===== this KEYWORD =====

//* Refers to current object
jsUser.greeting2 = function() {
  console.log(`Hello ${this.name}`);
};

jsUser.greeting2(); // Hello Hitesh



//! ===== FUNCTION REFERENCE vs EXECUTION =====

//* Reference (no execution)
jsUser.greeting;
// Output: [Function]

//* Execution
jsUser.greeting();
// Output: Hello user



//! ===== WHY undefined APPEARS =====

//* Because function returns nothing

console.log(jsUser.greeting());

//? Explanation:
//* Function prints → "Hello user"
//* But returns nothing → undefined



//! ===== FINAL SUMMARY =====

//* Object = key-value pairs
//* Access → dot (.) or bracket ([])
//* Use [] for special keys ("Full Name")
//* Symbol must use []
//* this → current object
//* freeze() → lock object
//* Functions inside object → methods



//! ===== INTERVIEW POINTS 🚀 =====

//* Symbol usage
//* Dot vs bracket difference
//* this keyword
//* Function reference vs execution