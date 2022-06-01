const resultsWrapper = document.querySelector(".results");


const url = "https://www.superheroapi.com/api.php/1214716615946231/";

async function callApi(id) {

    console.log(url+id);
    const response = await fetch(url+id);
    const json = await response.json();

    console.log(json);

    for(var property in json.image) {
        console.log(json.image[property])
        resultsWrapper.innerHTML += `<div class="image" style="background-image: url(${json.image[property]});"></div>`
    }

    for(var property in json.appearance) {
        console.log(json.appearance[property])
        resultsWrapper.innerHTML += `<div class="result">${json.appearance[property]}</div>`;
    }

    for(var property in json.powerstats) {
        console.log(json.powerstats[property])
        resultsWrapper.innerHTML += `<div class="result">${json.powerstats[property]}</div>`;
    }
}

callApi(69);
callApi(720);
callApi(644);