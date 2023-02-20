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
const humidity = document.querySelector('.humidity')
const wind = document.querySelector('.wind')
let city = document.querySelector('.city')

// async function getWeather() {
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=Минск&lang=en&appid=65fd0659067eb109288af36316a63508&units=metric`;
//     const res = await fetch(url)
//     const data = await res.json()
   
//       weatherIcon.className = 'weather-icon owf'
//      weatherIcon.classList.add(`owf-${data.weather[0].id}`)
//     temperature.textContent = Math.round(data.main.temp) + ' °C'
//     weatherDescription.textContent = data.weather[0].description,
//         humidity.textContent = 'Humidity: ' + data.main.humidity + '%'
//     wind.textContent = 'Wind speed: ' + Math.round(data.wind.speed) + ' m/s'
// }
//  getWeather() 
city.value = 'Minsk'
async function getWeatherResult() {
    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=65fd0659067eb109288af36316a63508&units=metric`;
        const res = await fetch(url)
        const data = await res.json()
  
        weatherIcon.className = 'weather-icon owf'
        weatherIcon.classList.add(`owf-${data.weather[0].id}`)
        temperature.textContent = Math.round(data.main.temp) + ' °C'
        weatherDescription.textContent = data.weather[0].description
        humidity.textContent = 'Humidity: ' + data.main.humidity + '%'
        wind.textContent = 'Wind speed: ' + Math.round(data.wind.speed) + ' m/s'
    }
    catch (e) {
        if (!city.value || city.value !== city) {
        
            temperature.textContent = 'Error'
            weatherDescription.textContent = ''
            humidity.textContent = ''
                 wind.textContent = ''
                  
        }
    }
}
//  getWeatherResult()

 city.addEventListener('change', getWeatherResult) 

function setLocalStorageCity() {
    localStorage.setItem('city', city.value);     
}
window.addEventListener('beforeunload', setLocalStorageCity)

function getLocalStorageCity() {
    if (localStorage.getItem('city')) {
        city.value = localStorage.getItem('city')
    }
}
window.addEventListener('load', getLocalStorageCity)  



function showTime() {
    const date = new Date()
    const currentTime = date.toLocaleTimeString()
    time.textContent = currentTime
    getTimeOfDay()
    showDate()
     getWeatherResult()
    setTimeout(showTime, 1000)
    
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
    if (hours < 6) {
     greeting.textContent = `Good nigth, `
    }
    else if (hours < 12) {
      greeting.textContent = `Good morning, `
    }
    else if (hours < 18) {
     greeting.textContent = `gfgfgfg`
    }
    else if (hours < 24) {
     greeting.textContent = `Good evening, `
    }
}
getTimeOfDay(en)


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
let play = document.querySelector('.play')
const first = document.querySelector('.play-prev')
const last = document.querySelector('.play-next')
let pause = document.querySelector('.pause')

let aqua = document.querySelector('.aqua')
let ennio = document.querySelector('.ennio')
let river = document.querySelector('.river')
let summer = document.querySelector('.summer')

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
        aqua.classList.add('active')
        audio.play()

        //    play.classList.toggle('pause')
     
   isPlay = true
   
        
    }
   else if (isPlay)  {
        audio.pause()
        
  aqua.classList.remove('active')
        ennio.classList.remove('active')
       river.classList.remove('active')
        summer.classList.remove('active')

    //   pause.classList.remove('play')
 isPlay = false
    }
}


function toggleBtn(){
    play.classList.toggle('pause')
}

play.addEventListener('click', toggleBtn)


// let playListIndex = 0
const playList = ['srs: "./assets/sounds/Aqua Caelestis.mp3"', 'srs: "./assets/sounds/Ennio Morricone.mp3"', 'srs: "./assets/sounds/River Flows In You.mp3"', 'srs:"./assets/sounds/Summer Wind.mp3"']
function listPlay(playList) {
    audio.src = `"./assets/sounds/${playList}.mp3"`
}
listPlay(playList[playNum])




