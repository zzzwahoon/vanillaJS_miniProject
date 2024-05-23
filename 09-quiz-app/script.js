const questions = [
  {
    question: '2 + 2?',
    answers: [
      { text: '4', correct: true },
      { text: '22', correct: false },
    ]
  },
  {
    question: '3 + 3?',
    answers: [
      { text: '4', correct: false },
      { text: '22', correct: false },
      { text: '정답이 없습니다', correct: true },
    ]
  },
  {
    question: '4 + 2?',
    answers: [
      { text: '4', correct: false },
      { text: '6', correct: true },
    ]
  },
  {
    question: '5 x 6?',
    answers: [
      { text: '30', correct: true },
      { text: '36', correct: false },
    ]
  },
]

const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerEl = document.getElementById('question-container');
const questionEl = document.getElementById('question');
const answerButtonEl = document.getElementById('answer-buttons');

let shuffledQuestions;
let currentQuestionIndex;

startButton.addEventListener('click', startGame);

function startGame() {
  // start 버튼 가리기
  startButton.classList.add('hide');

  // questions 배열의 아이템 순서 랜덤으로 만들기
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);

  // 현재 질문의 인덱스 0부터 시작
  currentQuestionIndex = 0;

  // Container 요소의 hide 속성 제거
  questionContainerEl.classList.remove('hide');
}

function setNextQuestion() {
  
}

function showQuestion(question) {
  // 질문 텍스트 넣어주기
  questionEl.innerText = question.question;
  // 질문 answer 버튼 생성
  question.answers.forEach((answer) => {
    // 버튼 요소 생성, 텍스트 추가, 클래스 추가
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn');

    if(answer.correct) {
      // 정답인 버튼 요소인 속성으로 data-correct='true'로 넣어줌
      button.dataset.correct = answer.correct;
    }

    // 이벤트 리스너추가
    button.addEventListener('click', selectAnser);
    answerButtonEl.appendChild(button);
  })
}

function selectAnser(e) {

}