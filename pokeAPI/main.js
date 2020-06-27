// Created by: Vince Chang

const apiData = {
  url: 'https://pokeapi.co/api/v2/',
  type: 'pokemon',
  id: '25'
}

// Temperate literal for ES6 (Non-readable way)
// const apiUrl = `${apiData.url}${apiData.type}/${apiData.id}`
// console.log(apiUrl); // https://pokeapi.co/api/v2/pokemon/25

// Deconstructing, (preferred readable way)
const { url, type, id } = apiData
const apiUrl = `${url}${type}/${id}`
console.log(apiUrl); // https://pokeapi.co/api/v2/pokemon/25

// Use fetch() to get the api data, fetch() returns an Promise
// data is the data that is obtained from this api call, which in this case will
// be in JSON format
fetch(apiUrl)
  .then((data) => data.json())
  .then((pokemon) => generateHtml(pokemon))


const generateHtml = (data) => {
  console.log(data);
  const html = `
    <div class="name">${data.name}</div>
    <img src=${data.sprites.front_default}>
    <div class="details">
      <span>Height: ${data.height}</span>
      <span>Weight: ${data.weight}</span>
    </div>
  `

  // Get the pokemon div so I can drop this HTML in there
  const pokemonDiv = document.querySelector('.pokemon')
  pokemonDiv.innerHTML = html;
}