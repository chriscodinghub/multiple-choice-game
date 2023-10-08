var startBtn = document.querySelector('#startBtn')
var time = document.querySelector('#timerContainer')
var scoreKeeper = document.querySelector('#scoreContainer')
var score = 0
var questionsContainer = document.querySelector('#questionsContainer')
var timer = 0
var timerInterval
var body = document.body
var h1El = document.createElement('h1')
var buttonElOne = document.createElement('button')
        buttonElOne.setAttribute('id', 'btnOne')
var buttonElTwo = document.createElement('button')
        buttonElTwo.setAttribute('id', 'btnTwo')
var buttonElThree = document.createElement('button')
        buttonElThree.setAttribute('id', 'btnThree')
var buttonElFour = document.createElement('button')
        buttonElFour.setAttribute('id', 'btnFour')
        


function qOne() {
 body.appendChild(h1El)
 h1El.textContent = "What is the correct name for a stylesheet document?"
 h1El.appendChild(buttonElOne)
 buttonElOne.textContent = "style.js"
 h1El.appendChild(buttonElTwo)
 buttonElTwo.textContent = "style.ccs"
 h1El.appendChild(buttonElThree)
 buttonElThree.textContent = "style.css"
 h1El.appendChild(buttonElFour)
 buttonElFour.textContent = "styles.html"
   
 buttonElOne.addEventListener('click', function() {
    console.log(false)
    timer--
    score--
    // qTwo()
  })

 buttonElTwo.addEventListener('click', function() {
    console.log(false)
    timer--
    score--
    // qTwo()
  })

buttonElThree.addEventListener('click', function() {
  console.log(true)
  score++
//   qTwo()
})

buttonElFour.addEventListener('click', function() {
    console.log(false)
    timer--
    score--
    // qTwo()
  })
}



function timerHandler() {
    timer = 60
    var timerInterval = setInterval(function(){
        timer--
        timerContainer.textContent = timer
        if (timer === 0) {
            clearInterval(timerInterval)
            alert("Game Over Dude!")
        }
    }, 1000)
}

function scoreFun() {
    score = 0
    var scoreKeeper = score
    scoreContainer.textContent = score

}

startBtn.addEventListener('click', function() {
    timerHandler()
    qOne()
} )