var timerEl = document.getElementById('timer');
var timeremaining = document.getElementById('timeremaining');
var timeLeft = 100;
var timerButton = document.getElementById('QuizButton');
var buttonEl = document.getElementById('start');
var mainEl = document.getElementById('main');
var quizQuestions = document.getElementsByClassName('QuizQuestions');
var quizStartEl = document.getElementById('quizIntro');
var quizAnswers = document.getElementsByClassName('answers');
var questions = [{
  question: "Commonly used data types do NOT include:",
  answers: {
    a: '1: strings',
    b: '2: booleans',
    c: '3: alerts',
    d: '4: numbers'
  },
  correctAnswer: '3: alerts',
  
},
{
  question: "The Best Dog Type Is:",
  answers: {
    a: '1: Westie',
    b: '2: Beagle',
    c: '3: Dalmation',
    d: '4: Corgie'
  },
  correctAnswer: '1: Westie'

},
{
  question: "The Best LaCroix Flavor Is:",
  answers: {
    a: '1: Plain',
    b: '2: Key Lime',
    c: '3: Lemon',
    d: '4: Coconut'
  },
  correctAnswer: '2: Key Lime'

}
];

userAnswer = "";
currentQuestion = 0;

function QuizTimer() {


  var timeInterval = setInterval(function () {

    if (timeLeft > 0) {
      timeremaining.textContent = "Time: " + timeLeft;
      timeLeft--;
    }
    else if (timeLeft <= 0) {
      timeremaining.textContent = "Time: 0";
      clearInterval(timeInterval);
      displayMessage();
      
    }

  
  }, 1000);
}

function reduceTime() {
  timeLeft = timeLeft - 10;
}

function startQuiz() {
  currentQuestion = 0;

  //First step, remove existing html elements

  buttonEl.textContent = ""
  buttonEl.remove();
  document.querySelector(".QuizQuestions").innerHTML = "";
  document.querySelector(".intro-p").innerHTML = "";
  document.querySelector(".answers").innerHTML = "";
  createQuiz();





}
function displayMessage(){
  document.querySelector(".QuizQuestions").innerHTML = "";
  document.querySelector(".answers").innerHTML = "";
  displayHighScore()
}

//Functions for each check answer depending on what the user inputs
function checkAnswer() {

  if (this.textContent === questions[currentQuestion].correctAnswer){

    console.log("Right")
  }
  else {
    reduceTime()
    console.log("Wrong")
  }

  document.querySelector(".QuizQuestions").innerHTML = "";
  document.querySelector(".answers").innerHTML = "";
  currentQuestion++;
  if (currentQuestion < questions.length){
    createQuiz();

  }
  else {
    displayHighScore();
    
  }
}


//Step 2, create for loop to build dynamic HTML elements from the questions array
function createQuiz() {
  answer = questions[currentQuestion].correctAnswer;

  var newDiv = document.createElement('div')
  newDiv.className = "new-question";
  newDiv.textContent = questions[currentQuestion].question;
  document.querySelector(".QuizQuestions").appendChild(newDiv);

  var answerOne = document.createElement('button')
  answerOne.classList = "btn"
  answerOne.textContent = questions[currentQuestion].answers.a;
  document.querySelector(".answers").appendChild(answerOne);

  var answerTwo = document.createElement('button')
  answerTwo.classList = "btn"
  answerTwo.textContent = questions[currentQuestion].answers.b;
  document.querySelector(".answers").appendChild(answerTwo);

  var answerThree = document.createElement('button')
  answerThree.classList = "btn"
  answerThree.textContent = questions[currentQuestion].answers.c;
  document.querySelector(".answers").appendChild(answerThree);

  var answerFour = document.createElement('button')
  answerFour.classList = "btn"
  answerFour.textContent = questions[currentQuestion].answers.d;
  document.querySelector(".answers").appendChild(answerFour);


  //Step Three, Track for when user clicks on and sets the userAnswer to that selection
  answerOne.addEventListener("click", checkAnswer);
  answerTwo.addEventListener("click", checkAnswer);
  answerThree.addEventListener("click", checkAnswer);
  answerFour.addEventListener("click", checkAnswer);

};

  function displayHighScore() {

  

  var allDone = document.createElement('div')
        allDone.className = "all-done";
        allDone.textContent = "All Done!";
        document.querySelector(".QuizQuestions").appendChild(allDone)
  var yourScore = document.createElement('div')
        yourScore.className = "your-score"
        yourScore.textContent = "Your Final Score Is " + timeLeft;
        document.querySelector(".intro-p").appendChild(yourScore)

  var enterInitials = document.createElement('p')
        enterInitials.className = "initials";
        enterInitials.textContent = "Enter Initials: "
        document.querySelector(".your-name").appendChild(enterInitials)


  var textInput = document.createElement('input')
        textInput.type = "text";
        textInput.className = "text-input";
        document.querySelector(".enter-score").appendChild(textInput);

  var submit = document.createElement('button')
        submit.classList = "btn"
        submit.textContent = "Submit";
        document.querySelector(".submit-button").appendChild(submit);
  
        timeLeft = "Time: " + timeLeft;

  };

  document.getElementById("start").addEventListener("click", QuizTimer);
  document.getElementById("start").addEventListener("click", startQuiz);






  //if (answerOne.addEventListener("click", checkAnswer1)){
   // var userAnswer = questions[i].answers.a

  // } 

   //else if (answerTwo.addEventListener("click", checkAnswer2)){
   // var userAnswer = questions[i].answers.b

   //} 
   //else if (answerThree.addEventListener("click", checkAnswer3)){
   // var userAnswer = questions[i].answers.c

  // } 
  // else if (answerFour.addEventListener("click", checkAnswer4)){
   // var userAnswer = questions[i].answers.d

  // } 

   //if (userAnswer === answer){
   //   console.log("right")
  // }

  //  }