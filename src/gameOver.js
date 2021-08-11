const urlSearch = new URLSearchParams(window.location.search);
const score = urlSearch.get('score');
const mode = urlSearch.get('mode');
const scoreDis = document.getElementById('score')
const highScoreDis = document.getElementById('high-score')
scoreDis.innerHTML = score;
var highscore = localStorage.getItem("highscore");
if (highscore != null) {
    if (score > parseInt(highscore)) {
        localStorage.setItem("highscore", score);
    }
} else {
    localStorage.setItem("highscore", score);
}
highScoreDis.innerHTML = localStorage.getItem("highscore");
const playAgainBtn = document.getElementById('play-again');
playAgainBtn.onclick = () => {
    setTimeout(() => {
        location.href = 'level.html'
    }, 1000)
    document.getElementById('g-over').style.opacity = 0
    document.getElementById('s').style.opacity = 0
    document.getElementById('h').style.opacity = 0
    playAgainBtn.style.width = 0
    playAgainBtn.style.opacity = 0
}

const timeUp = urlSearch.get("b")

if (timeUp == 'timeup') {
    scoreDis.innerHTML = score
}
