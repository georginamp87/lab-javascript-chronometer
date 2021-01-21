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
  minDec.innerText = chronometer.splitClick()[0]
  minUni.innerText = chronometer.splitClick()[1]
}

function printSeconds() {
  secDec.innerText = chronometer.splitClick()[3]
  secUni.innerText = chronometer.splitClick()[4]
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  let item  = document.createElement('li')
  let splitList = document.querySelector('#splits')
splitlist.appendChild(item)
// printTime.toString
}

function clearSplits() {
 splitList.removeChild
}
 //function toggle() {
    //  let btnStatus = running
//  if (btnStatus = true ) {
// btnLeft.classList.toggle("stop")}
// else if (btnStatus != true) {
//   btnLeft.classList.toggle("start")
// }

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
    chronometer.startClick(printTime)
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
 }

 });

