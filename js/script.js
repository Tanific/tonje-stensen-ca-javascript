const container = document.querySelector(".container");


const url = "https://www.superheroapi.com/api.php/1214716615946231/69";

async function callApi() {
    const response = await fetch(url);
    const json = await response.json();

    console.log(json);

    container.innerHTML = `<h1>${json.name}</h1>
                            <div class="details-image" style="background-image: url('${json.image.url}')"></div>    
                            <div class="description">${json.appearance.gender}</div>`                 
}
   


callApi();
