//Questions array
const quizQuestions = [
    {
      question: "Finché C'È Vita C'È Speranza",
      a: "The Early Bird Catches the Worm",
      b: "While There's Life, There's Hope",
      c: "All Bark and No Bite",
      d: "He Who Finds a Friend, Finds a Treasure",
      correct: 'b',
    },
    {
      question: "Meglio Tardi Che Mai",
      a: "Better Late Than Never",
      b: "Grasp All, Lose All",
      c: "You Snooze, You Lose",
      d: "Patience is a Virtue",
      correct: 'a',
    },
    {
      question: "Ai Mali Estremi, Estremi Rimedi",
      a: "He Who Laughs Last, Laughs Longest",
      b: "He Who Makes No Mistakes, Makes Nothing",
      c: "Desperate Times Call for Drastic Measures",
      d: "Out of Sight, Out of Mind",
      correct: 'c',
    },
    {
      question: "Tra Moglie e Marito Non Mettere il Dito",
      a: "Unlucky at Cards but Lucky in Love",
      b: "Never Interfere Between a Husband and Wife",
      c: "Not Everything Turns Out as Planned",
      d: "Do It Yourself If You Want It Done Right",
      correct: 'b',
    },
    {
      question:  "Batti il Ferro Finché È Caldo",
      a: "Better Late Than Never",
      b: "Make Hay While the Sun Shines",
      c: "There's No Time Like the Present",
      d: "The Heart Wants What It Wants",
      correct: 'b',
    },
  ];

//references
const questionContainer = document.getElementById('question');
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElemeentById("d_text")
const button = document.getElementById('submit');
const answerContainer = document.querySelectorAll('.answer')

let currentQuestion = 0;
let score = 0;

//function to clear previously selected answers
const deselectAnswers = () => {
    answerContainer.forEach((answer) => (answer.checked = false));
  };

  //return selected answers in quiz
  const getSelected = () => {
    let answer;
    answerContainer.forEach((answerContainer) => {
      if (answerContainer.checked) answer = answerContainer.id;
    });
    return answer;
  };

  //loads first quiz question when invoked
  const buildQuiz = () => {
    deselectAnswers();
    const currentQuizQuestions = quizQuestions[currentQuestion];
    questionContainer.innerText = currentQuizQuestions.question;
    a_text.innerText = currentQuizQuestions.a;
    b_text.innerText = currentQuizQuestions.b;
    c_text.innerText = currentQuizQuestions.c;
    d_text.innerText = currentQuizQuestions.d;
  };
  
  buildQuiz();

  button.addEventListener("click", () => {
    const answer = getSelected();
    if (answer) {
      if (answer === quizQuestions[currentQuestion].correct) score++;
      currentQuestion++;
      if (currentQuestion < quizQuestions.length) buildQuiz();
      else {
        //history.go(0) --> method to reload the page
        quiz.innerHTML = `
              <h2>Your score is ${score} out of ${quizQuestions.length}</h2>
              <button onclick="history.go(0)">Play Again</button>
          ` 
      }
    }
  });