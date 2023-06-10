const clock = document.querySelector("span#clock");

function sayHello() { 
    const date = new Date();
    const hour = String(date.getHours()).padStart(2,"0");
    const min = String(date.getMinutes()).padStart(2,"0");
    const sec = String(date.getSeconds()).padStart(2,"0");

    clock.innerText = `${hour}:${min}:${sec}`;
}

sayHello();
setInterval(sayHello,1000);

