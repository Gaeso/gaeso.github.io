const saveMoney = document.querySelector("#saveMoney");
const saveLife = document.querySelector("#saveLife");
const tobacco = document.querySelector("#tobacco");
function onSaveMoney() {
    const money = day * localStorage.getItem("dambae") * 225;
    const life = day * localStorage.getItem("dambae") * 5;
    const ciga = day * localStorage.getItem("dambae");
    
    saveMoney.innerText = `지금까지 아낀돈 : ${money}원`;
    saveLife.innerText = `늘어난 수명 : ${life}분`;
    tobacco.innerText = `안피운 담배 : ${ciga}개`;
}

onSaveMoney();
setInterval(onSaveMoney,1000);

