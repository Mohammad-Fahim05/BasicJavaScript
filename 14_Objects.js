//! ===== OBJECTS IN JAVASCRIPT (PART 2) =====



//! ===== CONSTRUCTOR vs LITERAL =====

//* Literal
const obj1 = {};

//* Constructor
const obj2 = new Object();

//? Interview:
//* {} → non-singleton
//* new Object() → singleton



//! ===== ADD VALUES =====

const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;



//! ===== NESTED OBJECTS =====

const regularUser = {
  email: "user@gmail.com",
  fullName: {
    userFullName: {
      firstName: "Hitesh",
      lastName: "Choudhary"
    }
  }
};

//* Access nested value
console.log(regularUser.fullName.userFullName.firstName);



//! ===== OPTIONAL CHAINING (?.) =====

//* Prevents error if property doesn't exist
console.log(regularUser.fullName?.userFullName?.firstName);



//! ===== MERGE OBJECTS =====

//? ❌ Wrong way
const wrongMerge = { obj1, obj2 };

//* Result: { obj1: {...}, obj2: {...} }



//! ===== OBJECT.ASSIGN() =====

//* Merge properly
const obj3 = Object.assign({}, obj1, obj2);



//! ===== SPREAD OPERATOR (BEST 🔥) =====

const obj4 = { ...obj1, ...obj2 };

//* Cleaner + modern



//! ===== REAL-WORLD DATA =====

//* Array of objects (like database)

const users = [
  { id: 1, email: "h@gmail.com" },
  { id: 2, email: "x@gmail.com" }
];

//* Access
console.log(users[0].email);



//! ===== OBJECT METHODS =====

//* keys → array of keys
console.log(Object.keys(tinderUser));

//* values → array of values
console.log(Object.values(tinderUser));

//* entries → key-value pairs
console.log(Object.entries(tinderUser));



//! ===== CHECK PROPERTY =====

//* Check if property exists
console.log(tinderUser.hasOwnProperty("isLoggedIn")); // true
console.log(tinderUser.hasOwnProperty("isLogged"));   // false



//! ===== PROTOTYPE (BEHIND THE SCENES) =====

//* Every object has __proto__
//* Inherits methods like:
//* hasOwnProperty()
//* toString()



//! ===== FINAL SUMMARY =====

//* Objects can be deeply nested
//* Use ?. to avoid errors
//* Merge using:
//    Object.assign()
//    ...spread (best)
//* Object methods return arrays
//* hasOwnProperty() → check existence



//! ===== REAL-WORLD USE =====

//* APIs & databases → array of objects
//* Access like:
users[0].email;