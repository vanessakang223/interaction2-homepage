let parent = document.querySelector('#parent');

// Function to render your items
function renderItems(collection) {
    // out put stuff to html page and make data look NICE 
    console.log("data records in your JSON:", collection); 
    // will log something like this: [Record 1 {}, Record 2{}, Record 3{}];
    collection.forEach(
      function getItemProperty(item){
        // you can get specific properties from each of your record, "Borough" is a property found in my JSON
        console.log(item.fruits);
        let fruits= document.createElement("td")
        let row=document.createElement("tr")
        row.classList.add("row")
        fruits.innerHTML=item.fruits;

        let colorOutside= document.createElement("td")
        colorOutside.innerHTML=item.colorOutside;
       
        let size= document.createElement("td")
        size.innerHTML=item.size;

        let flavor= document.createElement("td")
        flavor.innerHTML=item.flavor;


        row.append(fruits, colorOutside, size, flavor)
        parent.append(row)
        console.log(item.colorOutside);
    }); 
  }




  // Fetch gets your JSON file.
  fetch("./data.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (collection) {
      // And passes the data to the function, above!
      renderItems(collection.reverse()); // In reverse order
    });

     

  