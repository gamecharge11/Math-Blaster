const easy = document.getElementById('easy')
const medium = document.getElementById('medium')
const hard = document.getElementById('hard')
const heading = document.getElementById('heading')

easy.onclick = () => {
    easy.style.width = "0px"
    easy.style.opacity = 0
    medium.style.width = "0px"
    medium.style.opacity = 0
    hard.style.width = "0px"
    hard.style.opacity = 0
    heading.style.opacity = 0
    setTimeout(function () {
        location.href = "game.html?m=easy"
    }, 1000)
}
medium.onclick = () => {
    easy.style.width = "0px"
    easy.style.opacity = 0
    medium.style.width = "0px"
    medium.style.opacity = 0
    hard.style.width = "0px"
    hard.style.opacity = 0
    heading.style.opacity = 0
    setTimeout(function () {
        location.href = "game.html?m=medium"
    }, 1000)
}
hard.onclick = () => {
    easy.style.width = "0px"
    easy.style.opacity = 0
    medium.style.width = "0px"
    medium.style.opacity = 0
    hard.style.width = "0px"
    hard.style.opacity = 0
    heading.style.opacity = 0
    setTimeout(function () {
        location.href = "game.html?m=hard"
    }, 1000)
}