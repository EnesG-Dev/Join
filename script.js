const BASE_URL = 'https://join-cf048-default-rtdb.europe-west1.firebasedatabase.app/';

async function init(html) {
    renderNavBar(html);
    renderHeader();
    // await getIdFromDb('contacts', 'name', 'Finn Taylor');
}

function renderNavBar(html) {
    document.getElementById('navBar').innerHTML = navbarTemplate();
    removeActiveLink('.nav-links a', 'nav-active');
    document.getElementById(`${html}Link`).classList.add('nav-active');
}

function removeActiveLink(selectElements, className) {
    document.querySelectorAll(selectElements).forEach(element => {
        if (element.classList.contains(className)) {
          element.classList.remove(className);
        }
    });
}

function renderHeader() {
    document.getElementById('header').innerHTML = returnHeaderHtml();
}

async function getData(path='') {
    let response = await fetch(BASE_URL + path + '.json');
    let responseToJson = await response.json();
    return responseToJson;
}

async function postData(path='', data={}) {
    let response = await fetch(BASE_URL + path + '.json', {
        method: 'post',
        header: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
    let responseToJson = await response.json();
    return responseToJson;
}

async function deleteData(path='') {
    let response = await fetch(BASE_URL + path + '.json', {
        method: 'DELETE',
    });
    let responseToJson = await response.json();
    return responseToJson;
}

async function putData(path='', data={}) {
    let response = await fetch(BASE_URL + path + '.json', {
        method: 'PUT', /* or PATCH  || !!PATCH funktioniert nicht mit firebase */
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
    let responseToJson = await response.json();
    return responseToJson;
}

/**
 * 
 * @param {string} path 
 * @param {string} key 
 * @param {string} includeValue 
 * @returns string
 */
async function getIdFromDb(path, key, includeValue) {
    let contactsPath = await getData(path);

    let allEntiesArr = Object.entries(contactsPath);
    let searchElement = allEntiesArr.filter(element => element[1][key] == includeValue);
    let searchId = searchElement[0][0];
    return searchId;
}
