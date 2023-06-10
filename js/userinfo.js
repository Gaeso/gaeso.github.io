const startBtn = document.querySelector("#startBtn");
const loginForm = document.querySelector("#login-form");
const inputName = document.querySelector("#inputName");
const inputDambae = document.querySelector("#inputDambae");
const savedUsername = localStorage.getItem("username");
const timer = document.querySelector("#timer");

const HIDDEN_CLASSNAME = "hidden";

function onClickBtn() {
    startBtn.classList.add("hidden");
    loginForm.classList.remove("hidden");
}

function onSubmitInput(event) {

    event.preventDefault();
    localStorage.setItem("username", inputName.value);
    localStorage.setItem("dambae", inputDambae.value);
    loginForm.classList.add("hidden");
    timer.classList.remove("hidden");
    localStorage.setItem("time", Date.now());

}

function onSubmitDambae(event) {
    event.preventDefault();
    
}

if(savedUsername)
{
    startBtn.classList.add("hidden");
    loginForm.classList.add("hidden");
    timer.classList.remove("hidden");
}

startBtn.addEventListener("click", onClickBtn);
loginForm.addEventListener("submit", onSubmitInput);