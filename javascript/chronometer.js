class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = 0
  }
  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1
      // callback()
  }, 1000)
  }
  getMinutes() {
    let minutes = Math.floor(this.currentTime/60) 
      return minutes
  }
  getSeconds() {
    let seconds = Math.floor(this.currentTime%60)
    return seconds
  }
  
  twoDigitsNumber(number) {
      if (number < 9 ) {
        return "0" + (number)
      } else if (number > 9) {
      return number.toFixed(2)
      }
    }

  stopClick() {
    clearInterval(this.intervalId)
  } 
  resetClick() {
    this.currentTime = 0
  }
  splitClick() {
    let min = this.twoDigitsNumber(this.getMinutes())  
    let sec = this.twoDigitsNumber(this.getSeconds())
    return `${min}:${sec}`
  }
}
