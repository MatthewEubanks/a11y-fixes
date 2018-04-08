'use strict';

const STORE = [
    {  
      question: `Who is the king of the Aesir?`,
      correct: 2,
      answers: ['Thor', 'Zeus', 'Odin', 'Vili'],
      correctAnswer: 'Odin',
      realAnswer: 'Odin is the king of the Aesir.'
    },
    {
      question: `What is the name of Midgard serpent?`,
      correct: 2,
      answers: ['Loki', 'Odr', 'Jormungandr', 'Ve'],
      correctAnswer: 'Jormungandr',
      realAnswer: 'Jormungandr is the Midgard serpent that will kill Thor during Ragnarok.'
    },
    {
      question: `Where did all the Norse warriors hope to go after death?`,
      correct: 1,
      answers: ['heaven', 'Valhalla', 'Purgatory', 'Elysium'],
      correctAnswer: 'Valhalla',
      realAnswer: 'Norse warriors sought a place in Valhalla, a mead hall in Asgard for the greatest warriors.'
    },
    {
      question: `What are the main text sources of Norse Mythology?`,
      correct: 2,
      answers: ['The Bible', 'Eibas', 'Eddas', 'Eillas'],
      correctAnswer: 'Eddas',
      realAnswer: 'Most of what we know about Norse mythology comes from two texts known as the Eddas'
    },
    {
      question: `What are the two Eddas called?`,
      correct: 0,
      answers: ['The Poetic and The Prose', 'The History and The Myth', 'The First and The Second', 'The Beginning and The End'],
      correctAnswer: 'The Poetic and The Prose',
      realAnswer: 'The Eddas consist of "The Poetic", or elder, and "The Prose," or younger. The first of these is mainly poetry, while the second covers the mythology of the Norse gods.'
    },
    {
      question: `What did the Norse call the fiery region to the south of their world?`,
      correct: 0,
      answers: ['Muspel', 'Niflheim', 'Hel', 'Asgard'],
      correctAnswer: 'Muspel',
      realAnswer: `Muspel, which means "world's end," was a fiery region to the south of the Norse world.`,
    },
    {
      question: `What happened when Muspel collided with the frozen world to the north known as Niflheim?`,
      correct: 1,
      answers: ['end of the world', 'creation of all life', 'all men turned to gods', 'all gods became men'],
      correctAnswer: 'creation of all life',
      realAnswer: 'When Muspel met Niflheim, the world began — think of it as a big bang for the Vikings.'
    },
    {
      question: `What was the first animal, created to accompany and nourish Ymir?`,
      correct: 1,
      answers: ['sheep', 'goat', 'cow', 'kangaroo'],
      correctAnswer: 'cow',
      realAnswer: 'After Ymir came a cow named Audhumla that generated four streams of milk to feed the hungry giant.'
    },
    {
      question: `Who kills Ymir and creates the rest of the world?`,
      correct: 2,
      answers: ['Zeus', 'Balder', 'Odin', 'Freyr'],
      correctAnswer: 'Odin',
      realAnswer: 'Odin destroys Ymir and uses his body parts to make the world — literally. Blood became rivers, and skin became land.'
    },
    {
      question: `What does Odin use to form the first two Humans`,
      correct: 0,
      answers: ['Logs', 'Apples', 'Rocks', 'Sand'],
      correctAnswer: 'Logs',
      realAnswer: 'Odin fashions the first two humans out of logs, naming them Ask and Embla, meaning ash and elm.'
    }
    ];
    
    
let questionNumber = 0;
let score = 0;

