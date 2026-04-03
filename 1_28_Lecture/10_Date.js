//! ===== DATES IN JAVASCRIPT =====


//! ===== CURRENT DATE =====

//* Create current date
let myDate = new Date();

console.log(myDate); // ISO format
console.log(myDate.toString()); // readable format
console.log(myDate.toLocaleDateString()); // local date
console.log(typeof myDate); // object



//! ===== CREATING CUSTOM DATES =====

//* Month starts from 0 (IMPORTANT ⚠️)
let date1 = new Date(2026, 3, 18);

console.log(date1.toDateString()); // Sat Apr 18 2026



//* With time
let date2 = new Date(2026, 3, 18, 5, 3);

console.log(date2.toLocaleDateString()); // 18/4/2026
console.log(date2.toLocaleString()); // 18/4/2026, 5:03:00 am



//! ===== DATE FROM STRING =====

//* YYYY-MM-DD (month starts from 1)
let date3 = new Date("2023-01-14");

console.log(date3.toLocaleDateString()); // 14/1/2023



//* MM-DD-YYYY (India style)
let date4 = new Date("02-01-2014");

console.log(date4.toLocaleDateString()); // 1/2/2014



//! ===== TIMESTAMP =====

//* Current timestamp (milliseconds since 1970)
let timeStamp = Date.now();

console.log(timeStamp);



//* Convert date → timestamp
console.log(date1.getTime());



//* Convert to seconds (VERY IMPORTANT 🔥)
console.log(Math.floor(Date.now() / 1000));



//! ===== GET DATE VALUES =====

let d = new Date();

//* Year
console.log(d.getFullYear());

//* Month (0-based → add +1)
console.log(d.getMonth() + 1);

//* Date
console.log(d.getDate());

//* Other useful methods
d.getDay();      // day of week
d.getHours();    // hour
d.getMinutes();  // minutes



//! ===== CUSTOM FORMATTING =====

//* Using toLocaleString with options
let today = new Date();

today.toLocaleString('default', {
  weekday: "long",
});

//* Full format example
today.toLocaleString('default', {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
});

//👉 Example output:
// Wednesday, March 18, 2026



//! ===== FUTURE (IMPORTANT INSIGHT) =====

//* JS Date API has issues
//* New API coming → Temporal

// Example:
// Temporal.now.instant();



//! ===== FINAL SUMMARY =====

//* Date stores time in milliseconds
//* Base time = 1970 (Unix epoch)
//* Date is an object
//* Month starts from 0 (⚠️ remember)



//! ===== GOLDEN TIPS =====

//* Use Date.now() → current timestamp
//* Use getTime() → date to ms
//* Use toLocaleString() → UI formatting
//* Use Math.floor(Date.now()/1000) → seconds
//* Always handle month carefully