const time = document.querySelector('.time')
 const date = new Date()

// const currentTime = date.toLocaleTimeString()
// console.log(currentTime)

setInterval (function () {
    document.querySelector('.time').innerHTML = date_time();
    
}, 100)


// const pause = document.querySelector('.pause')
// const play = document.querySelector('.play')
// const first = document.querySelector('.play-prev')
// const last = document.querySelector('.play-next')
// const audio = new Audio()
// playNum = 0

// function playAudio() {
//      audio.src = "./sounds/Aqua Caelestis.mp3"
    // audio.src = "./sounds/Ennio Morricone.mp3"
    // audio.src = "./sounds/River Flows In You.mp3"
    //  audio.src="./sounds/Summer Wind.mp3"
//     audio.current = 0
//     audio.play()
    
// }
// function pauseAudio() {
//     audio.pause()
// }

// function firstAudio() {
    
// }

// function lastAudio() {
    
// }


// play.addEventListener('click', playAudio)
// pause.addEventListener('click', pauseAudio )


// const playList = [
//     {
//     title: "Aqua Caelestis",
//     srs:  "./sounds/Aqua Caelestis.mp3"
//     },
//     {
//     title: "Ennio Morricone",
//     srs: "./sounds/Ennio Morricone.mp3"
//     },
//     {
//     title: "River Flows In You",
//     srs: "./sounds/River Flows In You.mp3"
//     },
//     {
//     title: "Summer Wind",
//     srs: "./sounds/Summer Wind.mp3"
//     }
// ]

