const statements = [
    { text: "Right to equality is a fundamental right.", correct: true },
    { text: "Citizens have the right to property.", correct: false },
    { text: "The duty to safeguard public property is a fundamental duty.", correct: true },
    { text: "Freedom of speech is restricted only by law.", correct: true },
    { text: "Every citizen has a duty to pay taxes.", correct: false },
    { text: "Right to work is a fundamental right.", correct: false },
];

let currentScore = 0;
let currentIndex = 0;

const scoreDisplay = document.getElementById('score');
const cardContainer = document.getElementById('card-container');
const endMenu = document.getElementById('end-menu');
const finalScoreDisplay = document.getElementById('final-score');
const restartButton = document.getElementById('restart-game');

restartButton.addEventListener('click', restartGame);

function createCard(statement) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerText = statement.text;

    cardContainer.appendChild(card);
    return card;
}

function handleSwipe(isCorrect, swipedRight) {
    if ((isCorrect && swipedRight) || (!isCorrect && !swipedRight)) {
        currentScore++;
    } else {
        currentScore--; 
    }
    scoreDisplay.innerText = currentScore;
}

function loadNextCard() {
    if (currentIndex < statements.length) {
        createCard(statements[currentIndex]);
        currentIndex++;
    } else {
        endGame();
    }
}

function removeCard(card) {
    card.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
    card.style.opacity = '0';
    setTimeout(() => {
        card.remove();
        loadNextCard();
    }, 300);
}

function endGame() {
    finalScoreDisplay.innerText = currentScore;
    endMenu.classList.remove('hidden');  
    endMenu.style.display = 'flex'; 
}
function restartGame() {
    currentScore = 0;
    currentIndex = 0;
    scoreDisplay.innerText = currentScore;
    endMenu.classList.add('hidden');  
    endMenu.style.display = 'none'; 
    cardContainer.innerHTML = ''; 
    loadNextCard();
}

window.onload = () => {
    loadNextCard();

    window.addEventListener('keydown', (e) => {
        const card = document.querySelector('.card');
        if (!card) return;

        if (e.key === 'ArrowRight') {
           
            handleSwipe(statements[currentIndex - 1].correct, true);
            card.style.transform = 'translateX(200px) rotate(10deg)';
            removeCard(card);
        } else if (e.key === 'ArrowLeft') {
            handleSwipe(statements[currentIndex - 1].correct, false);
            card.style.transform = 'translateX(-200px) rotate(-10deg)';
            removeCard(card);
        }
    });
};