// Basic Comparison
console.log(2 > 1);   // true
console.log(2 >= 1);  // true
console.log(1 < 2);   // true
console.log(1 == 1);  // true
console.log(1 != 2);  // true

// Problem Starts with Different Data Types
console.log("2" > 1)    // true  
// javascript converts "2" into number 2  so it create confusion in result



// null Comparison (VERY CONFUSING)
console.log(null > 0);   // false
console.log(null == 0);  // false
console.log(null >= 0);  // true 


// Why this happens?
// null behaves differently:
// In comparison (>, <, >=) → converted to 0
// In equality (==) → treated differently
//👉 That’s why:
// // null >= 0 → true
// but null == 0 → false



// undefined Comparison
console.log(undefined == 0); // false
console.log(undefined > 0);  // false
console.log(undefined < 0);  // false

// Loose Equality (==)
console.log("2"==2) // true  because JS converts automatically

// Strict Equality(===)
console.log("2" ===2) // fasle  because value and datatype must be same

