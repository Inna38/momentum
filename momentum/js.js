const time = document.querySelector('.time')
const dateStr = document.querySelector('.date')
const greeting = document.querySelector ('.greeting')
const name = document.querySelector ('.name')
const body = document.querySelector('body')
const slideNext = document.querySelector('.slide-next')
const slidePrev = document.querySelector('.slide-prev ')
const weatherIcon= document.querySelector('.weather-icon')
const temperature = document.querySelector('.temperature')
const weatherDescription = document.querySelector('.weather-description')
const city = document.querySelector('.city')


async function getWeather() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=Минск&lang=ru&appid=65fd0659067eb109288af36316a63508&units=metric`;
    const res = await fetch(url)
    const data = await res.json()
    console.log(data.weather[0].id, data.weather[0].description, Math.round(data.main.temp))
      weatherIcon.className = 'weather-icon owf'
     weatherIcon.classList.add(`owf-${data.weather[0].id}`)
    temperature.textContent = Math.round(data.main.temp) + ' °C'
    weatherDescription.textContent = data.weather[0].description
}
 getWeather() 

async function getWeatherResult() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=ru&appid=65fd0659067eb109288af36316a63508&units=metric`;
    const res = await fetch(url)
    const data = await res.json()
    console.log(data.weather[0].id, data.weather[0].description, Math.round(data.main.temp))
      weatherIcon.className = 'weather-icon owf'
     weatherIcon.classList.add(`owf-${data.weather[0].id}`)
    temperature.textContent = Math.round(data.main.temp) + ' °C'
    weatherDescription.textContent = data.weather[0].description
}

city.addEventListener('change', getWeatherResult) 

// function setLocalStorageCity() {
//     localStorage.setItem('name', city.value);     
// }
// window.addEventListener('beforeunload', setLocalStorageCity)

