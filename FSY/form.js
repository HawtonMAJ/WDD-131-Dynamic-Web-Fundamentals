// Retrieve the form from the dom
const form = document.querySelector("#fsyForm");

// Helper function
function getCheckCampi(campi){
    return Array.from(campi)
            .filter(campus => campus.checked)
            .map(campus => campus.value);
}

function isdatevalid() {
    const date = document.getElementById("avaiableDate");
    const todaysDate = new Date();
    return date > todaysDate;
}

// if the user selects one campus but doesnt pick any campus, say "please pick a campus"
form.addEventListener("submit", event =>{
    const numberOfCampi = form.travelRange.value;
    const campi = form.campus;
    if (numberOfCampi === "one" &&
        getCheckCampi(campi).length == 0) {
            console.log("bad job bro")
            document.getElementById("output").textContent = "Please pick on and only one campus por favor"
    }
    if (!isdatevalid()){
        document.getElementById("output").textContent = "Please pick a non time traveling date"
    }
});

// Add event listener for when someone press someone press submit
form.addEventListener("submit", event => {
    // Grab the values from the form before they go to the query parameters
    event.preventDefault();
    console.log(event);
    console.log(form.firstName.value);
    console.log(form.lastName.value);
    console.log(form.email.value);
});