//! ===== LOOPS IN JAVASCRIPT =====


//! ===== WHAT IS A LOOP =====

//* Loop = repeat code again and again


//? Examples:
//* Print numbers
//* Show list items
//* Repeat tasks



/* ===================================================== */


//! ===== FOR LOOP =====

for (let i = 0; i < 10; i++) {
  console.log(i);
}


//? Structure:
//* for (start; condition; update)



//! ===== HOW IT WORKS (VERY IMPORTANT) =====

//* Step 1 → Start
// let i = 0

//* Step 2 → Condition check
// i < 10

//* Step 3 → Run code

//* Step 4 → Update
// i++

//* Step 5 → Repeat


//? Flow:
//* Start → Check → Run → Update → Repeat



/* ===================================================== */


//! ===== PRINT 1 TO 10 =====

for (let i = 1; i <= 10; i++) {
  console.log(i);
}


//? Output:
// 1 2 3 4 5 6 7 8 9 10



/* ===================================================== */


//! ===== SCOPE IN LOOP =====

for (let i = 0; i < 5; i++) {
  let x = i;
}

// console.log(x); ❌ error


//* Variables stay inside loop



/* ===================================================== */


//! ===== IF INSIDE LOOP =====

for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    console.log("5 is best number");
  }

  console.log(i);
}



/* ===================================================== */


//! ===== NESTED LOOP =====

for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(i, j);
  }
}


//? Concept:
//* Outer loop runs once
//* Inner loop runs completely each time



/* ===================================================== */


//! ===== MULTIPLICATION TABLE =====

for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(i + " x " + j + " = " + i * j);
  }
}



/* ===================================================== */


//! ===== LOOP WITH ARRAY =====

let arr = ["Batman", "Flash", "Superman"];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}


//? Important:
//* length = total elements
//* index starts from 0



//! ===== COMMON MISTAKE =====

//* ❌ Wrong
// i <= arr.length

//* Gives undefined


//* ✅ Correct
// i < arr.length



/* ===================================================== */


//! ===== INFINITE LOOP (DANGER ⚠️) =====

for (let i = 0; i < 5;) {
  console.log(i);
}


//? Problem:
//* No update (i++)
//* Loop never ends



/* ===================================================== */


//! ===== BREAK (STOP LOOP) =====

for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    break;
  }

  console.log(i);
}


//? Output:
// 1 2 3 4



/* ===================================================== */


//! ===== CONTINUE (SKIP ONE STEP) =====

for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    continue;
  }

  console.log(i);
}


//? Output:
// 1 2 3 4 6 7 8 9 10



/* ===================================================== */


//! ===== DIFFERENCE =====

//* break → stop whole loop
//* continue → skip one iteration



/* ===================================================== */


//! ===== FINAL SUMMARY =====

//* Loop → repeat code
//* for → start + condition + update
//* nested loop → loop inside loop
//* break → stop
//* continue → skip
//* array loop → use length



/* ===================================================== */


//! ===== ONE-LINE UNDERSTANDING 🎯 =====

//* "Loop = repeat code until condition becomes false"



/* ===================================================== */


//! ===== MEMORY TRICK 🧠 =====

//* Loop = repeat
//* break = stop everything
//* continue = skip this one