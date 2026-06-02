// Retrieve the form from the dom
const form = document.querySelector("#fsyForm");

// Add event listener for when someone press someone press submit
form.addEventListener("submit", event => {
    // Grab the values from the form before they go to the query parameters
    event.preventDefault();
    console.log(event);
    console.log(form.firstName.value);
    console.log(form.lastName.value);
    console.log(form.email.value);
});