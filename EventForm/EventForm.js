// Retrieve the form from the dom

function isdatevalid() {
    const date = document.getElementById("eventDate");
    const todaysDate = new Date();
    return date > todaysDate;
}

const form = document.querySelector("#eventForm");
const ticketType = document.querySelector("#ticketType");
const studentId = document.querySelector("#studentId");
const accessCode = document.querySelector("#accessCode");
const notes = document.querySelector("#notes");
const output = document.querySelector("#output");

function updateNotesField() {
    const value = ticketType.value;

    if (value === "student") {
        studentId.style.display = "block";
        studentId.toggleAttribute(required);
        accessCode.style.display = "none";
    } 
    if (value === "guest") {
        accessCode.style.display = "block";
        accessCode.toggleAttribute(required);
        studentId.style.display = "none";
    }
    else {
        notesContainer.style.display = "none";
        notes.value = "";
    }
}

ticketType.addEventListener("change", updateNotesField);
updateNotesField();

form.addEventListener("submit", event => {
    form.preventDefault();
})

form.addEventListener("submit", function (event) {
    form.preventDefault();
    // event.preventDefault();
    output.textContent = "";
    
    const firstName = form.firstName.value.trim();
    const lastName = form.lastName.value.trim();
    const email = form.email.value.trim();
    const ticketType = form.ticketType.value;
    const eventDate = form.eventDate.value;
    
    if (!isdatevalid()){
        document.getElementById("output").textContent = "Please pick a non time traveling date";
        return;
    }

  output.innerHTML = `
  <h2>Ticket Submitted</h2>
  <p>${firstName} ${lastName}</p>
  <p>Email: ${email}</p>
  <p>Event Date: ${eventDate}</p>
  <p>Ticket Type: ${ticketType}</p>
  `;
  
  updateNotesField();
});