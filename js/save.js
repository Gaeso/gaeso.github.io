const saveMoney = document.querySelector("#saveMoney");
const saveLife = document.querySelector("#saveLife");
const tobacco = document.querySelector("#tobacco");
function onSaveMoney() {
    const money = day * localStorage.getItem("dambae") * 225;
    const life = day * localStorage.getItem("dambae") * 5;
    const ciga = day * localStorage.getItem("dambae");
    
    saveMoney.innerText = `${money}원`;
    saveLife.innerText = `${life}분`;
    tobacco.innerText = `${ciga}개`;
}

onSaveMoney();
setInterval(onSaveMoney,1000);

