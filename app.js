const board = document.querySelector('#board')
// const SQUARES_NUMBER = 500
const colors = ['#001b48','#004581','#018abd','#97cbdc','#dde8f0']

const input = document.querySelector('#num')
const startBtn = document.querySelector('#start')
const clearBtn = document.querySelector('#clear')

let isStarted = false

startBtn.addEventListener('click', start)
clearBtn.addEventListener('click', clear)

function start(){
    if(isStarted == false){
        let SQUARES_NUMBER = input.value
        if(SQUARES_NUMBER > 700){
            SQUARES_NUMBER = 700
            input.value = 700
        }
        for (let i = 0; i < SQUARES_NUMBER; i++) {
            const square = document.createElement('div')
        
            square.classList.add('square')
        
            square.addEventListener('mouseover', setColor)
            square.addEventListener('mouseleave', removeColor)
        
            board.append(square)
        }
        isStarted = true
    }
}
function clear(){
    input.value = 100
    board.innerHTML = ""
    isStarted  = false
}

function setColor(event) {
    const element = event.target
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = ` 0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(event) {
    const element = event.target
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = '0 0 2px #000';
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}