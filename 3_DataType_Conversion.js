// Type Conversion in JavaScript

let score = 33
// There are two methods to check but both are same it print same result
console.log(typeof score)     // output : number
console.log(typeof (score))   // output : number



// Converting String → Number
let score1 = "33"
let valueInNumber = Number(score1)
console.log(typeof valueInNumber)     // number 

// for above important cases create
//           case1 :  valid number String
// Number("33")  converts into  33

//           Case 2: Invalid number string
// Number("33abc") → NaN

              // Case 3: null
// Number(null) → 0

//           Case 4: undefined
        //  Number(undefined) → NaN    (NaN means conversion failed)

        // Case 5: Boolean
// Number(true) → 1
// Number(false) → 0

//         Case 6: Non-number string
// Number("Hitesh") → NaN


// Converting to Boolean

let isLoggedin = 1
let booleanconvert = Boolean(isLoggedin)
console.log(booleanconvert)    // true

// input           output
// 1               true
// 0               false
// ""(empty)       false
// "Fahim"         true

// Converting it into String
let num = 33
let str = String(num)
console.log(str)         // 33
console.log(typeof str)    // string



