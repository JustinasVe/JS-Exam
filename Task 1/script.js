/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

const formElement = document.querySelector('form');
const userInput = document.querySelector('#search');
const outputToUser = document.querySelector('#output');

userInput.setAttribute('type', 'number');

formElement.addEventListener('submit', (event) => {
    let svarai = userInput.value * 2.2046;
    let gramai = userInput.value / 0.0010000;
    let uncijos = userInput.value * 35.274;
    let divSvarai = document.createElement('div');
    let divGramai = document.createElement('div');
    let divUncijos = document.createElement('div');
    divGramai.textContent = `Gramai (g): ${gramai}`;
    divSvarai.textContent = `Svarai (lb): ${svarai}`;
    divUncijos.textContent = `Uncijos (oz): ${uncijos}`;
    outputToUser.appendChild(divSvarai);
    outputToUser.appendChild(divGramai);
    outputToUser.appendChild(divUncijos);
    event.preventDefault();
});

