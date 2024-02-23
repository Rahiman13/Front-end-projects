// Select the HTML elements
const button = document.getElementById("myButton");
const input = document.getElementById("myInput");

// Define a function to handle the button click event
function handleButtonClick() {
  alert("Button was clicked!");
}

// Add the event listener for the button click event
button.addEventListener("click", handleButtonClick);

// Define a function to handle the input change event
function handleInputChange() {
  console.log(`Input value changed to: ${input.value}`);
}

// Add the event listener for the input change event
input.addEventListener("input", handleInputChange);

// Optionally, you can remove an event listener using the removeEventListener method
// button.removeEventListener("click", handleButtonClick);

button.addEventListener("click", function() {
    console.log("Button was clicked (handler 1)");
  });
  
  button.addEventListener("click", function() {
    console.log("Button was clicked (handler 2)");
  });