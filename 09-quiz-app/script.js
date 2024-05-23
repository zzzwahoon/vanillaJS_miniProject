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
nextButton.addEventListener('click', () => {
  currentQuestionIndex += 1;
  setNextQuestion();
})

function startGame() {
  // start 버튼 가리기
  startButton.classList.add('hide');

  // questions 배열의 아이템 순서 랜덤으로 만들기
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);

  // 현재 질문의 인덱스 0부터 시작
  currentQuestionIndex = 0;

  // Container 요소의 hide 속성 제거
  questionContainerEl.classList.remove('hide');

  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
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
    button.addEventListener('click', selectAnswer);
    answerButtonEl.appendChild(button);
  })
}

function selectAnswer(e) {
  // 클릭이 된 버튼의 노드를 상수에 할당
  const selectedButton = e.target;
  // 선태깅 된 버튼이 정답이면 true 아니면 false
  const correct = selectedButton.dataset.correct;

  // 선택한 버튼이 정답이라면 body class correct, 아니면 wrong 
  setStatusClass(document.body, correct);

  // 각 버튼이 정답 버튼이라면 correct, 아니라면 wrong class
  Array.from(answerButtonEl.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  })

  // 모든 문제를 다 풀었으면 restart 버튼 보이기
  // 그게 아니면 next 버튼 보이기
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide');
  } else {
    startButton.innerText = 'Restart';
    startButton.classList.remove('hide');
  }
}

function setStatusClass(element, correct) {
  // 원래 있던 correct, wrong class 지우기
  clearStatusClass(element);

  // 정답이면 element class 속성에 correct, 아니면 wrong
  if (correct) {
    element.classList.add('correct');
  } else {
    element.classList.add('wrong');
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct');
  element.classList.remove('wrong');
}

function resetState() {
  // body 에서 correct와 wrong 클래스 지우기
  clearStatusClass(document.body);

  // 다음 버튼 요소에 hide 속성 넣어서 숨기기
  nextButton.classList.add('hide');

  // answer buttons div안에 있는 버튼 모드 지우기
  while (answerButtonEl.firstChild) {
    answerButtonEl.removeChild(answerButtonEl.firstChild);
  }
}

