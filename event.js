let countriesInfo = [{
	name: "India",
	population: " 1,394,975,829",
	region: "Asia",
	flag:"https://upload.wikimedia.org/wikipedia/commons/7/7b/India_flag_300.png",capital: "New delhi"
},

{
	name: "Germany",
	population: "81,770,900",region: "Europe",
	flag:"https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png",
	capital: "Berlin"},
{	
	name: "United states",
	population: "323,947,000",
	region: "Americas",flag:"data:image/png;base64,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",
	capital: "Washington D.C"
},

{
	name: "Brazil",
	population: "206,135,893",
	region: "Americas",
	flag:"https://upload.wikimedia.org/wikipedia/commons/0/01/Brazil_flag_300.png",capital: "Brasilia"
},
{	
	name: "Iceland",
	population: "334,300",
	region: "Europe",
	flag:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Iceland.svg/640px-Flag_of_Iceland.svg.png",capital: "Reykjavik"
}]


const container = document.createElement("div");
container.className = "container";
document.body.append(container);

const row = document.createElement("div");
row.className = "row";

countriesInfo.forEach( country => {
    row.innerHTML += `
        <div class="card col-sm-12 " style="width: 18rem;">
                    <img class="card-img-top" src=${country.flag}>
                    <div class="card-body">
                      <h5 class="card-title">${country.name}</h5>
                      <p class="card-text"><span class="Country-Detail">Population: </span></span><span>${country.population}</span></p>
                      <p class="card-text"><span class="Country-Detail">Region: </span></span><span>${country.region}</span></p>
                      <p class="card-text"><span class="Country-Detail">Capital: </span></span><span>${country.capital}</span></p>
        </div>  
`
} )
container.append(row)