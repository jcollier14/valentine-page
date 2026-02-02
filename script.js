const noBtn = document.getElementById('no-btn');

function moveNoButton() {
    const container = noBtn.parentElement;
    const containerRect = container.getBoundingClientRect();
    const btnRect = noBtn.getBoundingClientRect();

    // Max X and Y so button stays inside container
    const maxX = containerRect.width - btnRect.width;
    const maxY = containerRect.height - btnRect.height;

    // Random positions inside bounds
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    // Move button
    noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
}

// Desktop hover
noBtn.addEventListener('mouseenter', moveNoButton);

// Mobile touch
noBtn.addEventListener('touchstart', moveNoButton);
