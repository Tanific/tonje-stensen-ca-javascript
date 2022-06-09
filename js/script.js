const container = document.querySelector(".container");


const url = "https://akabab.github.io/superhero-api/api/all.json";

async function callApi() {

    try {
        const response = await fetch(url);
        const results = await response.json();

        console.log(results);

        container.innerHTML = "";

        for(let i = 0; i < results.length; i++) {

            container.innerHTML += `<a href="details.html?id=${results[i].id}"<div class="hero">
            <h4>${results[i].name}</h4>
            <img src="${results[i].images.md}" />
            </div></a>`;
        }

    }
    catch (error) {
        console.log(error);
        container.innerHTML = message("error", error);
    }

}

callApi();


