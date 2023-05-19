const heading = document.getElementById('animatedtitle');
const text = "nippets of Conversations between Vanessa Kang and ChatGPT"; 

let index = 0;

function animateText() {
  heading.textContent += text[index];
  index++;

  if (index < text.length) {
    setTimeout(animateText, 50); // 速度
  }
}

animateText();