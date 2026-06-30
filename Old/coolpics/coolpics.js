let menuBtn = document.getElementsByClassName("menu-btn")[0];

function handleMenuBtnClick(event) {
    // Grab nav tag and toggle hide class
    let nav = document.querySelector("nav");
    let header = document.querySelector("header");
    nav.classList.toggle("hide")
    if (header.style.height === "17vh") {
        header.style.height = "15vh";
    } else {
        header.style.height = "17vh";
    }
}

menuBtn.addEventListener("click", handleMenuBtnClick);

const gallery = document.querySelector('.gallery');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

// Event listener for opening the modal
gallery.addEventListener('click', openModal);

function openModal(e) { 
// Code to show modal  - Use event parameter 'e'   
    modalImage.src = e.target.src.replace("sm", "full");
    modal.showModal();
}
// Close modal on button click
closeButton.addEventListener('click', () => {
    modal.close();
});

// Close modal if clicking outside the image
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});