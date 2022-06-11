const detailWrapper = document.querySelector(".hero-info");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);


const url = "https://akabab.github.io/superhero-api/api/id/" + id + ".json";

console.log(url)


async function fetchHero() {
    
    try {
        const response = await fetch(url);
        
        const details = await response.json();

        console.log(details);

        createHTML(details);

    }
    catch(error) {
        console.log(error);
        detailWrapper.innerHTML = message("error", error);
    }

}

fetchHero();

function createHTML(details) {
    detailWrapper.innerHTML = `<div class="hero-info"><h1>${details.name}<h1>
    <h3>Powerstats:</h3>
    <p>Intelligence: ${details.powerstats.intelligence}</p>
    <p>Strength: ${details.powerstats.strength}</p>
    <p>Speed: ${details.powerstats.speed}</p>
    <h4>Alignment: ${details.biography.alignment}</h4>
    <h4>Occupation: ${details.work.occupation}</h4>
    <h4>Race: ${details.appearance.race}</h4>
    </div>
    <div><img src="${details.images.md}" /></div>`
    
}