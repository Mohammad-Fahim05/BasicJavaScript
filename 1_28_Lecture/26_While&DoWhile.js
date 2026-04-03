//! ===== WHILE & DO-WHILE LOOPS =====


//! ===== IMPORTANT IDEA =====

//* All loops do SAME thing:
//* Repeat code until condition becomes false

//* Difference → only syntax



/* ===================================================== */


//! ===== WHILE LOOP =====

let i = 0;

while (i <= 10) {
  console.log(i);
  i++;
}


//? Output:
// 0 1 2 3 4 5 6 7 8 9 10



//! ===== HOW IT WORKS =====

//* Step 1 → Start (i = 0)
//* Step 2 → Check condition (i <= 10)
//* Step 3 → Run code
//* Step 4 → Update (i++)
//* Step 5 → Repeat



/* ===================================================== */


//! ===== INFINITE LOOP WARNING ⚠️ =====

//* ❌ Wrong (no update)

let j = 0;

while (j <= 5) {
  console.log(j);
}


//? Problem:
//* No j++
//* Loop never ends ❌



/* ===================================================== */


//! ===== WHILE LOOP WITH ARRAY =====

let arr = ["Flash", "Batman", "Superman"];
let k = 0;

while (k < arr.length) {
  console.log(arr[k]);
  k++;
}


//? Output:
// Flash
// Batman
// Superman



/* ===================================================== */


//! ===== FOR vs WHILE =====

//* FOR LOOP:
//* → All in one line
//* → Easy for counting

//* WHILE LOOP:
//* → More flexible
//* → Manual control



/* ===================================================== */


//! ===== DO-WHILE LOOP =====

let x = 1;

do {
  console.log(x);
  x++;
} while (x <= 10);


//? Output:
// 1 2 3 4 5 6 7 8 9 10



//! ===== KEY RULE =====

//* Code runs FIRST
//* Condition checked AFTER



/* ===================================================== */


//! ===== SPECIAL CASE (VERY IMPORTANT) =====

let y = 11;

do {
  console.log(y);
} while (y <= 10);


//? Output:
// 11


//? Why:
//* Code runs first
//* Then condition checked



/* ===================================================== */


//! ===== WHILE vs DO-WHILE =====

//* WHILE:
//* → Check first
//* → May run 0 times

//* DO-WHILE:
//* → Run first
//* → Runs at least 1 time



/* ===================================================== */


//! ===== WHEN TO USE WHAT =====

//* FOR:
//* → When count is known

//* WHILE:
//* → When condition-based

//* DO-WHILE:
//* → Must run at least once



/* ===================================================== */


//! ===== LOOP REQUIREMENTS =====

//* Every loop needs:
//* 1. Start value
//* 2. Condition
//* 3. Update



/* ===================================================== */


//! ===== FINAL SUMMARY =====

//* Loop → repeat code
//* while → check → run
//* do-while → run → check
//* Always update variable
//* Avoid infinite loops ⚠️



/* ===================================================== */


//! ===== MEMORY TRICK 🧠 =====

//* while → "Check first"
//* do-while → "Do first"



/* ===================================================== */


//! ===== BIG PICTURE 🚀 =====

//* Now you know:
//* ✔ Control Flow
//* ✔ if / else
//* ✔ Operators
//* ✔ for loop
//* ✔ while loop
//* ✔ do-while
//* ✔ break / continue

//* 🎯 JS foundation complete 🔥