/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

const showUsersBtn = document.querySelector('#btn');
const removeP = document.querySelector('#message');
const usersOutput = document.querySelector('#output');

showUsersBtn.addEventListener('click', () => {
    getUsers();

    removeP.remove();
});

const getUsers = () => {
    const response = fetch(`${ENDPOINT}`);

    response
      .then((res) => res.json())
      .then((data) => {

        const ulElement = document.createElement('ul');
        data.forEach((userData) => {
            const liElement = document.createElement('li');
            liElement.textContent = `${userData.login} ---- ${userData.avatar_url}`;
            ulElement.append(liElement);
        });

        usersOutput.append(ulElement);
      });
};