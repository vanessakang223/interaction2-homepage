window.addEventListener('DOMContentLoaded', () => {
  const categoryFilter = document.getElementById('category-filter');
  const cupcakeContainer = document.getElementById('cupcake-container');

  categoryFilter.addEventListener('change', filterCupcakes);

  fetch('cupcakes.json')
    .then(response => response.json())
    .then(data => {
      const flavors = data.flavors;
      renderCupcakes(flavors);

      function renderCupcakes(flavors) {
        cupcakeContainer.innerHTML = '';

        flavors.forEach(flavor => {
          const cupcakeElement = document.createElement('div');
          cupcakeElement.className = 'cupcake';

          const imgElement = document.createElement('img');
          imgElement.src = flavor.image;
          imgElement.alt = flavor.name;

          const nameElement = document.createElement('h3');
          nameElement.textContent = flavor.name;

          cupcakeElement.appendChild(imgElement);
          cupcakeElement.appendChild(nameElement);
          cupcakeContainer.appendChild(cupcakeElement);
        });
      }

      function filterCupcakes() {
        const selectedCategory = categoryFilter.value;

        flavors.forEach(flavor => {
          const cupcakeElement = document.querySelector(`[alt="${flavor.name}"]`);
          const categoryMatch = flavor.category === selectedCategory || selectedCategory === 'all';

          if (categoryMatch) {
            cupcakeElement.classList.remove('hidden');
          } else {
            cupcakeElement.classList.add('hidden');
          }
        });
      }
    })
    .catch(error => console.error('Error fetching cupcake data:', error));
});
