var Airtable = require("airtable");
var base = new Airtable({
  apiKey: "keyl2iV6J5PBNstqT",
}).base("appUOw6ifi8PTXwPT");

let main = document.querySelector("#main");


let dataParent = document.createElement("div");
let image = document.createElement("img");
let name = document.createElement("h2");
let creator = document.createElement("h3");
let year = document.createElement("p");
let description = document.createElement("p");
let type = document.createElement("p");

name.classList.add("name");

let path = window.location.pathname;
let filename = path.split("/").pop();



base("square")
  .select({
    // Selecting the first 5 records in Grid view:
    maxRecords: 50,
    view: "Grid view",
  })

  
  .eachPage(
    function page(records, fetchNextPage) {
        console.log(records);

        for(let i=0; i<records.length; i++){
            if(filename===records[i].fields.file){
                image.src=records[i].fields.Assets[0].url
                name.innerHTML=records[i].fields.Name;
            }
        }

    }
  )
  dataParent.append(name);
  main.append(image, dataParent);
  main.append(creator, dataParent);

