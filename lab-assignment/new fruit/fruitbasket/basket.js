document.addEventListener('DOMContentLoaded', () => {
    const basket = document.getElementById('basket');
  
    // Retrieve  fruit
    const selectedFruit = JSON.parse(localStorage.getItem('selectedFruit'));
  
    if (selectedFruit) {
      const fruitElement = document.createElement('div');
      fruitElement.className = 'fruit';
      fruitElement.innerHTML = `
        <img src="${selectedFruit.image}" alt="${selectedFruit.name}" class="fruit-image">
        <h2 class="fruit-name">${selectedFruit.name}</h2>
        <p class="fruit-color">Color: ${selectedFruit.color}</p>
        <p class="fruit-size">Size: ${selectedFruit.size}</p>
      `;
  
      basket.appendChild(fruitElement);
    }
  });

  // basket.js

// Function to beginn confetti animation
function triggerConfetti() {
  confetti.create(document.getElementById('confetti-container'), {
    resize: true,
    useWorker: true
  })({ particleCount: 200, spread: 180 });
}

// Call the triggerConfetti function when the page finishes loading
window.addEventListener('load', function() {
  triggerConfetti();
});

  