'use strict'; //Activamos el modo estricto de javascript para no cometer errores

//accedemos a la url de la API y la guardamos en la constante llamada urlAPI
const urlApi = 'https://jsonplaceholder.typicode.com';
//Enlazamos el elemento del DOM que tiene el id="app" con la constante HTMLResponse
const HTMLResponse = document.querySelector('#app');
//Creamos un elemento html en el DOM y lo guardamos como ul
const ul = document.createElement('ul');

// Accedemos a la url mediante el método fetch
// El método fetch() toma un argumento obligatorio, la ruta de acceso al recurso que desea recuperar.
fetch(`${urlApi}/users`)
// Devuelve una Promise que resuelve en Response a esa petición, sea o no correcta. 
    // Luego convertimos la promesa en un objeto json
    .then((response) => response.json())
    //Luego llamamos al objeto users y lo recorremos mediante el método forEach
    .then((users) => {
        users.forEach((user) => {
            //Creamos una etiqueta li
            let li = document.createElement('li');
            //Le anexamos un nuevo nodo de tipo texto para que muestre la información
            li.appendChild(
                document.createTextNode(`Usuario: ${user.name}; Email: ${user.email}`)
            );
            //Y añadimos a li como hijo de ul
            ul.appendChild(li)
        });

        //Llamamos a HTMLResponse (creado previamente) y le adjuntamos a ul como hijo para que se muestre todo en el navegador.
        HTMLResponse.appendChild(ul);
    })