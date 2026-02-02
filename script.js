const noBtn = document.getElementById('no-btn');

function moveNoButton() {
    const container = noBtn.parentElement;
    const containerRect = container.getBoundingClientRect();
    const btnRect = noBtn.getBoundingClientRect();

    // Calculate random positions within container
    const maxX = containerRect.width - btnRect.width;
    const maxY = containerRect.height - btnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
}

// Move the button when hovering (desktop)
noBtn.addEventListener('mouseenter', moveNoButton);

// Move the button when touching (mobile)
noBtn.addEventListener('touchstart', moveNoButton);
