const time = document.querySelector('.time')
const dateStr = document.querySelector('.date')
const greeting = document.querySelector ('.greeting')
const name = document.querySelector ('.name')
const body = document.querySelector('body')







function showTime() {
    const date = new Date()
    const currentTime = date.toLocaleTimeString()
    time.textContent = currentTime
    setTimeout(showTime, showDate, getTimeOfDay, 1000)
 }
showTime()
 

function showDate() {
    const date = new Date()
    const option = { weekday: 'long', month: 'long', day: 'numeric'}
    const currentDate = date.toLocaleDateString('en-US', option)
    dateStr.textContent = currentDate
} 
showDate()


function getTimeOfDay() {
    const date = new Date()
    const hours = date.getHours()
    if (hours < 4) {
     greeting.textContent = `Good nigth`
    }
    else if (hours < 12) {
      greeting.textContent = `Good morning`
    }
    else if (hours < 17) {
     greeting.textContent = `Good afternoon`
    }
    else if (hours < 24) {
     greeting.textContent = `Good evening`
    }
}
getTimeOfDay()


function setLocalStorage() {
    localStorage.setItem('name', name.value);     
}
window.addEventListener('beforeunload', setLocalStorage)

function getLocalStorage() {
    if (localStorage.getItem('name')) {
        name.value = localStorage.getItem('name')
    }
}
window.addEventListener('load', getLocalStorage)  


function getRandomNum(min, max){
    (Math.floor(( Math.random()*(max-min)+min)))
}
getRandomNum(1, 21) 



function setBg() {
      const date = new Date()
    let timeOfDay = date.getHours()
    let bgNum = Math.random()
   console.log (bgNum)
  
    if (timeOfDay < 4) {
     body.style.backgroundImage = "url('https://raw.github.com/inna38/stage1-tasks/assets/images/night/01.jpg')"
    }
    else if (timeOfDay < 12) {
       body.style.backgroundImage = "url('https://raw.github.com/inna38/stage1-tasks/assets/images/morning/01.jpg')"
    }
    else if (timeOfDay < 17) {
    body.style.backgroundImage = "url('https://raw.github.com/inna38/stage1-tasks/assets/images/afternoon/01.jpg')"
    }
    else if (timeOfDay < 24) {
    return body.style.backgroundImage = Math.floor(( Math.random()*("url('https://raw.github.com/inna38/stage1-tasks/assets/images/evening/.jpg'))")))
     
    }
  }
setBg()


// setInterval(() => {
//     const date = new Date()
//     const currentTime = date.toLocaleTimeString()
//     time.textContent = currentTime
// }, 1000);

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

