//! ===== OBJECTS (FINAL) + DESTRUCTURING + JSON + API =====



//! ===== OBJECT DESTRUCTURING ⭐ =====

//* Normal way ❌
const course = {
  courseName: "JS in Hindi",
  price: 999,
  courseInstructor: "Hitesh"
};

console.log(course.courseInstructor);


//* Destructuring ✅ (better)
const { courseInstructor } = course;

console.log(courseInstructor);

//? Why use?
//* Cleaner code
//* Less repetition
//* Used in React



//! ===== RENAME DURING DESTRUCTURING =====

//* Rename variable
const { courseInstructor: instructor } = course;

console.log(instructor);

//? Meaning:
//* Extract courseInstructor
//* Store in variable "instructor"



 //! ===== REACT STYLE USAGE =====

//* Normal ❌
function Navbar(props) {
  console.log(props.company);
}

//* Destructuring ✅
function Navbar({ company }) {
  console.log(company);
}

//? Cleaner + industry standard



//! ===== WHAT IS API 🍔 =====

//* API = communication between systems

//? Restaurant analogy:
//* You order → request
//* Kitchen → process
//* You get food → response



//! ===== JSON (IMPORTANT ⭐) =====

//* Looks like object
// {
//   "name": "Hitesh",
//   "courseName": "JS",
//   "price": "free"
// }

//? Difference:
//* JSON keys MUST be in quotes
//* Object → JS specific
//* JSON → universal format



//! ===== API RESPONSE =====

//* Example (GitHub API)
/*
{
  "login": "hiteshchoudhary",
  "id": 12345,
  "followers": 1000
}
*/

//? Important:
//* This is JSON data
//* Convert → JS object to use



//! ===== API DATA TYPES =====

//* Object
// {
//   "name": "Hitesh"
// }

// //* Array of objects (very common)
// [
//   { "id": 1 },
//   { "id": 2 }
// ]



//! ===== ACCESS API DATA =====

//* Example
users[0].email;

//? Steps:
//* Check → array or object
//* Navigate structure
//* Extract value



//! ===== JSON FORMATTER =====

//* Tools used to:
//* Read complex data
//* Visualize structure

//? Why needed:
//* Raw JSON = messy
//* Formatter = clean view



//! ===== BIG PICTURE 🔥 =====

//* Real-world apps = API data

//? You will:
//* Fetch data
//* Convert JSON → object
//* Use arrays + objects



//! ===== FINAL SUMMARY =====

//* Destructuring → extract values easily ⭐
//* Rename during destructuring
//* JSON → data format
//* API → communication system
//* API data = object / array of objects



//! ===== REAL INSIGHT 🚀 =====

//* You don’t control API data ❌
//* You must understand & extract it ✅