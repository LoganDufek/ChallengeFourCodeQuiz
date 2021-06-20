var timerEl = document.getElementById('timer');
var timeremaining = document.getElementById('timeremaining');
var timeLeft = 100;
var timerButton = document.getElementById('QuizButton');
var buttonEl = document.getElementById('start');
var mainEl = document.getElementById('main');
var quizQuestions = document.getElementsByClassName('QuizQuestions');
var quizStartEl = document.getElementById('quizIntro');
var quizAnswers = document.getElementsByClassName('answers');
var right = document.getElementsByClassName("right")
var wrong = document.getElementsByClassName("wrong")


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

//Quiz Timer that Counts Down After Button Click

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

//Function that is invoked to reduce the time/score if the user answers the question incorrectly. 
function reduceTime() {
  timeLeft = timeLeft - 10;
}


function startQuiz() {
  //CurrentQuestion variale set at 0 to iterate through the questions array. Also ensures whenever the page is reset that the array will begin at 0
  currentQuestion = 0;

  //Remove existing html elements

  buttonEl.textContent = ""
  buttonEl.remove();
  document.querySelector(".QuizQuestions").innerHTML = "";
  document.querySelector(".intro-p").innerHTML = "";
  document.querySelector(".answers").innerHTML = "";
  //Trigger create quiz function
  createQuiz();



}
//Function that triggers if the timer hits 0 before all questions are answered 
function displayMessage(){
  document.querySelector(".NewQTitle").innerHTML = "";
  document.querySelector(".answers").innerHTML = "";
  displayHighScore();
}

//Function that dynamically generates HTML elements in the DOM based on the iteration of the array
function createQuiz() {
  answer = questions[currentQuestion].correctAnswer;

  var newDiv = document.createElement('div')
  newDiv.className = "new-question";
  newDiv.textContent = questions[currentQuestion].question;
  document.querySelector(".NewQTitle").appendChild(newDiv);

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


//Event listeners added to check for a click of each buttion and then will check to see if the answer is correct. 
  answerOne.addEventListener("click", checkAnswer);
  answerTwo.addEventListener("click", checkAnswer);
  answerThree.addEventListener("click", checkAnswer);
  answerFour.addEventListener("click", checkAnswer);

};

//Function that checks the uswer answer vs the stored correct answer in the array
function checkAnswer() {
  document.querySelector(".right").innerHTML = ""
  document.querySelector(".wrong").innerHTML = ""
 
 
 
  
  if (this.textContent === questions[currentQuestion].correctAnswer){

      
    document.querySelector(".right").innerHTML = "<h2> Right </h2>"
      right.className = "right-answer"
      
  }
  else {
    reduceTime();
    
    
    document.querySelector(".wrong").innerHTML = "<h2> Wrong </h2>"
    wrong.className = "wrong-answer"
    

  }



  //Regardless of answer, the code will unbuild the existing HTML elemts, clearing them for the next iteration of the array
  document.querySelector(".NewQTitle").innerHTML = "";
  document.querySelector(".answers").innerHTML = "";
  //CurrentQuestions Variable is incrased by 1 each time this is run so the quiz will correctly move on to the next question and answer se
  currentQuestion++;
  //An if statement is invoked to check if the currentQuestion variable has reached the length of the questions array. If it hasn't the createQuiz function again, sucessfully rebuilding the next question and answer set. Otherwise, the displayHighScore function is run, which builds new HTML elements for the user to enter their score. 
  if (currentQuestion < questions.length){
    createQuiz();

  }
  else {
    displayHighScore();
    
  }
}

//Function to run when the quiz is over. Builds elements for user to enter their score and save it to localStorage
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
