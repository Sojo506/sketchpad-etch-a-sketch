const squareContainer = document.getElementById('square-container');
const clearGrid = document.getElementById('clear-grid');
const gridSizeInput = document.getElementById('grid-size');
const setGridSize = document.getElementById('set-grid');
const toggleColor = document.getElementById('toggle-color');
const DEFAULT_SIZE = 16;

// Function to create the grid
function createGrid(size) {
    squareContainer.innerHTML = ''; // limpiar grid previo
    const containerWidth = squareContainer.clientWidth; // ancho real
    const totalSquares = size * size;
    const squareSize = containerWidth / size; // ancho exacto por cuadrado

    for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        // hover effect
        square.addEventListener('mouseover', () => {
            if (toggleColor.classList.contains('black')) {
                square.style.backgroundColor = 'black';
            } else {
                const r = Math.floor(Math.random() * 256);
                const g = Math.floor(Math.random() * 256);
                const b = Math.floor(Math.random() * 256);
                let currentOpacity = parseFloat(square.dataset.opacity) || 0;
                if (currentOpacity < 1) currentOpacity += 0.1;
                square.dataset.opacity = currentOpacity;
                square.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${currentOpacity})`;
            }
        });

        squareContainer.appendChild(square);
    }
}

// Clear grid button
clearGrid.addEventListener('click', () => {
    createGrid(DEFAULT_SIZE);
    gridSizeInput.value = DEFAULT_SIZE;
});

// Set new grid size
setGridSize.addEventListener('click', () => {
    const newSize = parseInt(gridSizeInput.value);
    if (newSize > 0 && newSize <= 100) {
        createGrid(newSize);
    } else {
        alert("Invalid size! Please enter a number between 1 and 100.");
    }
});

// Toggle color mode (sin borrar grid)
toggleColor.addEventListener('click', () => {
    toggleColor.classList.toggle('black');
    toggleColor.textContent = toggleColor.classList.contains('black')
        ? "Toggle Mode (Current: Black)"
        : "Toggle Mode (Current: RGB)";
});

// Initialize default grid
createGrid(DEFAULT_SIZE);
