var timerEl = document.getElementById('timer');
var timeremaining = document.getElementById('timeremaining')
var timeLeft = 100;

function QuizTimer() {
   
    // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function() {

    if ( document.getElementById("speed").addEventListener("click", reduceTime)) {

    }


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
  
        
  document.getElementById("start").addEventListener("click", QuizTimer);


  function reduceTime() {
    timeLeft = timeLeft - 10;
  }