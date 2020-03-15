const card = document.getElementById('card');
const image = document.getElementById('image');
const normalButton = document.getElementById('normal-button');
const abnormalButton = document.getElementById('abnormal-button');
const scoreSection = document.getElementById('score');

const questions = [
    { src: "1.jpg", answer: "normal" },
    { src: "2.jpg", answer: "abnormal" },
    { src: "3.png", answer: "abnormal" },
    { src: "4.jpg", answer: "abnormal" },
    { src: "5.png", answer: "abnormal" },
    { src: "6.jpg", answer: "abnormal" },
    { src: "7.jpg", answer: "abnormal" },
    { src: "8.jpg", answer: "abnormal" },
    { src: "9.jpg", answer: "abnormal" },
    { src: "10.jpg", answer: "abnormal" },
    { src: "11.jpg", answer: "abnormal" },
    { src: "12.jpg", answer: "abnormal" },
    { src: "13.jpg", answer: "abnormal" },
    { src: "14.jpg", answer: "abnormal" }
];

let currentQuestionNumber = 0;
image.src = "images/" + questions[currentQuestionNumber].src;

let score = 0;

function showNextQuestion() {
    currentQuestionNumber = currentQuestionNumber + 1;
    image.src = "images/" + questions[currentQuestionNumber].src;
}

function updateScore(question, usersAnswer) {
    if (usersAnswer === question.answer) {
        score = score + 1;
        console.log('correct');
    }
    else {
        console.log('incorrect');
    }
}

function showScore() {
    scoreSection.textContent = `You scored ${score} out of ${questions.length}!`;
    card.classList.add('scorecard');
}

normalButton.addEventListener('click', function(){
    updateScore(questions[currentQuestionNumber], "normal");

    const lastQuestionNumber = questions.length - 1;

    if (currentQuestionNumber === lastQuestionNumber) {
        showScore();
    } else {
        showNextQuestion();
    }
});

abnormalButton.addEventListener('click', function(){
    updateScore(questions[currentQuestionNumber], "abnormal");
    
    const lastQuestionNumber = questions.length - 1;

    if (currentQuestionNumber === lastQuestionNumber) {
        showScore();
    } else {
        showNextQuestion();
    }
});
