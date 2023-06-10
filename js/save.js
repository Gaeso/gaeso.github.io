const saveMoney = document.querySelector("#saveMoney");
const saveLife = document.querySelector("#saveLife");
const tobacco = document.querySelector("#tobacco");

const money = 20 * localStorage.getItem("dambae") * 225;
const life = 20 * localStorage.getItem("dambae") * 5;
const ciga = 20 * localStorage.getItem("dambae");

saveMoney.innerText = `지금까지 아낀돈 : ${money}원`;
saveLife.innerText = `늘어난 수명 : ${life}분`;
tobacco.innerText = `안피운 담배 : ${ciga}개`;