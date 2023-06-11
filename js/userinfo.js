const startBtn = document.querySelector("#startBtn");
const loginForm = document.querySelector("#login-form");
const inputName = document.querySelector("#inputName");
const inputDambae = document.querySelector("#inputDambae");
const savedUsername = localStorage.getItem("username");
const timerdiv = document.querySelector("#timerdiv");
const firstDiv = document.querySelector("#firstDiv");

const HIDDEN_CLASSNAME = "hidden";

function onClickBtn() {
    startBtn.classList.add("hidden");
    loginForm.classList.remove("hidden");
    startBtn.remove();
}

function onSubmitInput(event) {

    event.preventDefault();
    localStorage.setItem("username", inputName.value);
    localStorage.setItem("dambae", inputDambae.value);
    loginForm.classList.add("hidden");
    timerdiv.classList.remove("hidden");
    wishbtn.classList.remove("hidden");
    timerdiv.classList.add("fadein_animation");
    firstDiv.remove();
    localStorage.setItem("time", Date.now());


}


/* 정보 저장후에 사라져야 하는것들 */
if(savedUsername)  
{
    startBtn.classList.add("hidden");
    loginForm.classList.add("hidden");
    timerdiv.classList.remove("hidden");
    wishbtn.classList.remove("hidden");
    timerdiv.classList.add("fadein_animation");
    firstDiv.remove();
}

startBtn.addEventListener("click", onClickBtn);
loginForm.addEventListener("submit", onSubmitInput);