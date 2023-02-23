const time = document.querySelector('.time')
const dateStr = document.querySelector('.date')
const greeting = document.querySelector ('.greeting')
const name = document.querySelector ('.name')
const body = document.querySelector('body')
const slideNext = document.querySelector('.slide-next')
const slidePrev = document.querySelector('.slide-prev ')
const weather = document.querySelector('.weather')
const weatherIcon= document.querySelector('.weather-icon')
const temperature = document.querySelector('.temperature')
const weatherDescription = document.querySelector('.weather-description')
const humidity = document.querySelector('.humidity')
const wind = document.querySelector('.wind')
let city = document.querySelector('.city')
let langEn = document.querySelector('.lang-en')
 let langRu = document.querySelector('.lang-ru')
// let lang = document.querySelector('.lang')



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
        if ( city.value !== city) {
        
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
    // setBg()
    // quoteFn()
    // getTimeOfDayRu()
    // getTimeOfDayEn()
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


//------------------------------------------------------------------------------------------
//     let greetingTranslation = {

//    'ru': {
//             ru: 'Добрый день',
//             ru: 'Добрій вечер'
          
//      }
        
// };
// let hash = window.location.hash
// hash = hash
// console.log(hash)

// langRu.addEventListener('click', () => {
//     greeting.innerHTML = greetingTranslation.ru;
// })


//     langRu.addEventListener('click', () => {
       
//         const date = new Date()
//         const hours = date.getHours()
//             const option = { weekday: 'long', month: 'long', day: 'numeric'}
//     const current = date.toLocaleDateString('ru-Ru', option)
//     dateStr.textContent = current
//     if (hours < 6) {
//      greeting.textContent = `Доброй ночи, `
//     }
//     else if (hours < 12) {
//       greeting.textContent = `Доброе утро, `
//     }
//     else if (hours < 18) {
//         greeting.textContent = `Добрый день, `
           
//     }
//     else if (hours < 24) {
//      greeting.textContent = `Добрый вечер, `
//         }
//     })
    
//     langEn.addEventListener('click',() => {
//         const date = new Date()
//     const hours = date.getHours()
//     if (hours < 6) {
//      greeting.textContent = `Good nigth, `
//     }
//     else if (hours < 12) {
//       greeting.textContent = `Good morning, `
//     }
//     else if (hours < 18) {
//         greeting.textContent = `Good afternoon, `
           
//    }
//     else if (hours < 24) {
//      greeting.textContent = `Good evening, `
//     }})



// function getTimeOfDayRu(){
//    const date = new Date()
//     const hours = date.getHours()
//     if (hours < 6) {
//      greeting.textContent = `Good nigth, `
//     }
//     else if (hours < 12) {
//       greeting.textContent = `Good morning, `
//     }
//     else if (hours < 18) {
//      greeting.textContent = `Добрый день `
//     }
//     else if (hours < 24) {
//      greeting.textContent = `Good evening, `
//     }
// }



// function getTimeOfDayRu() {
//     if (greeting.textContent = `Good eveneeng, `) {
//         greeting.textContent.remove = `Good eveneeng, `
//         greeting.textContent = 'Добрый день'
//     }
// }

// function getTimeOfDayEn() {
//      if (greeting.textContent = 'Добрый день') {
//         greeting.textContent = `Good eveneeng, `
//     }
// }


// langRu.addEventListener('click', getTimeOfDay)
// langEn.addEventListener('click', getTimeOfDayEn)
// langRu.addEventListener('click', getTimeOfDayRu)

//----------------------------------------------------------------------------------------------




//  --------------------------------------------------------------------------------------------------


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
        greeting.textContent =  `Good afternoon, `
            
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

      if (timeOfDay < 6) {
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
    else if (timeOfDay < 18) {
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
let playLists = document.querySelector('.play-list')
let player = document.querySelector('.player')
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

 

let quote = document.querySelector('.quote')
let changeQuote = document.querySelector('.change-quote')
let author = document.querySelector('.author')
let dataQuotes = [  
    '"Genius is one percent inspiration and ninety-nine percent perspiration."  Thomas Edison',
    '"You can observe a lot just by watching."  Yogi Berra',
    '"A house divided against itself cannot stand."  Abraham Lincoln',  
  '"Difficulties increase the nearer we get to the goal."  Johann Wolfgang von Goethe',  
   '"Fate is in your hands and no one elses"  Byron Pulsifer',
    '"Be the chief but never the lord."  Lao Tzu',
    '"Nothing happens unless first we dream."  Carl Sandburg',
      '"Well begun is half done."  Aristotle',
    '"Life is a learning experience, only if you learn."  Yogi Berra',
        '"Self-complacency is fatal to progress."  Margaret Sangster',
    '"Peace comes from within. Do not seek it without."  Buddha',
    '"What you give is what you get." Byron Pulsifer',  
 '"We can only learn to love by loving." Iris Murdoch',
 ' "Life is change. Growth is optional. Choose wisely." Karen Clark', 
     ' "You ll see it when you believe it." Wayne Dyer',  
       ' "To lead people walk behind them." Lao Tzu',  
  ' "Having nothing, nothing can he lose."  William Shakespeare', 
   ' "Trouble is only opportunity in work clothes."  Henry J. Kaiser',
    ' "A rolling stone gathers no moss."  Publilius Syrus',    
    ' "Ideas are the beginning points of all fortunes." Napoleon Hill', 
    '"Everything in life is luck."  Donald Trump',   
   '"Doing nothing is better than being busy doing nothing." Lao Tzu',
   ' "Trust yourself. You know more than you think you do."  Benjamin Spock',
   '"Study the past, if you would divine the future."  Confucius',  
   ' "From error to error one discovers the entire truth."  Sigmund Freud',
  ' "Well done is better than well said."  Benjamin Franklin',
   '"Bite off more than you can chew, then chew it."  Ella Williams',   
   '   "Work out your own salvation. Do not depend on others."  Buddha',
   ' "One today is worth two tomorrows."  Benjamin Franklin',
    ' "Once you choose hope, anythings possible."  Christopher Reeve',  
   ' "God always takes the simplest way."  Albert Einstein',  
      '"One fails forward toward success."  Charles Kettering',  
   '"Learning is a treasure that will follow its owner everywhere"  Chinese proverb',
      ' "Be as you wish to seem."  Socrates',  
 ' "The world is always in movement."  V. Naipaul',
  ' "Never mistake activity for achievement."  John Wooden',  
    ' "What worries you masters you."  Haddon Robinson', 
  ' "One faces the future with ones past."  Pearl Buck',  
    ' "Goals are the fuel in the furnace of achievement."  Brian Tracy', 
     ' "Who sows virtue reaps honour."  Leonardo da Vinci',  
     ' "Be kind whenever possible. It is always possible."  Dalai Lama',   
     ' "Talk doesnt cook rice."  Chinese proverb',
     ' "He is able who thinks he is able."  Buddha',
      '"A goal without a plan is just a wish."  Larry Elder',
       '"To succeed, we must first believe that we can."  Michael Korda',
        '"Learn from yesterday, live for today, hope for tomorrow."  Albert Einstein',
      ' "A weed is no more than a flower in disguise."  James Lowell',
 ' "Do, or do not. There is no try."  Yoda',
    ' "All serious daring starts from within."  Harriet Beecher Stowe',
      '"The best teacher is experience learned from failures."  Byron Pulsifer',
       ' "Think how hard physics would be if particles could think."  Murray Gell-Mann',
   '"Love is the flower youve got to let grow."  John Lennon',
       '"Dont wait. The time will never be just right."  Napoleon Hill',
  '"Time is the wisest counsellor of all."  Pericles',
      '"You give before you get."  Napoleon Hill',
        ' "Wisdom begins in wonder."  Socrates',
   ' "Without courage, wisdom bears no fruit."  Baltasar Gracian',
       '"Change in all things is sweet."  Aristotle',
       '"What you fear is that which requires action to overcome."  Byron Pulsifer',
       ' "When performance exceeds ambition, the overlap is called success."  Cullen Hightower',
      '"When deeds speak, words are nothing."  African proverb',
   '"Real magic in relationships means an absence of judgement of others."  Wayne Dyer',
'"I never think of the future. It comes soon enough."  Albert Einstein',
   '"Skill to do comes of doing."  Ralph Emerson',
    '"Wisdom is the supreme part of happiness."  Sophocles',
  '"I believe that every person is born with talent."  Maya Angelou',
      ' "Important principles may, and must, be inflexible."  Abraham Lincoln',
    ]



quote.textContent = dataQuotes[Math.floor(Math.random() * dataQuotes.length)]
// let quotesUrl = dataQuotes


function quoteFn() {
  quote.textContent = dataQuotes[Math.floor(Math.random() * dataQuotes.length)]
  
}

 changeQuote.addEventListener('click', quoteFn)


const greetingContainer = document.querySelector('.greeting-input')
const closePlayer = document.querySelector('.close-player')
const closeWeather= document.querySelector('.close-weather')
const closeTime = document.querySelector('.close-time')
const closeDate = document.querySelector('.close-date')
const closeGreeting = document.querySelector('.close-greeting')
const closeQuote = document.querySelector('.close-quote')
const settingHero = document.querySelector('.setting-hero')
const setting = document.querySelectorAll('.setting')

settingHero.addEventListener('click', e => {
    settingHero.classList.toggle('active')
   })


closePlayer.addEventListener('click', e => {
    player.classList.toggle('active')
    playLists.classList.toggle('active')
})
// closeWeather.addEventListener('click', e => {
//     closeWeather.classList.toggle('active')
    
    
// })
closeTime.addEventListener('click', e => {
  
    time.classList.toggle('active')
    //   if (!close) {
    //     closeTime.textContent = 'open'
    // }
    //  closeTime.textContent = 'close'

    // if (!open) {
    //     closeTime.textContent = 'close'
    // }
//  if (!open) {
//         closeTime.textContent = 'close'
//     }
    })
 closeDate.addEventListener('click', e => {
    dateStr.classList.toggle('active')
 })

 closeGreeting.addEventListener('click', e => {
     greeting.classList.toggle('active')
 
 })

 closeQuote.addEventListener('click', e => {
    quote.classList.toggle('active')
})



// function setLocalStorageP() {
//     localStorage.setItem('closePlayer', closePlayer.value);     
// }
// window.addEventListener('beforeunload', setLocalStorageP)

// function getLocalStorageP() {
//     if (localStorage.getItem('closePlayer')) {
//         closePlayer.value = localStorage.getItem('closePlayer')
//     }
// }
// window.addEventListener('load', getLocalStorageP)  


// const todo = {
//     action(e) { },
//     add() { },
//     create(text) { },
//     init() { },
//     update() { },
//     save() { }
// };

// function init() {
//     const fromStorage = localStorage.getItem('todo')
//     if (fromStorage) {
//         document.querySelector('.todo-items')
//     }
//     document.querySelector('.todo-option')
//     document.addEventListener('click', this.action.bind(this))
// }
// function create() {
//     return `<li class="todo-item" data-todo-state="active">
//     <span class="todo-task">${text}</span> 
//     <span class="todo-action todo-action-restore" data-todo-action ="active"></span> 
//     <span class="todo-action todo-action-complete" data-todo-action ="completed"></span> 
//     <span class="todo-action todo-action-delete" data-todo-action ="deleted"></span></li>`
// }
// function save() {
//     localStorage.setItem('todo', document.querySelector('.todo-items').innerHTML)
// }
// function update() {
//     const option = document.querySelector('.todo-optios').value
//     document.querySelector('.todo-items').dataset.todoOption = option
//     document.querySelector('.todo-text').disabled = option !== 'active'
// }