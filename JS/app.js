const body = document.getElementById("main");
const selection = document.getElementById("selectCharacter");
const AllCharacters = document.getElementById('AllCharacters');

// api rick and morty
const URL = "https://rickandmortyapi.com/api/character/";

selection.addEventListener("change", Fetch);

List_Characters();
function List_Characters() {
 fetch(URL)
  .then((response) => response.json())
  .then((data) => {
   return data.results.map((card) => {
    const character = document.createElement("option");
    character.value = card.name;
    character.textContent = card.name;
    character.setAttribute("id", card.id);
    selection.appendChild(character);
    return card;
   });
  });
}

function Fetch() {
  const character = selection.value;
 fetch(URL)
  .then((response) => response.json())
  .then((data) => {
    if( character === AllCharacters.value) {
      body.innerHTML = '';
      return data.results.map(element => {create_card(element)})}
    else {return data.results.map(element => {if (element.name === character) { body.innerHTML = '';create_card(element)}
      })
    }        
  })
}
    



function create_card(data) {

 const card = document.createElement('div');
 const name = document.createElement('h2'); 
 const genero = document.createElement('p'); 
 const image_card = document.createElement('img');

 card.setAttribute('id','card');
 name.setAttribute('id','name');
 genero.setAttribute('id','genero');
 image_card.setAttribute('id','image');

 name.textContent = data.name;
 image_card.setAttribute("id", data.id);
 image_card.setAttribute("src", data.image);
 image_card.setAttribute("alt", data.name);
 genero.textContent = data.gender;
 card.appendChild(image_card);
 card.appendChild(name);
 card.appendChild(genero);
 body.appendChild(card); 
}