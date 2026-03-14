const SoundIcon = document.getElementById("sound")
const SoundMusic = new Audio("./Audio/India.mp3")
let clicker = 0
SoundIcon.addEventListener("click", function(){
    if (clicker == 0)
        SoundMusic.play()
    console.log(SoundIcon)
    clicker ++
    if(clicker %2 != 0 && clicker != 1)
            SoundMusic.play()
    else if(clicker %2 == 0 && clicker != 0)
        SoundMusic.pause()
})
const up = document.getElementById("up")
up.addEventListener("click", function(){
    scrollTo(0, 0)
})
const form = document.querySelector("form")
form.addEventListener("submit", function(event){
    event.preventDefault()
    location.href = "test1.html"
})