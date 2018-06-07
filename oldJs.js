document.addEventListener('DOMContentLoaded', start)

const counter = document.getElementById('counter')
const minus = document.getElementById('-')
const plus = document.getElementById('+')
const heart = document.getElementById('<3')
const likes = document.querySelector(".likes")
const pause = document.getElementById('pause')
const buttons = document.querySelectorAll('button')
let t;
let count;

function start(){

  plus.addEventListener("click", addTime)
  minus.addEventListener("click", subtractTime)
  heart.addEventListener("click", like)
  pause.addEventListener("click", pausePlay)
}
function startTime(){
  t = setInterval(addTime, 1000)
}

function addTime(){
  counter.innerHTML = parseInt(counter.innerHTML) + 1
}

function subtractTime(){
  counter.innerHTML = parseInt(counter.innerHTML) - 1
}

function like(){
  let li = document.createElement("LI")
  li.innerHTML = `${counter.innerHTML} was liked`
  likes.appendChild(li)
}

function pausePlay(){

  if (pause.innerText === "pause"){
    pause.innerText = "resume"
    stopTime()
  }
  if (pause.innerText === "resume"){
    // resumeTime()
    pause.innerHTML = "pause"
  }
}

function stopTime(){
  console.log('clicked pause, into stopTime')
  count = counter.innerHTML
  disableButtons()
  // clearInterval(t)
}

function disableButtons(){
  buttons.forEach(button => {
    if (button.id !== 'pause'){
      button.disabled = true
    }
  })
}
