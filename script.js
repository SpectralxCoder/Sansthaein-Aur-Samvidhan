const questions = [
    {
        question: "Which IPC section deals with theft?",
        options: {
            a: "IPC Section 377",
            b: "IPC Section 378",
            c: "IPC Section 379",
            d: "IPC Section 380"
        },
        answer: "b",
        explanation: "IPC Section 378 defines theft as, 'Whoever, intending to take dishonestly any movable property out of the possession of any person without that person's consent, moves that property in order to such taking, is said to commit theft.'"
    },
    {
        question: "Which IPC section addresses punishment for the offense of murder?",
        options: {
            a: "IPC Section 299",
            b: "IPC Section 300",
            c: "IPC Section 302",
            d: "IPC Section 304"
        },
        answer: "c",
        explanation: "IPC Section 302 prescribes the punishment for murder as, 'Whoever commits murder shall be punished with death or imprisonment for life, and shall also be liable to fine.'"
    },
    {
        question: "Which section of IPC deals with criminal breach of trust?",
        options: {
            a: "IPC Section 405",
            b: "IPC Section 406",
            c: "IPC Section 407",
            d: "IPC Section 408"
        },
        answer: "b",
        explanation: "IPC Section 406 describes criminal breach of trust as, 'Whoever, being in any manner entrusted with property, or with any dominion over property, dishonestly misappropriates or converts to his own use that property, is said to commit criminal breach of trust.'"
    },
    {
        question: "What does IPC Section 495 deal with?",
        options: {
            a: "Bigamy",
            b: "Forgery",
            c: "Kidnapping",
            d: "Robbery"
        },
        answer: "a",
        explanation: "IPC Section 495 deals with bigamy, which is 'A person who, having a spouse living, marries another person shall be punished with imprisonment for a term which may extend to seven years, and shall also be liable to fine.'"
    },
    {
        question: "Which IPC section is concerned with dowry deaths?",
        options: {
            a: "IPC Section 304B",
            b: "IPC Section 306",
            c: "IPC Section 307",
            d: "IPC Section 308"
        },
        answer: "a",
        explanation: "IPC Section 304B pertains to dowry deaths: 'Where the death of a woman is caused by any burns or bodily injury or occurs otherwise than under normal circumstances within seven years of marriage, and it is shown that soon before her death she was subjected to cruelty or harassment by her husband or any relative of her husband in connection with any demand for dowry, such death shall be called 'dowry death'.'"
    },
    {
        question: "Which section of the IPC defines culpable homicide not amounting to murder?",
        options: {
            a: "IPC Section 299",
            b: "IPC Section 300",
            c: "IPC Section 301",
            d: "IPC Section 302"
        },
        answer: "a",
        explanation: "IPC Section 299 defines culpable homicide not amounting to murder as, 'Whoever causes death by doing an act with the intention of causing death or with the knowledge that he is likely to cause death, but does not amount to murder, is said to commit culpable homicide not amounting to murder.'"
    },
    {
        question: "Which IPC section covers the offense of public nuisance?",
        options: {
            a: "IPC Section 268",
            b: "IPC Section 269",
            c: "IPC Section 270",
            d: "IPC Section 271"
        },
        answer: "a",
        explanation: "IPC Section 268 deals with public nuisance as, 'A person is said to create a public nuisance if he does any act or is guilty of any illegal omission which causes common injury, danger, or annoyance to the public or to the people in general who dwell or occupy property in the vicinity.'"
    },
    {
        question: "Which section of the IPC deals with the offense of forgery?",
        options: {
            a: "IPC Section 463",
            b: "IPC Section 464",
            c: "IPC Section 465",
            d: "IPC Section 466"
        },
        answer: "c",
        explanation: "IPC Section 465 deals with forgery as, 'Whoever commits forgery shall be punished with imprisonment of either description for a term which may extend to seven years, and shall also be liable to fine.'"
    },
    {
        question: "Which IPC section addresses the offense of assault?",
        options: {
            a: "IPC Section 351",
            b: "IPC Section 352",
            c: "IPC Section 353",
            d: "IPC Section 354"
        },
        answer: "a",
        explanation: "IPC Section 351 defines assault as, 'Whoever makes any gesture or preparation intended to insult or provoke another person, is said to commit an assault.'"
    },
    {
        question: "Which section of IPC deals with false charges of rape?",
        options: {
            a: "IPC Section 376",
            b: "IPC Section 377",
            c: "IPC Section 375",
            d: "IPC Section 376C"
        },
        answer: "d",
        explanation: "IPC Section 376C deals with false charges of rape: 'Whoever, being a woman, falsely charges a person with the commission of an offense under section 376 shall be punished with imprisonment of either description for a term which may extend to two years, or with fine, or with both.'"
    },
    {
        question: "Which IPC section covers the offense of criminal intimidation?",
        options: {
            a: "IPC Section 503",
            b: "IPC Section 504",
            c: "IPC Section 505",
            d: "IPC Section 506"
        },
        answer: "d",
        explanation: "IPC Section 506 deals with criminal intimidation: 'Whoever commits the offense of criminal intimidation shall be punished with imprisonment of either description for a term which may extend to seven years, or with fine, or with both.'"
    }
];

let currentQuestionIndex = 0;
let score = 0;

document.getElementById('next-button').addEventListener('click', loadNextQuestion);

function loadQuestion() {
    if (currentQuestionIndex >= questions.length || currentQuestionIndex < 0) {
        console.error('Invalid question index');
        return;
    }

    const question = questions[currentQuestionIndex];
    document.getElementById('question').textContent = question.question;

    const optionsHtml = Object.keys(question.options).map(key => 
        `<button class="option-button" data-answer="${key}">${question.options[key]}</button>`
    ).join('');

    document.getElementById('options-container').innerHTML = optionsHtml;

    // Attach event listeners to new option buttons
    document.querySelectorAll('.option-button').forEach(button => {
        button.addEventListener('click', selectOption);
    });

    document.getElementById('explanation').textContent = "";
    document.getElementById('feedback').textContent = "";
    document.getElementById('next-button').classList.add('hidden');
}

function selectOption(event) {
    const selectedOption = event.target.getAttribute('data-answer');
    const question = questions[currentQuestionIndex];

    if (selectedOption === question.answer) {
        score++;
        document.getElementById('score').textContent = `Score: ${score}`;
        document.getElementById('feedback').textContent = "Well done!!";
    } else {
        document.getElementById('feedback').textContent = "Try better next time";
    }
    
    document.getElementById('explanation').textContent = question.explanation;
    document.getElementById('next-button').classList.remove('hidden');
}

function loadNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        document.getElementById('question').textContent = `Quiz Over! Your final score is ${score}`;
        document.getElementById('options-container').innerHTML = "";
        document.getElementById('explanation').textContent = "";
        document.getElementById('feedback').textContent = "";
        document.getElementById('next-button').textContent = "Restart Quiz";
        document.getElementById('next-button').removeEventListener('click', loadNextQuestion);
        document.getElementById('next-button').addEventListener('click', restartQuiz);
        document.getElementById('next-button').classList.remove('hidden');
    }
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('score').textContent = `Score: ${score}`;
    document.getElementById('next-button').textContent = "Next Question";
    document.getElementById('next-button').removeEventListener('click', restartQuiz);
    document.getElementById('next-button').addEventListener('click', loadNextQuestion);

    loadQuestion();
}

// Initial load
loadQuestion();
