document.addEventListener('DOMContentLoaded', () => {
    randomizeElements();
});

const items = document.querySelectorAll('.item');
const dropzones = document.querySelectorAll('.dropzone');
const result = document.getElementById('result');
const restartButton = document.getElementById('restart');

items.forEach(item => {
    item.addEventListener('dragstart', dragStart);
});

dropzones.forEach(dropzone => {
    dropzone.addEventListener('dragover', dragOver);
    dropzone.addEventListener('drop', drop);
});

function dragStart(event) {
    event.dataTransfer.setData('text', event.target.id);
}

function dragOver(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    const id = event.dataTransfer.getData('text');
    const draggableElement = document.getElementById(id);
    event.target.appendChild(draggableElement);
    checkCompletion();
}

function checkCompletion() {
    const allDropped = Array.from(dropzones).every(dropzone => dropzone.querySelector('.item'));
    if (allDropped) {
        checkWin();
    }
}
function checkWin() {
    const correctPlacements = Array.from(dropzones).every(dropzone => {
        const item = dropzone.querySelector('.item');
        return item && item.id === dropzone.getAttribute('data-role');
    });

    if (correctPlacements) {
        result.textContent = 'Congratulations! You matched all roles correctly!';
    } else {
        result.textContent = 'Try better next time!';
    }
}

function restartGame() {
    const itemsContainer = document.getElementById('items-container');
    const dropzonesContainer = document.getElementById('dropzones-container');
    items.forEach(item => itemsContainer.appendChild(item));
    result.textContent = '';
    randomizeElements();
}

function randomizeElements() {
    const itemsContainer = document.getElementById('items-container');
    const dropzonesContainer = document.getElementById('dropzones-container');
    const itemsArray = Array.from(itemsContainer.children);
    const dropzonesArray = Array.from(dropzonesContainer.children);

    shuffleArray(itemsArray);
    shuffleArray(dropzonesArray);

    itemsArray.forEach(item => itemsContainer.appendChild(item));
    dropzonesArray.forEach(dropzone => dropzonesContainer.appendChild(dropzone));
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}