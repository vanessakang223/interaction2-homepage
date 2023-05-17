 // Fetch fruit data from JSON
 fetch('fruits.json')
 .then(response => response.json())
 .then(data => {
   const fruits = data.fruits;
   renderFruits(fruits);

   function renderFruits(fruits) {
     fruitContainer.innerHTML = '';

     fruits.forEach(fruit => {
       const fruitElement = document.createElement('div');
       fruitElement.className = `fruit ${fruit.color} ${fruit.size}`;
       const imgElement = document.createElement('img');
       imgElement.src = fruit.image;
       imgElement.alt = fruit.name;
       fruitElement.appendChild(imgElement);
       fruitContainer.appendChild(fruitElement);
     });
   }

   function filterFruits() {
     const selectedColor = colorFilter.value;
     const selectedSize = sizeFilter.value;

     const filteredFruits = fruits.filter(fruit => {
       const fruitColor = fruit.color === selectedColor || selectedColor === 'all';
       const fruitSize = fruit.size === selectedSize || selectedSize === 'all';

       return fruitColor && fruitSize;
     });

     renderFruits(filteredFruits);
   }
 })
 .catch(error => console.error('Error fetching fruit data:', error));
});