// function () {
//     playListIndex++
//     listPlay(playLists[playListIndex])
//     playAudio()

// }
// let maricone = false
function lastAudio() {
   
    //     playNum++
    //     listPlay(playList[playNum])
    //         // audio.src = `"./assets/sounds/${playList[playNum]}.mp3"`
    //         playAudio()
    // }
    // for (let i = 1; i < playList.length; i++) {
     
        // if (i === 0) {
        //     audio.src = "./assets/sounds/Aqua Caelestis.mp3"
        //     audio.play()
        //      console.log('000')
        //     i++
        // }
   
    play.classList.add('pause')
    if (playNum === 0) {
        
       // if (!isPlay || isPlay) {
        audio.src = "./assets/sounds/Ennio Morricone.mp3"
          aqua.classList.remove('active')
        ennio.classList.add('active')
            audio.play()
            playNum++
            console.log('111')
            isPlay = true
       // }
         
    }
          
       
   else if (playNum === 1 )  {
    
        audio.src = "./assets/sounds/River Flows In You.mp3"
          ennio.classList.remove('active')
            river.classList.add('active')
          audio.play()
        console.log('222')
        playNum++
             isPlay = true
    }
    
    else if (playNum === 2 ) {
    
        audio.src = "./assets/sounds/Summer Wind.mp3"
         river.classList.remove('active')
        summer.classList.add('active')
          audio.play()
        console.log('333')
        playNum++
           isPlay = true
    }
    
    else if (playNum === 3 ) {
    
        audio.src = "./assets/sounds/Aqua Caelestis.mp3"
        summer.classList.remove('active')
       aqua.classList.add('active')
          audio.play()
        console.log('444')
        playNum = 0
            isPlay = true
    }
      
}

let lastNum = 4
function firstAudio() {

    play.classList.add('pause')
    if (lastNum === 4) {
        
        //if (!isPlay || isPlay) {
        audio.src = "./assets/sounds/Summer Wind.mp3"
         summer.classList.add('active')
              aqua.classList.remove('active')
            audio.play()
            lastNum--
            console.log('444')
            isPlay = true
        //}
         
    }
          
       
   else if (lastNum === 3 )  {
    
        audio.src = "./assets/sounds/River Flows In You.mp3"
          river.classList.add('active')
            summer.classList.remove('active')
          audio.play()
        console.log('33')
        lastNum--
            isPlay = true
    }
    
    else if (lastNum === 2 ) { 
    
        audio.src = "./assets/sounds/Ennio Morricone.mp3"
        ennio.classList.add('active')
          river.classList.remove('active')
          audio.play()
        console.log('22')
        lastNum--
            isPlay = true
    }
    
    else if (lastNum === 1 ) {
    
        audio.src = "./assets/sounds/Aqua Caelestis.mp3"
        aqua.classList.add('active')
       ennio.classList.remove('active')
          audio.play()
        console.log('11')
        lastNum = 4
            isPlay = true
    }
}
play.addEventListener('click', playAudio)
last.addEventListener('click', lastAudio)
first.addEventListener('click', firstAudio)
 


// pause.addEventListener('click', pauseAudio )



    // {
    // title: "Aqua Caelestis",
    // srs:  "./assets/sounds/Aqua Caelestis.mp3"
    // },
    // {
    // title: "Ennio Morricone",
    // srs: "./assets/sounds/Ennio Morricone.mp3"
    // },
    // {
    // title: "River Flows In You",
    // srs: "./assets/sounds/River Flows In You.mp3"
    // },
    // {
    // title: "Summer Wind",
    // srs: "./assets/sounds/Summer Wind.mp3"
    // }
//]
// export default playList

// const li = document.createElement('li')
// li.classList.add('play-item');
// li.textContent = 'Aqua Caelestis';
// playListContainer.append('li')






