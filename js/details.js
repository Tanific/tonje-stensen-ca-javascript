const detailWrapper = document.querySelector(".hero-info");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);


const url = "https://www.superheroapi.com/api.php/1214716615946231/" + id;

console.log(url)

async function fetchHero() {
    const response = await fetch(url);
    const details = await response.json();

    console.log(details);

    createHTML(details);
}

fetchHero();

function createHTML(details) {
    detailWrapper.innerHTML = `<h1>${details.name}<h1>`
}