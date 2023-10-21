const form = document.querySelector('form');
const btn = document.querySelector('button');

const questions = [
  {
    questionText: 'Jakimi frakcjami grasz w grze Red Alert 1 z 1996?',
    answers: [
      'Amerykanie i Nazisci',
      'Alianci i Sowieci',
      'Harkonenowie i Atrydzi',
      'Imperium i Rebelianci'
    ],
    correctAnswer: 1
  },
  {
    questionText: 'Ktora z wymienionych konsol jest najstarsza?',
    answers: [
      'Playstation 1',
      'N64',
      'NES',
      'XBox'
    ],
    correctAnswer: 2
  }
]

let counter = 0;
let points = 0;
let selectedAnswer = null;

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (counter >= questions.length) {
    return;
  }
  const question = questions[counter];
  document.querySelector('p').textContent = `${counter + 1}. ${question.questionText}`;

  const list = document.querySelector('ul');
  list.innerHTML = '';

  question.answers.forEach((answer, index) => {
    const listEl = document.createElement('li');
    const label = document.createElement('label');
    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'answer';
    input.value = index;
    const text = document.createTextNode(answer);
    input.addEventListener('change', (event) => {
      selectedAnswer = event.target.value;
    })
    label.appendChild(input);
    label.appendChild(text);
    listEl.appendChild(label);
    list.appendChild(listEl);
  })

  console.log(selectedAnswer, question.correctAnswer)
  if (selectedAnswer === question.correctAnswer) {
    points++;
  }
  btn.textContent = 'Dalej'

  // console.log(points);
  counter++;
})
