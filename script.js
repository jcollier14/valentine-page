const noBtn = document.getElementById('no-btn');
const container = noBtn.parentElement;

function moveNoButton() {
    const containerRect = container.getBoundingClientRect();
    const btnRect = noBtn.getBoundingClientRect();

    // Maximum positions inside container
    const maxX = containerRect.width - btnRect.width;
    const maxY = containerRect.height - btnRect.height;

    // Random X and Y positions
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    // Move No button
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
}

// Desktop hover
noBtn.addEventListener('mouseenter', moveNoButton);

// Mobile touch
noBtn.addEventListener('touchstart', moveNoButton);
