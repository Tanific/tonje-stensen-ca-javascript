const container = document.querySelector(".container");


const url = "https://www.superheroapi.com/api.php/1214716615946231/";

async function callApi(id) {
    const response = await fetch(url+id);
    const json = await response.json();

    console.log(json);

    container.innerHTML += `<div class="hero-intro"><h3>${json.name}</h3>
                            <img src="${json.image.url}" alt="image of superhero"></img></div>`         
}

callApi(69);
callApi(720);
callApi(346);

