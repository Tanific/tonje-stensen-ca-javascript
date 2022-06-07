const container = document.querySelector(".container");


const url = "https://www.superheroapi.com/api.php/1214716615946231/search/man";

async function callApi() {
    const response = await fetch(url);
    const json = await response.json();

    console.log(json);

    const results = json.results

    results.forEach(function (result) {
        container.innerHTML += `<a href="details.html?id=${json.results.id}"<div class="hero">
        <h4>${result.name}</h4>
        <img src="${result.image.url}" />
        </div></a>`;
    })


}

callApi();


