const noBtn = document.getElementById('no-btn');

function moveNoButton() {
    const container = noBtn.parentElement;
    const containerRect = container.getBoundingClientRect();
    const btnRect = noBtn.getBoundingClientRect();

    // Calculate max possible X and Y inside the container
    const maxX = containerRect.width - btnRect.width;
    const maxY = containerRect.height - btnRect.height;

    // Random positions within the bounds
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    // Move the button
    noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
}

// Desktop: move button on hover
noBtn.addEventListener('mouseenter', moveNoButton);

// Mobile: move button on touch
noBtn.addEventListener('touchstart', moveNoButton);
