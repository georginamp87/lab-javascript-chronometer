class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = 0
    this.milliseconds = 0
    this.milliIntervalId = 0
  }

  startClick(callback, milliCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1
      callback()
  }, 1000)
  

  this.milliIntervalId = setInterval (() => {
    this.milliseconds += 1
    milliCallback();
  }, 10)
}

  getMinutes() {
    return Math.floor(this.currentTime/60) 
  }
  getSeconds() {
    return Math.floor(this.currentTime%60)
  }
  
  twoDigitsNumber(number) {
    let num = "0" + number
    return num.slice(-2)
      // if (number < 10 ) {
      //   return "0" + number
      // } else if (number > 9) {
      // return number.toFixed(2)
      // }
    }

  stopClick() {
    clearInterval(this.intervalId)
    clearInterval(this.milliIntervalId)
  } 

  resetClick() {
    this.currentTime = 0
    this.milliseconds = 0
  }

  splitClick() {
    let min = this.twoDigitsNumber(this.getMinutes())  
    let sec = this.twoDigitsNumber(this.getSeconds())
    let mill = this.twoDigitsNumber(this.milliseconds)
    return `${min}:${sec}:${mill}`
  }
}
