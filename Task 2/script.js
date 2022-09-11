/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */

const increaseButton = document.getElementById('btn__element');
const counter = document.querySelector('#btn__state');

let count = 1;

increaseButton.addEventListener('click', () => {
    counter.innerHTML = count++;
});