// function getLocalStorageCity() {
//     if (localStorage.getItem('name')) {
//         city.value = localStorage.getItem('name')
//     }
// }
// window.addEventListener('load', getLocalStorageCity)  



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
     greeting.textContent = `Good nigth, `
    }
    else if (hours < 12) {
      greeting.textContent = `Good morning, `
    }
    else if (hours < 17) {
     greeting.textContent = `Good afternoon, `
    }
    else if (hours < 24) {
     greeting.textContent = `Good evening, `
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



let randomNum
function getRandomNum(min, max){
    randomNum = (Math.floor((Math.random() * (max - min) + min)))
    console.log(randomNum)
}
getRandomNum(1, 21) 


const night = [
    "url('https://raw.github.com/inna38/stage1-tasks/assets/images/night/01.jpg')",
    "url('https://raw.github.com/inna38/stage1-tasks/assets/images/night/02.jpg')",
    "url('https://raw.github.com/inna38/stage1-tasks/assets/images/night/03.jpg')",
    "url('https://raw.github.com/inna38/stage1-tasks/assets/images/night/04.jpg')",
    "url('https://raw.github.com/inna38/stage1-tasks/assets/images/night/05.jpg')",
    "url('https://raw.github.com/inna38/stage1-tasks/assets/images/night/06.jpg')",
    "url('https://raw.github.com/inna38/stage1-tasks/assets/images/night/07.jpg')",
    "url('https://raw.github.com/inna38/stage1-tasks/assets/images/night/08.jpg')",
    "url('https://raw.github.com/inna38/stage1-tasks/assets/images/night/09.jpg')",
    "url('https://raw.github.com/inna38/stage1-tasks/assets/images/night/10.jpg')",
    "url('https://raw.github.com/inna38/stage1-tasks/assets/images/night/11.jpg')",
    "url('https://raw.github.com/inna38/stage1-tasks/assets/images/night/12.jpg')",
    "url('https://raw.github.com/inna38/stage1-tasks/assets/images/night/13.jpg')",
    "url('https://raw.github.com/inna38/stage1-tasks/assets/images/night/14.jpg')",
    "url('https://raw.github.com/inna38/stage1-tasks/assets/images/night/15.jpg')",
    "url('https://raw.github.com/inna38/stage1-tasks/assets/images/night/16.jpg')",
    "url('https://raw.github.com/inna38/stage1-tasks/assets/images/night/17.jpg')",
    "url('https://raw.github.com/inna38/stage1-tasks/assets/images/night/18.jpg')",
    "url('https://raw.github.com/inna38/stage1-tasks/assets/images/night/19.jpg')",
    "url('https://raw.github.com/inna38/stage1-tasks/assets/images/night/20.jpg')"
]

const morning = [
    "url('https://raw.github.com/inna38/stage1-tasks/assets/images/morning/01.jpg')",
    "url('https://raw.github.com/inna38/stage1-tasks/assets/images/morning/02.jpg')",
    "url('https://raw.github.com/inna38/stage1-tasks/assets/images/morning/03.jpg')",
    "url('https://raw.github.com/inna38/stage1-tasks/assets/images/morning/04.jpg')",
    "url('https://raw.github.com/inna38/stage1-tasks/assets/images/morning/05.jpg')",
    "url('https://raw.github.com/inna38/stage1-tasks/assets/images/morning/06.jpg')",
    "url('https://raw.github.com/inna38/stage1-tasks/assets/images/morning/07.jpg')",
    "url('https://raw.github.com/inna38/stage1-tasks/assets/images/morning/08.jpg')",
    "url('https://raw.github.com/inna38/stage1-tasks/assets/images/morning/09.jpg')",
    "url('https://raw.github.com/inna38/stage1-tasks/assets/images/morning/10.jpg')",
    "url('https://raw.github.com/inna38/stage1-tasks/assets/images/morning/11.jpg')",
    "url('https://raw.github.com/inna38/stage1-tasks/assets/images/morning/12.jpg')",
    "url('https://raw.github.com/inna38/stage1-tasks/assets/images/morning/13.jpg')",
    "url('https://raw.github.com/inna38/stage1-tasks/assets/images/morning/14.jpg')",
    "url('https://raw.github.com/inna38/stage1-tasks/assets/images/morning/15.jpg')",
    "url('https://raw.github.com/inna38/stage1-tasks/assets/images/morning/16.jpg')",
    "url('https://raw.github.com/inna38/stage1-tasks/assets/images/morning/17.jpg')",
    "url('https://raw.github.com/inna38/stage1-tasks/assets/images/morning/18.jpg')",
    "url('https://raw.github.com/inna38/stage1-tasks/assets/images/morning/19.jpg')",
    "url('https://raw.github.com/inna38/stage1-tasks/assets/images/morning/20.jpg')",
]

const afternoon = [
     "url('https://raw.github.com/inna38/stage1-tasks/assets/images/afternoon/01.jpg')",
   "url('https://raw.github.com/inna38/stage1-tasks/assets/images/afternoon/02.jpg')",
     "url('https://raw.github.com/inna38/stage1-tasks/assets/images/afternoon/03.jpg')",
      "url('https://raw.github.com/inna38/stage1-tasks/assets/images/afternoon/04.jpg')",
  "url('https://raw.github.com/inna38/stage1-tasks/assets/images/afternoon/05.jpg')",
  "url('https://raw.github.com/inna38/stage1-tasks/assets/images/afternoon/06.jpg')",
    "url('https://raw.github.com/inna38/stage1-tasks/assets/images/afternoon/07.jpg')",
   "url('https://raw.github.com/inna38/stage1-tasks/assets/images/afternoon/08.jpg')",
    "url('https://raw.github.com/inna38/stage1-tasks/assets/images/afternoon/09.jpg')",
   "url('https://raw.github.com/inna38/stage1-tasks/assets/images/afternoon/10.jpg')",
     "url('https://raw.github.com/inna38/stage1-tasks/assets/images/afternoon/11.jpg')",
     "url('https://raw.github.com/inna38/stage1-tasks/assets/images/afternoon/12.jpg')",
    "url('https://raw.github.com/inna38/stage1-tasks/assets/images/afternoon/13.jpg')",
 "url('https://raw.github.com/inna38/stage1-tasks/assets/images/afternoon/14.jpg')",
    "url('https://raw.github.com/inna38/stage1-tasks/assets/images/afternoon/15.jpg')",
   "url('https://raw.github.com/inna38/stage1-tasks/assets/images/afternoon/16.jpg')",
  "url('https://raw.github.com/inna38/stage1-tasks/assets/images/afternoon/17.jpg')",
    "url('https://raw.github.com/inna38/stage1-tasks/assets/images/afternoon/18.jpg')",
"url('https://raw.github.com/inna38/stage1-tasks/assets/images/afternoon/19.jpg')",
   "url('https://raw.github.com/inna38/stage1-tasks/assets/images/afternoon/20.jpg')"
]

const evening = [
    "url('https://raw.github.com/inna38/stage1-tasks/assets/images/evening/01.jpg')",
    "url('https://raw.github.com/inna38/stage1-tasks/assets/images/evening/02.jpg')",
    "url('https://raw.github.com/inna38/stage1-tasks/assets/images/evening/03.jpg')",
    "url('https://raw.github.com/inna38/stage1-tasks/assets/images/evening/04.jpg')",
    "url('https://raw.github.com/inna38/stage1-tasks/assets/images/evening/05.jpg')",
    "url('https://raw.github.com/inna38/stage1-tasks/assets/images/evening/06.jpg')",
    "url('https://raw.github.com/inna38/stage1-tasks/assets/images/evening/07.jpg')",
    "url('https://raw.github.com/inna38/stage1-tasks/assets/images/evening/08.jpg')",
    "url('https://raw.github.com/inna38/stage1-tasks/assets/images/evening/09.jpg')",
    "url('https://raw.github.com/inna38/stage1-tasks/assets/images/evening/10.jpg')",
    "url('https://raw.github.com/inna38/stage1-tasks/assets/images/evening/11.jpg')",
    "url('https://raw.github.com/inna38/stage1-tasks/assets/images/evening/12.jpg')",
    "url('https://raw.github.com/inna38/stage1-tasks/assets/images/evening/13.jpg')",
    "url('https://raw.github.com/inna38/stage1-tasks/assets/images/evening/14.jpg')",
    "url('https://raw.github.com/inna38/stage1-tasks/assets/images/evening/15.jpg')",
    "url('https://raw.github.com/inna38/stage1-tasks/assets/images/evening/16.jpg')",
    "url('https://raw.github.com/inna38/stage1-tasks/assets/images/evening/17.jpg')",
    "url('https://raw.github.com/inna38/stage1-tasks/assets/images/evening/18.jpg')",
    "url('https://raw.github.com/inna38/stage1-tasks/assets/images/evening/19.jpg')",
    "url('https://raw.github.com/inna38/stage1-tasks/assets/images/evening/20.jpg')",

]

function setBg() {
      const date = new Date()
    let timeOfDay = date.getHours()

      if (timeOfDay < 4) {
          body.style.backgroundImage = night[Math.floor(Math.random() * night.length)]
          
 function getSlaiderNex() {
    body.style.backgroundImage = night[Math.floor(Math.random()*night.length) + 1]
}
slideNext.addEventListener('click', getSlaiderNex)


function getSlaiderPrev() {
    body.style.backgroundImage = night[Math.floor(Math.random()*night.length) - 1]
}
slidePrev.addEventListener('click', getSlaiderPrev)         
    }
    else if (timeOfDay < 12) {
          body.style.backgroundImage = morning[Math.floor(Math.random() * morning.length)]
          
  function getSlaiderNex() {
    body.style.backgroundImage = morning[Math.floor(Math.random()*morning.length) + 1]
}
slideNext.addEventListener('click', getSlaiderNex)


function getSlaiderPrev() {
    body.style.backgroundImage = morning[Math.floor(Math.random()*morning.length) - 1]
}
slidePrev.addEventListener('click', getSlaiderPrev)          
           
    }
    else if (timeOfDay < 17) {
          body.style.backgroundImage = afternoon[Math.floor(Math.random() * afternoon.length)]

          function getSlaiderNex() {
    body.style.backgroundImage = afternoon[Math.floor(Math.random()*afternoon.length) + 1]
}
slideNext.addEventListener('click', getSlaiderNex)


function getSlaiderPrev() {
    body.style.backgroundImage = afternoon[Math.floor(Math.random()*afternoon.length) - 1]
}
slidePrev.addEventListener('click', getSlaiderPrev)
     }
    else if (timeOfDay < 24) {
          body.style.backgroundImage = evening[Math.floor(Math.random() * evening.length)]
          
 function getSlaiderNex() {
    body.style.backgroundImage = evening[Math.floor(Math.random()*evening.length) + 1]
}
slideNext.addEventListener('click', getSlaiderNex)


function getSlaiderPrev() {
    body.style.backgroundImage = evening[Math.floor(Math.random()*evening.length) - 1]
}
slidePrev.addEventListener('click', getSlaiderPrev)
     
    }
  }
setBg()







// setInterval(() => {
//     const date = new Date()
//     const currentTime = date.toLocaleTimeString()
//     time.textContent = currentTime
// }, 1000);

// const pause = document.querySelector('.pause')
const play = document.querySelector('.play')
const first = document.querySelector('.play-prev')
const last = document.querySelector('.play-next')
const audio = new Audio()
playNum = 0
let isPlay = false

function playAudio() {
    if (!isPlay) {
        audio.src = "./assets/sounds/Aqua Caelestis.mp3"
        // audio.src = "./sounds/Ennio Morricone.mp3"
        // audio.src = "./sounds/River Flows In You.mp3"
        //  audio.src="./sounds/Summer Wind.mp3"
        audio.current = 0
        
    audio.play()

    } 
}

// playAudio()
function pauseAudio() {
     isPlay = false
    audio.pause()
}

function firstAudio() {
    
}

function lastAudio() {
    
}


play.addEventListener('click', playAudio)
pause.addEventListener('click', pauseAudio )


const playList = [
    {
    title: "Aqua Caelestis",
    srs:  "./sounds/Aqua Caelestis.mp3"
    },
    {
    title: "Ennio Morricone",
    srs: "./sounds/Ennio Morricone.mp3"
    },
    {
    title: "River Flows In You",
    srs: "./sounds/River Flows In You.mp3"
    },
    {
    title: "Summer Wind",
    srs: "./sounds/Summer Wind.mp3"
    }
]