//generate the question element
function generateQuestion () {
    if (questionNumber < STORE.length) {
        return `<div class="question-${questionNumber}">
         <h2>${STORE[questionNumber].question}</h2>
         <form>
         <fieldset>
         <label class="answerChoice">
         <input type="radio" value="${STORE[questionNumber].answers[0]}" name="answer" required>
         <span>${STORE[questionNumber].answers[0]}</span>
         </label>
         <label class="answerChoice">
         <input type="radio" value="${STORE[questionNumber].answers[1]}" name="answer" required>
         <span>${STORE[questionNumber].answers[1]}</span>
         </label>
         <label class="answerChoice">
         <input type="radio" value="${STORE[questionNumber].answers[2]}" name="answer" required>
         <span>${STORE[questionNumber].answers[2]}</span>
         </label>
         <label class="answerChoice">
         <input type="radio" value="${STORE[questionNumber].answers[3]}" name="answer" required>
         <span>${STORE[questionNumber].answers[3]}</span>
         </label>
         <button type = "submit" class = "submitButton">Submit</button>
         </fieldset>
         </form>
         </div>`
    } else {
        renderResults();
        restartQuiz();
        $('.questionNumber').text(10);
        console.log(STORE);
    }
}
//increment question
function changeQuestion () {
    questionNumber++;
    $('.questionNumber').text(questionNumber+1);
}
//increment score
function changeScore () {
    score++;
    
}
function startQuiz() {
    $('.quizStart').on('click', '.startButton', event => {
        $('.questionNumber').text(1);
        renderQuestion();
    });
}
function renderQuestion () {''
    $('.quizStart').html(generateQuestion());
}
function userSelectAnswer() {
    $('.quizStart').on('submit', function (event) {
        event.preventDefault();
        let selected = $('input:checked');
        let answer = selected.val();
        let correctAnswer = `${STORE[questionNumber].correctAnswer}`;
        if (answer === correctAnswer) {
            selected.parent().addClass('correct');
            ifAnswerIsCorrect();
            console.log(selected);
            console.log(answer);
            console.log(correct);
        } else {
            selected.parent().addClass('wrong');
            ifAnswerIsWrong();
            console.log(selected);
            console.log(answer);
            console.log(correct);
        }
    });
}
function ifAnswerIsCorrect () {
    userAnswerFeedbackCorrect();
    updateScore();
}
function ifAnswerIsWrong () {
    userAnswerFeedbackWrong();
}
function userAnswerFeedbackCorrect () {
    let correctAnswer = `${STORE[questionNumber].correctAnswer}`;
    $('.quizStart').html(`<div class="quizStart">
    <h2>You got it right!</h2><h3>${STORE[questionNumber].realAnswer}</h3><button type=button class="nextButton">Next</button></div>`);
}
function userAnswerFeedbackWrong () {
    let correctAnswer = `${STORE[questionNumber].correctAnswer}`;
    $('.quizStart').html(`<div class="quizStart"><h2>Wrong Weakling!</h2><h3>The correct answer is: ${STORE[questionNumber].realAnswer}</h3><button type="next" class="nextButton">Next</button></div>`);
  }
function updateScore() {
    changeScore();
    $('.score').text(score);
}
function renderResults () {
    if (score >= 8) {
        $('.quizStart').html(`<div class="results correctFeedback"><h2>You're Ready for Valhalla!</h2><h3>You got ${score} / 10</h3><button class="restartButton">Restart Quiz</button></div>`);
    } else if (score < 8 && score >=5) {
        $('.quizStart').html(`<div class="results correctFeedback"><h2>Need to work harder to be Einherjar!</h2><h3>You got ${score} / 10</h3><h4>Drink more Mead and get in some fights!</h4><button class="restartButton">Restart Quiz</button></div>`);
    } else {
        $('.quizStart').html(`<div class="results correctFeedback"><h2>You can carry our weapons but dont hurt yourself on them!</h2><h3>You got ${score} / 10</h3><button class="restartButton">Restart Quiz</button></div>`);
    }
}
function renderNextQuestion () {
    $('.quizStart').on('click', '.nextButton', function (event) {
        changeQuestion();
        renderQuestion();
        userSelectAnswer();
        console.log('it worked');
      });
}
//restart quiz
function restartQuiz () {
    $('.quizStart').on('click', '.restartButton', function (event) {
        location.reload();
    });
}
function createQuiz () {
    startQuiz();
    generateQuestion();
    userSelectAnswer();
    renderNextQuestion();
}
$(createQuiz);