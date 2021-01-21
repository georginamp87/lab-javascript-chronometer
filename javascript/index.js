const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

function printTime() {
  printMinutes()
  printSeconds()
}

function printMinutes() {
  let min = chronometer.twoDigitsNumber(chronometer.getMinutes())
  minDec.innerText = min[0]
  minUni.innerText = min[1]
}

function printSeconds() {
  let sec = chronometer.twoDigitsNumber(chronometer.getSeconds())
  secDec.innerText = sec[0]
  secUni.innerText = sec[1]
}

// ==> BONUS
function printMilliseconds() {
let mill = chronometer.twoDigitsNumber(chronometer.milliseconds)
milDec.innerText = mill[0]
milUni.innerText = mill[1]
}

function printSplit() {
   let time = chronometer.splitClick()
   let li = document.createElement('li')
   li.innerHTML = time
   splits.appendChild(li)
}

function clearSplits() {
 splits.innerHTML = ""
}

function setStopBtn() {
  btnLeft.classList.remove("start")
  btnLeft.classList.add("stop")
  btnLeft.innerHTML = "STOP"
}

function setSplitBtn() {
  btnRight.classList.remove("reset")
  btnRight.classList.add("split")
  btnRight.innerHTML = "SPLIT"
}

function setStartBtn() {
  btnLeft.classList.remove("stop")
  btnLeft.classList.add("start")
  btnLeft.innerHTML = "START"
}

function setResetBtn() {
  btnRight.classList.remove("split")
  btnRight.classList.add("reset")
  btnRight.innerHTML = "RESET"
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if(btnLeft.classList.contains("start")) {
    chronometer.startClick(printTime,printMilliseconds)
    setStopBtn()
    setSplitBtn()
  } else {
  chronometer.stopClick()
  setStartBtn()
  setResetBtn()
  }  
})

// Reset/Split Button
btnRight.addEventListener('click', () => {
 if(btnRight.classList.contains("split")) {
   printSplit()
 }
 else {
   clearSplits()
   chronometer.resetClick()
   printTime()
   printMilliseconds()
 }

 });