// pause.addEventListener('click', pauseAudio )



    // {
    // title: "Aqua Caelestis",
    // srs:  "./assets/sounds/Aqua Caelestis.mp3"
    // },
    // {
    // title: "Ennio Morricone",
    // srs: "./assets/sounds/Ennio Morricone.mp3"
    // },
    // {
    // title: "River Flows In You",
    // srs: "./assets/sounds/River Flows In You.mp3"
    // },
    // {
    // title: "Summer Wind",
    // srs: "./assets/sounds/Summer Wind.mp3"
    // }
//]
// export default playList

// const li = document.createElement('li')
// li.classList.add('play-item');
// li.textContent = 'Aqua Caelestis';
// playListContainer.append('li')






// const audio = new Audio()
// playNum = 0
// let isPlay = false

// function playAudio() {
//     if (!isPlay) {
//         audio.src = "./assets/sounds/Aqua Caelestis.mp3"
     
//         audio.current = 0
       
       
//         audio.play()
       
     
//    isPlay = true
   
        
//     }
//    else if (isPlay)  {
//         audio.pause()
//       
  
//  isPlay = false
//     }
// }


// function toggleBtn(){
//     play.classList.toggle('pause')
// }

// play.addEventListener('click', toggleBtn)



// const playList = ['srs: "./assets/sounds/Aqua Caelestis.mp3"', 'srs: "./assets/sounds/Ennio Morricone.mp3"', 'srs: "./assets/sounds/River Flows In You.mp3"', 'srs:"./assets/sounds/Summer Wind.mp3"']
// function listPlay(playList) {
//     audio.src = `"./assets/sounds/${playList}.mp3"`
// }

// function lastAudio() {
   
 
   
//     play.classList.add('pause')
//     if (playNum === 0) {
        
//         if (!isPlay || isPlay ) {
//             audio.src = "./assets/sounds/Ennio Morricone.mp3"
//           
//             audio.play()
//             playNum++
           
//             console.log('111')
            
//         }
         
//     }
          
       
//    else if (playNum === 1 )  {
    
//         audio.src = "./assets/sounds/River Flows In You.mp3"
//         
         
//           audio.play()
//         console.log('222')
//         playNum++
       
//     }
    
//     else if (playNum === 2 ) {
    
//         audio.src = "./assets/sounds/Summer Wind.mp3"
//          
//           audio.play()
//         console.log('333')
//         playNum++
        
//     }
    
//     else if (playNum === 3 ) {
    
//         audio.src = "./assets/sounds/Aqua Caelestis.mp3"
//            
//           audio.play()
//         console.log('444')
//         playNum = 0
       
//     }
      
// }

// let lastNum = 4
// function firstAudio() {

//     play.classList.add('pause')
//     if (lastNum === 4) {
        
//         if (!isPlay || isPlay) {
//             audio.src = "./assets/sounds/Summer Wind.mp3"
//            
        
//             audio.play()
//             lastNum--
//             console.log('444')
//             isPlay = true
//         }
         
//     }
          
       
//    else if (lastNum === 3 )  {
    
//         audio.src = "./assets/sounds/River Flows In You.mp3"
//       
//           audio.play()
//         console.log('33')
//         lastNum--
      
//     }
    
//     else if (lastNum === 2 ) { 
    
//         audio.src = "./assets/sounds/Ennio Morricone.mp3"
        
//          
//           audio.play()
//         console.log('22')
//         lastNum--
       
//     }
    
//     else if (lastNum === 1 ) {
    
//         audio.src = "./assets/sounds/Aqua Caelestis.mp3"
        
//           
//           audio.play()
//         console.log('11')
//         lastNum = 4
//     }
// }
// play.addEventListener('click', playAudio)
// last.addEventListener('click', lastAudio)
// first.addEventListener('click', firstAudio)
 
//  addEventListener('ended', (event) => {
//     audio.src = "./assets/sounds/Ennio Morricone.mp3" 
//  })