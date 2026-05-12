let menuBtn = document.getElementsByClassName("menu-btn")[0];
console.log(menuBtn);


function handleMenuBtnClick(event) {
    // Grab nav tag and toggle hide class
    let nav = document.querySelector("nav");
    nav.classList.toggle("hide")
}

menuBtn.addEventListener("click", handleMenuBtnClick);