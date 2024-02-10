const questions = [
  {
    question: "What is my favorite dog?",
    answers: ["Golden Retriever", "Chow Chow", "Shitzu", "Husky"],
    correctAnswer: "Golden Retriever",
  },
  {
    question: "What is 2 + 2?",
    answers: ["3", "4", "5", "6"],
    correctAnswer: "4",
  },
  {
    question: "Who wrote 'Author of Harry Potter and the Sorcerer's Stone'?",
    answers: ["Stephen King", "Harper Lee", "J.K. Rowling", "George Orwell"],
    correctAnswer: "J.K. Rowling",
  },

  {
    question: "Who is my Best-friend?",
    answers: ["Myself", "Marga", "Ceedy", "Carmela", "Rico", "Joyce"],
    correctAnswer: "Myself",
  },

  {
    question: "Favorite Game",
    answers: ["Valorant", "Mobile Legend", "Call of Duty Mobile", "My Penis"],
    correctAnswer: "Valorant",
  },

  {
    question: "What is a Orange?",
    answers: ["Color", "Fruit"],
    correctAnswer: "Color",
    correctAnswer: "Fruit"
  },

  {
    question: "Color or Colour",
    answers: ["Color", "Colour"],
    correctAnswer: "Color",
    correctAnswer: "Colour",
  },

  {
    question:
      "Is the following statement true or false? 'This statement is false.",
    answers: ["True", "False"],
    correctAnswer: ""
  },

  {
    question: "What is my Personality Type?",
    answers: [
      "INTP-A/INTP-T",
      "INTJ-A/INTJ-T",
      "ENTJ-A/INTA-T",
      "ENTP-A/ENTP-T",
    ],
    correctAnswer: "INTJ-A/INTJ-T",
  },

  {
    question: "Pogi or Nah?",
    answers: ["Nah", "Pogi nalang amigo man", "Pogi omsim", "Pogi"],
    correctAnswer: "Pogi nalang amigo man",
  },
];

const questionElement = document.getElementById('question');
const answersElement = document.getElementById('answers');
const resultElement = document.getElementById('result');

let currentQuestionIndex = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;

function shuffle(array) {
  // Fisher-Yates shuffle algorithm
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function showQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;

  const shuffledAnswers = [...currentQuestion.answers];
  shuffle(shuffledAnswers);

  answersElement.innerHTML = "";
  shuffledAnswers.forEach((answer, index) => {
    const button = document.createElement('button');
    button.textContent = answer;
    button.addEventListener('click', () => checkAnswer(answer));
    answersElement.appendChild(button);
  });
}

function checkAnswer(selectedAnswer) {
  const currentQuestion = questions[currentQuestionIndex];
  if (selectedAnswer === currentQuestion.correctAnswer) {
    resultElement.textContent = "Correct!";
    resultElement.style.color = "green";
    correctAnswers++;
  } else {
    resultElement.textContent = "Incorrect!";
    resultElement.style.color = "red";
    incorrectAnswers++;
  }
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    setTimeout(showQuestion, 1000); // Move to next question after 1 second
  } else {
    setTimeout(() => {
      questionElement.textContent = "Quiz completed!";
      answersElement.innerHTML = "";
      resultElement.textContent = `Correct Answers: ${correctAnswers}, Incorrect Answers: ${incorrectAnswers}`;
    }, 1000);
  }
}

showQuestion();
