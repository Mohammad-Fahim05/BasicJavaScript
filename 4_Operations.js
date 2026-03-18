// Operations in JavaScript
let value = 3
let negValue  = -value
console.log(negValue)   // -3

console.log(2+2)
console.log(2*2)
console.log(2-2)
console.log(2/2)
console.log(2%2)  // remainder
console.log(2**2)  // power


// String Concatenation
let str1 = "Mohammad "
let str2 = "Fahim"
let str3 = str1 + str2
console.log(str3)



// Tricky Cases
console.log("1" + 2); // "12"
console.log(1 + "2"); // "12"
console.log("1" + 2 + 2); // "122"
console.log(1 + 2 + "2"); // "32"

// JavaScript works left to right
// If string comes:
// After → first math happens
// Before → everything becomes string

// We have to write always readable code using bracket so it is easy to understand

console.log(+true)   //1 
console.log(+"")   //0



// Postfix:
let x = 5;
console.log(x++); // 5
console.log(x);   // 6


// Prefix:
let a = 5;
console.log(++a); // 6