
function createRaindrop() {
    const rainContainer = document.querySelector('.rain-container');
    const raindrop = document.createElement('div');
    raindrop.classList.add('raindrop');

    raindrop.style.left = `${Math.random() * 100}vw`;
    raindrop.style.animationDuration = `${Math.random() * 2 + 1}s`;
    raindrop.style.animationDelay = `${Math.random() * 2}s`;

    rainContainer.appendChild(raindrop);

    setTimeout(() => {
        raindrop.remove();
    }, 3000);
}

function generateRain() {
    setInterval(createRaindrop, 100);
}

document.addEventListener('DOMContentLoaded', generateRain);
