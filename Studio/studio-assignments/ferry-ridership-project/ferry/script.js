let filterButtons=document.querySelector(".filters");
// Function to render your items



let rockaway = document.querySelector('#rockaway');
let sunsetPark = document.querySelector('#sunsetPark');
let east90thSt = document.querySelector('#east90thSt');
let brooklynNavyYard = document.querySelector('#brooklynNavyYard');
let date20210701 = document.querySelector('#date20210701');
let date20210702 = document.querySelector('#date20210702');
let date20210703 = document.querySelector('#date20210703');
let date20210704 = document.querySelector('#date20210704');

 //create buttons for all filters [stops]
function filterItems(collection) {
  collection.forEach(item => {
    // let button=document.createElement("div");
    // button.innerHTML=item.stop;
    // filterButtons.appendChild(button);
    let showItem = document.querySelector('.showItem');
    let ticketImg = document.createElement("img");
    ticketImg.classList.add("image");
    ticketImg.src = item.img;
    ticketImg.style.left = (20+75*Math.random())+'%';
    ticketImg.style.top=(5+300*Math.random()) +'%';
    showItem.appendChild(ticketImg);
    //add event listener to all the buttons 
    // let filteredItem;

    rockaway.addEventListener("click", function(){
          if(item.stop === "Rockaway"){
            ticketImg.style.display = "block";
            ticketImg.style.left = (20+75*Math.random())+'%';
            ticketImg.style.top=(5+80*Math.random()) +'%';
          }else{
            ticketImg.style.display = "none";

          }
        })



    sunsetPark.addEventListener("click", function(){
          if(item.stop === "Sunset Park/BAT"){
            ticketImg.style.display = "block";
          }else{
            ticketImg.style.display = "none";

          }
    })
    east90thSt.addEventListener("click", function(){
      if(item.stop === "East 90th St"){
        ticketImg.style.display = "block";
      }else{
        ticketImg.style.display = "none";

      }
  })
    brooklynNavyYard.addEventListener("click", function(){
      if(item.stop === "Brooklyn Navy Yard"){
        ticketImg.style.display = "block";
      }else{
        ticketImg.style.display = "none";

      }
  })

    east34thStreet.addEventListener("click", function(){
      if(item.stop === "East 34th Street"){
        ticketImg.style.display = "block";
      }else{
        ticketImg.style.display = "none";

      }
  })

  soundview.addEventListener("click", function(){
    if(item.stop === "Soundview"){
      ticketImg.style.display = "block";
    }else{
      ticketImg.style.display = "none";

    }
})

rockaway.addEventListener("click", function(){
  if(item.stop === "Rockaway"){
    ticketImg.style.display = "block";
  }else{
    ticketImg.style.display = "none";

  }
})
date20210701.addEventListener("click", function(){
  if(item.date === "2021-01-07"){
    ticketImg.style.display = "block";
  }else{
    ticketImg.style.display = "none";

  }
})
    
    
  })
}



function updateFilteredItems(item){
  showItem = document.querySelector('.showItem');
  let ticketImg = document.createElement("img");
  ticketImg.src = item.img;
  // showItem.appendChild(ticketImg);
}
  

  // Fetch gets your JSON file.
  fetch("./ferrydata.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (collection) {
      // And passes the data to the function, above!
      // renderItems(collection.reverse()); // In reverse order
      filterItems(collection)
    });

     
   
    //add event listener to all the buttons 
    //every time you click a button, filters based off stops 
    //filtering:
    //if the stop=rockaway
      //only shows rockaway tag 
    // repeat for all filters 

  