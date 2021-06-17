var timerEl = document.getElementById('timer');
var timeremaining = document.getElementById('timeremaining');
var timeLeft = 100;
var timerButton = document.getElementById('QuizButton');
var buttonEl = document.getElementById('start');
var mainEl = document.getElementById('main');
var quizQuestions = document.getElementsByClassName('QuizQuestions');
var quizStartEl = document.getElementById('quizIntro');
var quizAnswers = document.getElementsByClassName('answers');
var questions = [    {
  question: "Commonly used data types do NOT include:",
  answers: {
    a: '1: strings',
    b: '2: booleans',
    c: '3: alerts',
    d: '4: numbers'
  },
  correctAnswer: '3: alerts',
  wrongAnswer: '1: strings, 2: booleans, 4: numbers'
},
{
question: "The Best Dog Type Is:",
  answers: {
    a: '1: Westie',
    b: '2: Beagle',
    c: '3: Dalmation',
    d: '4: Corgie'
  },
  correctAnswer: 'c'

}         
              
        ];

function QuizTimer() {
   
    // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function() {

    // if ( document.getElementById("speed").addEventListener("click", reduceTime)) {



    if (timeLeft > 0 ) {
        timeremaining.textContent = "Time: " + timeLeft ;
        timeLeft--;
      }
      else if(timeLeft <= 0) {
        timeremaining.textContent = "Time: 0";
        clearInterval(timeInterval);
        displayMessage();
      }
    },1000);
  }

  function reduceTime() {
    timeLeft = timeLeft - 10;
  }

  function startQuiz() {
  
      buttonEl.textContent = ""
      // document.getElementById("QuizQuestions").innerHTML = 'text'; 
      document.querySelector(".QuizQuestions").innerHTML = "";
      document.querySelector(".intro-p").innerHTML = "";
      document.querySelector(".answers").innerHTML = "";
      userAnswer = "";


      for ( i=0; i < questions.length; i++) {
        
        answer = questions[i].correctAnswer;
     
        var newDiv = document.createElement('div')
            newDiv.className = "new-question";
            newDiv.textContent = questions[i].question;
            document.querySelector(".QuizQuestions").appendChild(newDiv);
        
        var answerOne = document.createElement('button')
            answerOne.classList = "btn"
            answerOne.textContent = questions[i].answers.a;
            document.querySelector(".answers").appendChild(answerOne);

        var answerTwo = document.createElement('button')
            answerTwo.classList = "btn"
            answerTwo.textContent = questions[i].answers.b;
            document.querySelector(".answers").appendChild(answerTwo);

        var answerThree = document.createElement('button')
            answerThree.classList = "btn"
            answerThree.textContent = questions[i].answers.c;
            document.querySelector(".answers").appendChild(answerThree);

        var answerFour = document.createElement('button')
            answerFour.classList = "btn"
            answerFour.textContent = questions[i].answers.d;
            document.querySelector(".answers").appendChild(answerFour);


       answerOne.addEventListener("click", checkAnswer1);
       answerTwo.addEventListener("click", checkAnswer2);
       answerThree.addEventListener("click", checkAnswer3); 
       answerFour.addEventListener("click", checkAnswer4);
    

    if (userAnswer === answer){
      console.log("Right")
      return 
     } 

    else {

          return
          
        }  


  }  

};
    
      function checkAnswer1(){
        var userAnswer = questions[i].answers.a
            console.log(userAnswer)
            return userAnswer;
            }
            
        function checkAnswer2(){
         var userAnswer = questions[i].answers.b
          console.log(userAnswer)
          return userAnswer;
      }
        function checkAnswer3(){
          var userAnswer = questions[i].answers.c
          console.log(userAnswer)
          return userAnswer;
      }
        function checkAnswer4(){
          var  userAnswer = questions[i].answers.d
            console.log(userAnswer)
            return userAnswer;
    }


  
  document.getElementById("start").addEventListener("click", QuizTimer);
  document.getElementById("start").addEventListener("click", startQuiz);