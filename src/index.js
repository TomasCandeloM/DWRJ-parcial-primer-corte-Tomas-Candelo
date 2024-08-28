import RickAndMortyService from './service.js';


const service = new RickAndMortyService();

// acá deberás crear una instancia del servicio RickAndMortyService
// const service = new RickAndMortyService();

// esta función debe encargarse de obtener el elemento contenedor
// y agregar los personajes obtenidos por el API, deberás llamar tu función getAllCharacters
// iterar el arreglo de personajes y llamar a la función createCharacterCard para agregar cada personaje
// a el contenedor puedes usar la propiedad innerHTML para esto


async function createCharacterList() {
    const app = document.querySelector('.characters-list');

    const data = await service.getAllCharacters();

    data.forEach(character => {
        console.log(character);
        const characterCard = createCharacterCard(character);
        app.innerHTML += characterCard
        addCharacterListeners(character);
    });

    
}

// esta función debe devolver la estructura html en string de tu personaje ejemplo

// `<div class="character">
//      <span>${gender}</span>
//      <span>${name}</span>
// </div>`;

// deberás usar los elementos correctos de HTML para poder visualizar el personaje


function createCharacterCard(character) {
    var status = "ALive";
    if(character.status === "Dead"){
        status = "Dead";
    } else if(character.status === "unknown"){
        status = "Unknown";
    }

    return `
    <div class="character-card">
        <img src="${character.image}" alt="${character.name}" class="character-image">
        <div class="character-info">
            <div class="character-status">  
                <h3>${character.name}</h3>
                <div class="characteristic">
                    <img class="characteristic-icon" src="./assets/live.svg" id="${status}" alt="status">
                    <span>${character.status}</span>
                </div>
                <div class="characteristic">
                    <img class="characteristic-icon" src="./assets/race.svg" alt="species">
                    <span>${character.species}</span>
                </div>
                <div class="characteristic">
                    <img class="characteristic-icon" src="./assets/planet.svg" alt="location">
                    <span>${character.location}</span>
                </div>
            </div>
            <img src="./assets/heart.svg" data-name="${character.name}" id="${character.name}" class = "heart-icon">
        </div>
        
    </div>
    `  

}

// esta función deberá obtener todos los personajes y deberá agregarles un evento de click en el icono de corazon
// cuando se haga click al icono de corazon aparecer una alerta con un mensaje 
// que diga Hola soy (nombre personaje), recuerda que puedes obtener
// el elemento target de un evento y así obtener sus propiedades

function addCharacterListeners(character) {
    const heart = document.querySelectorAll(".heart-icon");

    heart.forEach((icon) => {
        icon.addEventListener("click", (event) => {
            const character = event.target.id;
            alert(`Hola soy ${character}`);
        });
    });
}


// por último se llama la función y se renderiza la vista
createCharacterList();
