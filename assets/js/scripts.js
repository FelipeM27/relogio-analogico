let hpointer = document.querySelector('.hpointer')
let mpointer = document.querySelector('.mpointer')
let spointer = document.querySelector('.spointer')

function showTime() {
    let getTime = new Date()
    let hour = getTime.getHours()
    let minute = getTime.getMinutes()
    let second = getTime.getSeconds()

    let realSec = ((360 / 60) * second)
    let realMin = ((360 / 60) * minute) + ((6 / 60) * second)
    let realHour = ((360 / 12) * hour) + ((30 / 360) * realMin)
    
    hpointer.style.transform = `rotate(${realHour}deg)`
    mpointer.style.transform = `rotate(${realMin}deg)`
    spointer.style.transform = `rotate(${realSec}deg)`
} 

setInterval(showTime, 1000)
showTime()