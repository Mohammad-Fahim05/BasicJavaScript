//! ===== ARRAYS IN JAVASCRIPT =====



//! ===== WHAT IS AN ARRAY =====

//* Collection of multiple values in one variable

const myArr = [0, 1, 2, 3, 4, 5];

//? Key Points:
//* Uses square brackets []
//* Each value = element
//* Can store mixed data types

const mixedArr = [1, "Hitesh", true]; // ✅ valid



//! ===== INDEXING =====

//* Arrays are zero-based

console.log(myArr[0]); // first element
console.log(myArr[1]); // second element

//? Important:
//* Access using index only (not like object keys)



//! ===== ARRAY IS OBJECT =====

console.log(typeof myArr); // object



//! ===== COPY BEHAVIOR =====

//* Arrays create SHALLOW COPY
//* Reference is shared (heap concept)



//! ===== BASIC METHODS =====

//* push() → add at end
myArr.push(6); 
// [0,1,2,3,4,5,6]

//* pop() → remove last
myArr.pop();

//* unshift() → add at start (slow ⚠️)
myArr.unshift(9);
// [9,0,1,2,3,4,5]

//* shift() → remove first
myArr.shift();



//! ===== PERFORMANCE TIP =====

//* push/pop → fast ✅
//* shift/unshift → slow ❌



//! ===== USEFUL METHODS =====

//* includes() → check value
console.log(myArr.includes(3)); // true/false

//* indexOf() → find index
console.log(myArr.indexOf(3)); // index or -1



//! ===== JOIN =====

//* Convert array → string
const newArr = myArr.join();

console.log(newArr); // "0,1,2,3,4"



//! ===== SLICE vs SPLICE (VERY IMPORTANT 🔥) =====

let arr = [0,1,2,3,4,5];


//* slice(start, end)
//* Does NOT modify original array
let sliceArr = arr.slice(1, 3);

console.log(sliceArr); // [1,2]
console.log(arr); // [0,1,2,3,4,5]



//* splice(start, count)
//* Modifies original array (destructive ⚠️)
let spliceArr = arr.splice(1, 3);

console.log(spliceArr); // [1,2,3]
console.log(arr); // [0,4,5]



//! ===== KEY DIFFERENCE =====

//* slice → safe (no change)
//* splice → dangerous (modifies array)



//! ===== QUICK SUMMARY =====

//* Array = collection of values
//* Index starts from 0
//* Type = object
//* Copy = reference (shallow)
//* push/pop → fast
//* shift/unshift → slow
//* slice → safe
//* splice → modifies original