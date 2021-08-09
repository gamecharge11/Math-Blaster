const playBtn = document.getElementById('play')
const heading = document.getElementById('heading')
playBtn.onclick = () => {
    playBtn.style.width = "0px";
    playBtn.style.border = "none"
    heading.style.opacity = "0";
    setTimeout(function () {
        location.href = "level.html"
    }, 1200)
}