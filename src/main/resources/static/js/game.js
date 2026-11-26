const questionBank = [
    { question: "Flexbox를 켜는 코드는?", choices: ["display:flex", "display:grid", "flex:color"], answer: 0 },
    { question: "가로 방향으로 가운데 정렬하는 속성은?", choices: ["align-items", "justify-content", "gap"], answer: 1 },
    { question: "기본 row에서 세로 방향 정렬을 담당하는 속성은?", choices: ["align-items", "width", "border"], answer: 0 },
    { question: "Flexbox 아이템을 세로로 배치하는 코드는?", choices: ["flex-direction: column", "justify-content", "align-items"], answer: 0 },
    { question: "Grid를 켜는 코드는?", choices: ["display:grid", "display:flex", "grid:on"], answer: 0 },
    { question: "같은 너비의 3열을 만드는 코드는?", choices: ["repeat(3, 1fr)", "repeat(1, 3px)", "3fr(1)"], answer: 0 },
    { question: "Grid 칸 사이 간격 속성은?", choices: ["gap", "border", "height"], answer: 0 },
    { question: "Grid 아이템이 두 열을 차지하게 하는 코드는?", choices: ["grid-column: span 2", "grid-row: span 0", "column: large"], answer: 0 },
    { question: "버튼 클릭 동작을 연결하는 메서드는?", choices: ["addEventListener", "grid-template", "border-radius"], answer: 0 }
];

const questions = [...questionBank];
const cards = document.querySelectorAll(".treasure-card");
const questionText = document.querySelector("#question-text");
const choicesArea = document.querySelector("#choices");
const feedback = document.querySelector("#feedback");
const scoreText = document.querySelector("#score");
const solvedText = document.querySelector("#solved-count");
const restartButton = document.querySelector("#restart-button");

let score = 0;
let solvedCount = 0;

function shuffleQuestions() {
    for (let i = questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questions[i], questions[j]] = [questions[j], questions[i]];
    }
}

function updateStatus() {
    scoreText.textContent = score;
    solvedText.textContent = solvedCount;
}

function showQuestion(card) {
    if (card.dataset.solved === "true") return;
    card.classList.add("open");

    const index = Number(card.dataset.index);
    const question = questions[index];

    questionText.textContent = question.question;
    choicesArea.innerHTML = "";
    feedback.textContent = "";

    question.choices.forEach(function(choice, choiceIndex) {
        const button = document.createElement("button");
        button.textContent = choice;
        button.className = "choice-button";

        button.addEventListener("click", function() {
            if (card.dataset.solved === "true") return;

            card.dataset.solved = "true";
            solvedCount++;

            if (choiceIndex === question.answer) {
                score += 10;
                feedback.textContent = "🎉 정답! 10점을 얻었어요.";
            } else {
                feedback.textContent = "아쉬워요. 다음 보물상자에 도전해요.";
            }

            card.classList.add("solved");
            choicesArea.querySelectorAll("button").forEach(function(item) {
                item.disabled = true;
            });

            updateStatus();

            if (solvedCount === cards.length) {
                feedback.textContent += " 🏆 모든 보물상자를 열었어요! 게임 완료!";
            }
        });

        choicesArea.appendChild(button);
    });
}

function resetGame() {
    score = 0;
    solvedCount = 0;

    cards.forEach(function(card) {
        delete card.dataset.solved;
        card.classList.remove("solved", "open");
    });

    questionText.textContent = "보물상자를 선택해 문제를 시작해!";
    choicesArea.innerHTML = "";
    feedback.textContent = "새 게임이 시작됐어요. 행운을 빌어요!";
    updateStatus();
}

function startGame() {
    shuffleQuestions();
    resetGame();
}

cards.forEach(function(card) {
    card.addEventListener("click", function() {
        showQuestion(card);
    });
});

restartButton.addEventListener("click", startGame);
startGame();
