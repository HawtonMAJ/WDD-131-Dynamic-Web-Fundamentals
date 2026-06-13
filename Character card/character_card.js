const attackBtn = document.querySelector("#attackButton")
const levelBtn = document.querySelector("#levelButton")
const health = document.querySelector("#health")
const level = document.querySelector("#level")
let healthAmount = parseInt(health.textContent)
let levelAmount = parseInt(level.textContent)

attackBtn.addEventListener("click", () => {
    healthAmount -= 20;
    health.textContent = healthAmount;
})

levelBtn.addEventListener("click", () => {
    levelAmount += 1;
    level.textContent = levelAmount;
})