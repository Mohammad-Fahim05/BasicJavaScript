//! =====================================================
//! ===== DOM RELATIONS + CREATION (COMPLETE NOTES) =====
//! =====================================================


//! ===== 1. BIG IDEA =====

//* This part is about:
//* → DOM relationships
//* → Traversing (moving in DOM)
//* → Creating elements

//* Important:
//* DOM strong → React easy



/* ===================================================== */
//! ===== 2. DOM TREE CONCEPT =====

// <div class="parent">
//   <div class="day">Monday</div>
//   <div class="day">Tuesday</div>
//   <div class="day">Wednesday</div>
//   <div class="day">Thursday</div>
// </div>


//? Think like family:

//* parent → outer div
//* child → inner divs
//* siblings → same level



/* ===================================================== */
//! ===== 3. SELECT PARENT =====

const parent = document.querySelector(".parent");


//? Output:
// <div class="parent">...</div>



/* ===================================================== */
//! ===== 4. GET CHILDREN =====

parent.children;


//? Output:
// HTMLCollection(4) [div.day, div.day, div.day, div.day]


//? Important:
//* Looks like array
//* But NOT array



//! ===== ACCESS CHILD =====

parent.children[0].innerHTML;


//? Output:
// "Monday"



/* ===================================================== */
//! ===== 5. LOOP CHILDREN =====

for (let i = 0; i < parent.children.length; i++) {
  console.log(parent.children[i].innerHTML);
}


//? Output:
// Monday
// Tuesday
// Wednesday
// Thursday



/* ===================================================== */
//! ===== 6. CHANGE STYLE =====

parent.children[0].style.color = "orange";


//? Output:
// First child becomes orange



/* ===================================================== */
//! ===== 7. SPECIAL PROPERTIES =====

//* First child
parent.firstElementChild;


//? Output:
// <div class="day">Monday</div>


//* Last child
parent.lastElementChild;


//? Output:
// <div class="day">Thursday</div>



/* ===================================================== */
//! ===== 8. CHILD → PARENT =====

const dayOne = document.querySelector(".day");

dayOne.parentElement;


//? Output:
// <div class="parent">...</div>


//? Concept:
//* Move upward in DOM



/* ===================================================== */
//! ===== 9. SIBLING =====

dayOne.nextElementSibling;


//? Output:
// <div class="day">Tuesday</div>


//? Concept:
//* Move sideways



/* ===================================================== */
//! ===== 10. DOM TRAVERSAL =====

//* Down → children
//* Up → parent
//* Side → sibling



/* ===================================================== */
//! ===== 11. childNodes (VERY IMPORTANT) =====

parent.childNodes;


//? Output (example):
// NodeList(9)


//? Why more than 4?

//* Because includes:
//* → text nodes (spaces, line breaks)
//* → comments
//* → elements



//! ===== KEY DIFFERENCE =====

//* children → only elements
//* childNodes → everything



/* ===================================================== */
//! ===== 12. CREATE ELEMENT =====

const div = document.createElement("div");


//? Output:
// <div></div>


//? Important:
//* Only created in memory
//* Not visible yet



/* ===================================================== */
//! ===== 13. ADD PROPERTIES =====

div.className = "myDiv";
div.id = "myId";


//? Output:
// <div class="myDiv" id="myId"></div>


//* Random ID
div.id = Math.round(Math.random() * 10 + 1);



/* ===================================================== */
//! ===== 14. ADD ATTRIBUTE =====

div.setAttribute("title", "generated title");


//? Output:
// title="generated title"



/* ===================================================== */
//! ===== 15. ADD STYLE =====

div.style.backgroundColor = "green";
div.style.padding = "12px";


//? Output:
// Styled div (not visible yet)



/* ===================================================== */
//! ===== 16. ADD CONTENT =====


//* Method 1
div.innerText = "Chai aur Code";


//? Output:
// <div>Chai aur Code</div>


//* Method 2 (better)
const text = document.createTextNode("Chai aur Code");

div.appendChild(text);


//? Output:
// Same result


//? Why better:
//* More optimized
//* Less DOM manipulation



/* ===================================================== */
//! ===== 17. FINAL STEP (IMPORTANT) =====

//* Add to page

document.body.appendChild(div);


//? Output:
// Div appears on webpage



/* ===================================================== */
//! ===== 18. FULL FLOW =====

//* Step 1 → create element
//* Step 2 → add attributes
//* Step 3 → add content
//* Step 4 → style
//* Step 5 → attach to DOM



/* ===================================================== */
//! ===== 19. REAL WORLD THINKING =====

//* Data from API/database
//* Create elements
//* Show on page



/* ===================================================== */
//! ===== 20. FINAL SUMMARY =====

//* DOM = tree
//* children → down
//* parent → up
//* sibling → side
//* createElement → new element
//* appendChild → add to page



/* ===================================================== */
//! ===== 21. ONE LINE 🎯 =====

//* "DOM is a tree, JS lets you move and modify it"



/* ===================================================== */
//! ===== MEMORY TRICK 🧠 =====

//* Tree 🌳

//* Down → children
//* Up → parent
//* Side → sibling