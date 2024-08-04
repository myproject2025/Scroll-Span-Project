const circle = document.querySelector('.circle')
const innerCircle = document.querySelector('.inner-circle')
window.onscroll = function () {
    circle.style.transform = "rotate(" + window.pageYOffset / 2 + "deg)"
}