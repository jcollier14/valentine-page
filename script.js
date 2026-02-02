const noBtn = document.getElementById('no-btn');
const container = noBtn.parentElement;

function moveNoButton() {
  const containerRect = container.getBoundingClientRect();
  const btnRect = noBtn.getBoundingClientRect();

  // Max positions within container
  const maxX = containerRect.width - btnRect.width;
  const maxY = containerRect.height - btnRect.height;

  // Random X and Y within bounds
  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
}

// Desktop hover
noBtn.addEventListener('mouseenter', moveNoButton);

// Mobile tap
noBtn.addEventListener('touchstart', moveNoButton);
