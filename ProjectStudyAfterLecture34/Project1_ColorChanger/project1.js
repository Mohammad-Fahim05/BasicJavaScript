// Step 1: Select Elements
// We need:
// All buttons
// Body (to change color)
const buttons = document.querySelectorAll(".button")   //querySelectorAll → selects all elements (NodeList)
// console.log(buttons)
const body = document.querySelector('body')    // body → we will change its background


// Loop through buttons    :  Because we have multiple buttons, we handle each one.
buttons.forEach (function(button){
    console.log(button)
    //Add Event Listener  :  User clicks → event fires → function runs
    button.addEventListener('click', function(e){
        console.log(e);
        // Get which button was clicked
        console.log(e.target);
        const color = e.target.id
        if(color === 'grey'){
            body.style.backgroundColor = e.target.id // this is best way
        }
        if(color === 'brown'){
            body.style.backgroundColor = color
        }
        if(color === 'green'){
            body.style.backgroundColor = "green"
        }
        else if (color === 'blue'){
            body.style.backgroundColor = "blue"
        }
    })

});