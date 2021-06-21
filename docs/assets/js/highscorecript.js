
// Variable/function pair to delete the localstorage upon button click should the user wish to
var clear = document.getElementsByClassName("clear-high-scores")

document.querySelector(".clear-high-scores").onclick = function() {
    localStorage.clear();
  }

// Javascript to dynamically generate to the DOM  the high scores stored in the localstorage
var highscores = document.createElement("ul")
highscores.className = "highscore-pagelist"
highscores.textContent = JSON.parse(localStorage.getItem("Scores"));
document.querySelector(".stored-high-scores").appendChild(highscores)
