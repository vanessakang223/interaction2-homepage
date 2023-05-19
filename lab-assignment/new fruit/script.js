document.addEventListener('DOMContentLoaded', () => {
  const gallery = document.getElementById('gallery');
  const popup = document.getElementById('popup');
  const closeBtn = document.querySelector('.close-btn');
  const fruitName = document.getElementById('fruit-name');
  const fruitColor = document.getElementById('fruit-color');
  const fruitSize = document.getElementById('fruit-size');
  const addToBasketLink = document.getElementById('add-to-basket');

  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      const fruits = data.fruits;
      renderGallery(fruits);

      function renderGallery(fruits) {
        fruits.forEach((fruit, index) => {
          const imgElement = document.createElement('img');
          imgElement.src = fruit.image;
          imgElement.alt = fruit.name;
          imgElement.dataset.index = index;

          imgElement.addEventListener('click', () => {
            displayPopup(fruit);
          });

          gallery.appendChild(imgElement);
        });
      }

      function displayPopup(fruit) {
        fruitName.textContent = fruit.name;
        fruitColor.textContent = `Color: ${fruit.color}`;
        fruitSize.textContent = `Size: ${fruit.size}`;

        addToBasketLink.addEventListener('click', (event) => {
          event.preventDefault();
          addToBasket(fruit);
        });

        popup.classList.add('show');
      }

      closeBtn.addEventListener('click', () => {
        popup.classList.remove('show');
      });

      // Change the active image on gallery scroll
      gallery.addEventListener('scroll', () => {
        const images = Array.from(gallery.getElementsByTagName('img'));
        const galleryWidth = gallery.offsetWidth;
        const scrollLeft = gallery.scrollLeft;

        images.forEach(img => {
          const imgOffset = img.offsetLeft - scrollLeft;
          const imgCenter = imgOffset + img.offsetWidth / 2;
          const isActive = Math.abs(galleryWidth / 2 - imgCenter) < img.offsetWidth / 2;
          img.classList.toggle('active', isActive);
        });
      });

      function addToBasket(fruit) {
        // Implement your logic to add the fruit to the basket
        console.log('Added to Basket:', fruit.name);
      }
    })
    .catch(error => console.error('Error fetching fruit data:', error));
});
