console.log("Hello rick and morty");

/*

Tarea Nº7
Consumir el siguiente endpoint https://rickandmortyapi.com/api/character y realizar
lo siguiente:
1. Crear cards con la información de Nombre, Especie e Imagen
2. Debe utilizar el paradigma de orientación a objetos
3. Debe realizar una clase con la información necesaria (nombre, especie e
imagen) y protegerlo con getters.
4. Debe realizar un método llamado .show() que debe inyectar en el DOM las cards
con la data necesaria.
5. Debe inyectar al menos 20 personajes
Opcional: usar bootstrap u otro framework de CSS para darle estilos
Crear un repositorio en GitHub y enviarlo en el siguiente formulario:
softwarelibrechile.cl/tarea-7



taea webpack
tarea babel

*/

import Comic from "./class.js";

const cards = document.getElementById("cards");

const getRicAndkMorty = (async () => {
  try {
    const URL = "https://rickandmortyapi.com/api/character/";
    const request = await fetch(URL);
    const data = await request.json();
    console.log(data);
    iterarApi(data);
  } catch (error) {
    console.error(error);
  }
})();

const iterarApi = (dat) => {
  dat.results.forEach((personajes) => {
    const personajesApi = new Comic(
      personajes.name,
      personajes.species,
      personajes.image
    );
    personajesApi.show(cards);
  });
};

/*


// sin el paradigma de orientación a objetos


const getRicAndkMorty = async () => {
  try {
    const URL = await fetch("https://rickandmortyapi.com/api/character/");
    const datos = await URL.json();
    console.log(datos);
    iterarApi(datos);
  } catch (error) {
    console.log(error);
  }
};

const iterarApi = (datos) => {
  datos.results.forEach((element) => {
    cards.innerHTML += `<article class="card text-center shadow col-12 col-md-6 col-lg-3 mt-2">
        <img src="${element.image}" class="card-img-top" alt="${element.name}">
        <div class="card-body">
        <h3 class="card-text">${element.name}</h3>
        <p class="card-text">${element.species}</p>
        </div>
        </article>
        `;
  });
};
getRicAndkMorty();
*/
