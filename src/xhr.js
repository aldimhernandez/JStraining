'use strict';

const urlApi = 'https://jsonplaceholder.typicode.com';

const xhr = new XMLHttpRequest();

function manejador() {
    if (this.readyState == 4 && this.status == 200) {
        //0: UNSET; No se llamo al método open.
        //1: OPENED; Se ha llamado al método open.
        //2: HEADERS_RECEIVED; Se esta llamando al método send().
        //3: LOADING; Cargando, recibiendo la respuesta.
        //4: DONE; Se ha completado la operación.
        
        const data = JSON.parse(this.response);
        const HTMLResponse = document.querySelector('#app');
        const tpl = data.map((user) => `<li>${user.name}; ${user.email}</li>`);
        HTMLResponse.innerHTML = `<ul>${tpl}</ul>`;
    }
}

xhr.addEventListener('load', manejador);
xhr.open('GET', `${urlApi}/users`);
xhr.send();