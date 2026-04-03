//! ===== FUNCTIONS IN JAVASCRIPT (PART 2) =====


//! ===== REST OPERATOR (...) =====

//* Problem:
//* We don't know how many values will come

//* ❌ Wrong
function calculatePrice1(num1) {
  return num1;
}

//* Only first value handled


//* ✅ Solution → Rest Operator
function calculatePrice2(...prices) {
  return prices;
}

//* Call
calculatePrice2(200, 400, 500);

//? Output: [200, 400, 500]


//? Concept:
//* ... → collects all values into array


//! ===== REAL-WORLD THINKING =====

//* Shopping cart → multiple prices
//* We collect all into one array



//! ===== MIXING NORMAL + REST PARAMETERS =====

function calculatePrice3(val1, val2, ...rest) {
  return rest;
}

//* Call
calculatePrice3(200, 400, 500, 1000);

//? Output: [500, 1000]


//? Rule:
//* First values → normal params
//* Remaining → rest operator



//! ===== PASSING OBJECT IN FUNCTION =====

//* Object
const user = {
  username: "Hitesh",
  price: 199
};

//* Function
function handleObject(anyObject) {
  console.log(
    `Username is ${anyObject.username} and price is ${anyObject.price}`
  );
}

//* Call
handleObject(user);


//? Output:
// Username is Hitesh and price is 199



//! ===== IMPORTANT ISSUE ⚠️ =====

//* Wrong key
// anyObject.prices ❌

//? Output: undefined

//* JS does NOT protect you



//! ===== PASS OBJECT DIRECTLY =====

handleObject({
  username: "Sam",
  price: 399
});

//? No need to create variable



//! ===== PASSING ARRAY IN FUNCTION =====

//* Array
const myArray = [200, 400, 600];

//* Function
function returnSecondValue(arr) {
  return arr[1];
}

//* Call
returnSecondValue(myArray);

//? Output: 400



//! ===== DIRECT ARRAY PASSING =====

returnSecondValue([200, 400, 600]);



//! ===== CORE UNDERSTANDING =====

//* 1. Multiple values → Rest operator
function f(...data) {}


//* 2. Object → Dot notation
// obj.key


//* 3. Array → Index
// arr[index]



//! ===== BIG PICTURE =====

//* Input Type        → Handling Method
//* -----------------------------------
//* Many values       → ...rest
//* Object            → obj.key
//* Array             → arr[index]



//! ===== REAL-WORLD USAGE =====

//* 🛒 Shopping cart → rest operator
//* 🌐 API response → object
//* 📊 Data list → array



//! ===== FINAL SUMMARY =====

//* ... collects unlimited values
//* Objects passed by reference
//* Arrays accessed via index
//* Always validate data 