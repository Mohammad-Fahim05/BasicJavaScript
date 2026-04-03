"use strict";    //It tells JS:   “Treat this code as new/latest 
// Most environments (like Node.js, modern browsers) already use strict mode by default


// Browser vs Node.js   : :  When JavaScript runs in a browser (like Chrome, Firefox, etc.), it has access to the Window API. 
// alert("Hello");   this is part of browser so it work and show pop up but in this environment console.log works



// We must follow code readiability(so it easy to understand when read)
// Bad code:
         console.log(3+3); console.log("Hitesh");
// Good code :
            console.log(3 + 3);
            console.log("Hitesh");


// Documentation :  1. MDN DOcs(easy)  2. ECMAScript(TC39)(hard but official)

// JavaScript DataTypes
let name = "fahim"    // String
let age =  21    // for large number use BigInt
let isLoggedIn = false    // Boolean

let temp = null; // empty value intentionally
let state;   // undefined : means value not assigned yet

// Object datatype    :   Most powerful type
let user = {
    name : "Fahim",
    age : 18
}

// Typeof operator
console.log(typeof "Fahim");  // string
console.log(typeof 18);    // number

// Important
console.log(typeof null); // object ❗
console.log(typeof undefined); // undefined